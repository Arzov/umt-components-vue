<template>

    <div ref="component" class="umt-component umt-slide">

        <div ref="content" class="content" :umt-end-slide="endTransition" umt-slide-content>
            <div v-for="i in items" :key="i.key" class="item-wrapper" umt-slide-item-wrapper></div>
        </div>
        
        <div class="navigator">
            <div v-for="i in items" :key="i.key" class="pin" :umt-checked="i.checked"/>
        </div>

        <div ref="slot">
            <slot />
        </div>

    </div>

</template>

<script>

    import Hammer from 'hammerjs'


    export default {

        name: 'UmtSlide',


        data() {
            return {
                items               : [],
                endTransition       : false,
                currentItem         : 0,
                newOrigin           : 0,
                swipCount           : 0,
                lastKey             : 0,
                isAplyingChanges    : false
            }
        },


        mounted() {
            this.setup()
        },


        beforeDestroy() {
            this.observer.disconnect()
            this.observerContent.disconnect()
        },


        watch: {
            currentItem() {
                this.items.forEach((i) => {
                    i.checked = false
                })

                if (this.items[this.currentItem])
                    this.items[this.currentItem].checked = true
            }
        },


        methods: {

            setup() {

                this.setItems(this.$refs['slot'].childNodes)
                this.setGestures()

                this.observer = new MutationObserver((mutation) => {
                    if (!this.isAplyingChanges) {
                        mutation.forEach((m) => {
                            this.setItems(m.addedNodes)
                        })
                    }
                });
                
                this.observer.observe(this.$refs['slot'], { childList: true })

                this.observerContent = new MutationObserver((mutation) => {
                    if (!this.isAplyingChanges) {
                        this.isAplyingChanges = true

                        mutation.forEach((m) => {
                            if (m.target.hasAttribute('umt-slide-item-wrapper') && m.target.childNodes.length == 0) {
                                m.removedNodes.forEach((rn) => {
                                    const key = rn.getAttribute('umt-slide-index')
                                    this.removeWrapper(key)
                                })

                                this.setNodes()
                            }

                            if (m.target.hasAttribute('umt-slide-content')) {
                                if (this.$refs['content'].childNodes.length == this.items.length) {
                                    this.setNodes()
                                }
                            }
                        })

                        this.isAplyingChanges = false
                    }
                });

                this.observerContent.observe(this.$refs['content'], { childList: true, subtree: true })

            },


            setItems(nodes) {

                // limpia elementos que no son nodos

                const newNodes = []
                
                nodes.forEach((node) => {
                    if (node && typeof node.setAttribute == 'function')
                        newNodes.push(node)
                })


                if (newNodes.length > 0) {

                    newNodes.forEach((node) => {
                        if (node && typeof node.setAttribute == 'function') {
                            node.setAttribute('umt-slide-index', this.lastKey)
                            this.items.push({
                                key: this.lastKey,
                                checked: false
                            })

                            this.lastKey++
                        }
                    }) 

                    this.items[0].checked = true

                }
      
            },


            setNodes() {

                this.isAplyingChanges = true

                const wrappers = this.$refs['content'].childNodes
                let contentWidth = 0


                // limpia elementos que no son nodos

                this.$refs['slot'].childNodes.forEach((node) => {
                    if (!node || typeof node.setAttribute != 'function')
                        this.$refs['slot'].removeChild(node)
                })


                if (this.$refs['slot'].childNodes.length > 0) {

                    wrappers.forEach((wrapper) => {

                        if (wrapper.childNodes.length == 0) {
                            wrapper.style.minWidth = this.$refs['component'].clientWidth + 'px'
                            wrapper.style.maxWidth = this.$refs['component'].clientWidth + 'px'
                            wrapper.style.paddingRight = this.$refs['component'].clientWidth + 'px'

                            const node = this.$refs['slot'].childNodes[0]

                            if (node) {
                                wrapper.setAttribute('umt-slide-index', node.getAttribute('umt-slide-index'))
                                wrapper.appendChild(node)
                            }
                        }

                        contentWidth += wrapper.clientWidth

                    })

                    this.$refs['content'].style.width = this.items.length > 0 ? (contentWidth + 'px') : (this.$refs['component'].clientWidth + 'px')

                }
                
                this.isAplyingChanges = false

            },


            removeWrapper(key) {

                const wrappers = this.$refs['content'].childNodes
                let itemWrapper

                for (let i in wrappers) {
                    if (wrappers[i].getAttribute('umt-slide-index') == key) {
                        itemWrapper = wrappers[i]
                        break
                    }
                }

                this.$refs['content'].removeChild(itemWrapper)

                const index = this.items.findIndex((i) => i.key == key)
                this.items.splice(index, 1)
                this.lastKey--


                if ((this.currentItem+1) > this.items.length) {

                    const componentWidth = this.$refs['component'].clientWidth
                    let contentWidth = 0

                    wrappers.forEach((wrapper) => {
                        contentWidth += wrapper.clientWidth
                    })

                    this.$refs['content'].style.width = this.items.length > 0 ? (contentWidth + 'px') : (this.$refs['component'].clientWidth + 'px')
                    this.currentItem = (this.lastKey - 1)
                    this.newOrigin = this.currentItem > 0 ? (-1 * this.currentItem * ((componentWidth + 10) * 2)) : 0
                    this.$refs['content'].style.transform = `translate(${this.newOrigin + 'px'}, 0)`

                }

            },


            isChecked(key) {
                return Number(key) == this.currentItem
            },


            setGestures() {

                const mc = new Hammer(this.$refs['component'])

                mc.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 0 })
                mc.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 100 })

                mc.on("panend", () => {
                    this.endTransition = true
                    this.$refs['content'].style.transform = `translate(${this.newOrigin + 'px'}, 0)`

                    setTimeout(() => {
                        this.endTransition = false
                    }, 300)
                })

                mc.on("panleft panright", (e) => {
                    this.$refs['content'].style.transform = `translate(${(this.newOrigin + e.deltaX) + 'px'}, 0)`
                })

                mc.on("swipeleft swiperight", (e) => {
                    this.swipCount++

                    if (this.swipCount == 1) {
                        const componentWidth = this.$refs['component'].clientWidth

                        if (e.type == 'swipeleft') {
                            this.currentItem = (this.currentItem + 1) <= (this.items.length - 1) ? (this.currentItem + 1) : this.currentItem
                            this.newOrigin = -1 * this.currentItem * ((componentWidth + 10) * 2)
                        } else {
                            this.currentItem = (this.currentItem - 1) >= 0 ? (this.currentItem - 1) : this.currentItem
                            this.newOrigin = this.currentItem > 0 ? (-1 * this.currentItem * ((componentWidth + 10) * 2)) : 0
                        }

                        setTimeout(() => {
                            this.swipCount = 0
                        }, 300)
                    }
                })

            }

        }

    }
</script>