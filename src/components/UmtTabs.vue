<template>
    <div ref="component" class="umt-component umt-tabs">
        <div ref="header" class="umt-tabs-header">
            <div v-for="t in tabs" :key="t.key" :umt-checked="t.checked" @click="newOrigin = t.index">
                <h3>
                    <span :data-content="t.label" aria-hidden="true" :umt-animation-direction="animationDirection"/>
                    {{ t.label }}
                </h3>
            </div>
        </div>

        <div ref="content" class="umt-tabs-content">
            <slot/>
        </div>
    </div>
</template>

<script>
    import Hammer from 'hammerjs'

    // Duración de animación en ms
    const DEFAULT_ANIMATION_DURATION = 300

    export default {
        name: 'UmtTabs',
        props: {
            value: {
                required: false,
                type: String,
                default: undefined
            }
        },
        data() {
            return {
                tabs: [],
                newOrigin: 0,
                oldOrigin: 0,
                swipCount: 0,
                animationDirection: 'toRight'
            }
        },
        mounted() {
            this.setup()
            this.setObservers()
        },
        beforeDestroy() {
            this.destroyObservers()
        },
        watch: {
            newOrigin(_new, _old) {
                this.oldOrigin = _old

                // Configura contenido activo
                const componentWidth = this.$refs['component'].clientWidth
                this.$refs['content'].style.transform = `translate(${(-1 * this.newOrigin * (componentWidth * 2)) + 'px'}, 0)`

                // Configura dirección de animación para los tabs
                if (_new > _old)
                    this.animationDirection = 'toRight'
                else
                    this.animationDirection = 'toLeft'

                // Configura tab activo
                this.setAnimationDirection(_new, false)
                this.setAnimationDirection(_old, true)
                this.prepareSpanForAnimation()
            }
        },
        methods: {
            setup() {
                this.setHeaders()
                this.setContent()
                this.setGestures()
            },

            setObservers() {
                this.observerContent = new MutationObserver((mutation) => {
                    mutation.forEach(() => {
                        this.setup()
                    })
                })
                
                this.observerContent.observe(this.$refs['content'], { childList: true })

                this.observerHeader = new MutationObserver((mutation) => {
                    mutation.forEach((m) => {
                        if (m.target.childNodes.length == this.tabs.length) {
                            this.prepareSpanForAnimation()
                        }
                    })
                })
                
                this.observerHeader.observe(this.$refs['header'], { childList: true })
            },

            destroyObservers() {
                this.observerContent.disconnect()
                this.observerHeader.disconnect()
            },

            /**
             * Configura los títulos de los tabs.
             */
            setHeaders() {
                this.tabs = []
                this.cleanNoVueInstances()

                // Recopila props de los tabs
                this.$refs['content'].childNodes.forEach((tab, index) => {
                    if (tab['__vue__'] != null) {
                        this.tabs.push({
                            index,
                            key: tab['__vue__']['tab'],
                            label: tab['__vue__']['label'],
                            checked: this.value ? (this.value == tab['__vue__']['tab']) : (index == 0 ? true : false)
                        })
                    }
                })
            },

            /**
             * Configura contenido para que muestre el tab-panel
             * correspondiente al tab seleccionado.
             */
            setContent() {
                const selectedTab = this.tabs.find((tab) => tab.checked)
                this.newOrigin = selectedTab.index

                this.setContentWidth()
                this.cleanNoVueInstances()

                this.$refs['content'].childNodes.forEach((tab) => {
                    if (tab['__vue__'] != null) {
                        tab.style.minWidth = this.$refs['component'].clientWidth + 'px'
                        tab.style.maxWidth = this.$refs['component'].clientWidth + 'px'
                        tab.style.paddingRight = this.$refs['component'].clientWidth + 'px'
                    }
                })
            },

            /**
             * Configura ancho del contenido.
             * El ancho se define como la sumatoria del producto entre el ancho del contenedor y 2, donde
             * la cantidad de veces que se suma es igual a la cantidad de tabs.
             */
            setContentWidth() {
                const componentWidth = this.$refs['component'].clientWidth
                const totalWidth = (componentWidth * 2) * this.tabs.length
                this.$refs['content'].style.width = totalWidth == 0 ? (componentWidth + 'px') : (totalWidth + 'px')
            },

            /**
             * Limpia del arreglos de hijos, los nodos
             * que no sean una instancia de Vue.
             */
            cleanNoVueInstances() {
                this.$refs['content'].childNodes.forEach((tab) => {
                    if (tab['__vue__'] == null)
                        this.$refs['content'].removeChild(tab)
                })
            },

            setGestures() {
                const tabs = this.$refs['content'].querySelectorAll('.umt-tab-panel')

                tabs.forEach(tab => {
                    const mc = new Hammer(tab)

                    mc.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 0 })
                    mc.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 100 })

                    mc.on("swipeleft swiperight", (e) => {
                        this.swipCount++

                        if (this.swipCount == 1) {
                            if (e.type == 'swipeleft') {
                                this.newOrigin = (this.newOrigin + 1) > (this.tabs.length - 1) ? this.newOrigin : (this.newOrigin + 1)
                            } else {
                                this.newOrigin = (this.newOrigin - 1) < 0 ? this.newOrigin : (this.newOrigin - 1)
                            }

                            setTimeout(() => {
                                this.swipCount = 0
                            }, 300)
                        }
                    })
                })

                // NOTE: este bloque de código es el original, por tema de compatibilidad con safary, se dejó como gesto a todos los tabs.

                // const mc = new Hammer(this.$refs['content'])

                // mc.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 0 })
                // mc.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 100 })

                // mc.on("swipeleft swiperight", (e) => {
                //     this.swipCount++

                //     if (this.swipCount == 1) {
                //         if (e.type == 'swipeleft') {
                //             this.newOrigin = (this.newOrigin + 1) > (this.tabs.length - 1) ? this.newOrigin : (this.newOrigin + 1)
                //         } else {
                //             this.newOrigin = (this.newOrigin - 1) < 0 ? this.newOrigin : (this.newOrigin - 1)
                //         }

                //         setTimeout(() => {
                //             this.swipCount = 0
                //         }, 300)
                //     }
                // })
            },

            setAnimationDirection(index, exit) {
                const spanList = this.$refs['header'].querySelectorAll('span')
                const span = spanList[index]

                span.setAttribute('umt-animating', true)

                if (exit == false) {
                    span.style.opacity = 1
                    span.setAttribute('umt-exit', false)
                    span.style.transition = 'transform 0s ease'

                    if (this.animationDirection == 'toRight') {
                        span.style.transform = 'translateX(-100%)'
                    } else {
                        span.style.transform = 'translateX(100%)'
                    }

                    setTimeout(() => {
                        span.style.transition = `transform ${DEFAULT_ANIMATION_DURATION}ms ease`
                        this.tabs[index].checked = true
                    }, 100)
                } else {
                    span.style.opacity = 1
                    span.setAttribute('umt-exit', true)
                    span.style.transition = `transform ${DEFAULT_ANIMATION_DURATION}ms ease`

                    if (this.animationDirection == 'toRight') {
                        span.style.transform = 'translateX(100%)'
                    } else {
                        span.style.transform = 'translateX(-100%)'
                    }

                    setTimeout(() => {
                        this.tabs[index].checked = false
                    }, 100)
                }
            },

            prepareSpanForAnimation() {
                const spanList = this.$refs['header'].querySelectorAll('span')
                spanList.forEach((span, index) => {
                    if (index != this.newOrigin) {
                        if (this.oldOrigin == index) {
                            setTimeout(() => {
                                this.setSpanStartAnimation(span, index)
                            }, DEFAULT_ANIMATION_DURATION)
                        } else {
                            this.setSpanStartAnimation(span, index)
                        }
                    }
                })
            },

            setSpanStartAnimation(span, index) {
                span.style.opacity = 0
                span.setAttribute('umt-exit', false)
                span.setAttribute('umt-animating', false)
                span.style.transition = 'transform 0s ease'

                if (index < this.newOrigin) {
                    span.setAttribute('umt-is-next', false)

                    if (this.animationDirection == 'toRight') {
                        span.style.transform = 'translateX(100%)'
                    } else {
                        span.style.transform = 'translateX(-100%)'
                    }
                } else {
                    span.setAttribute('umt-is-next', true)

                    if (this.animationDirection == 'toRight') {
                        span.style.transform = 'translateX(-100%)'
                    } else {
                        span.style.transform = 'translateX(100%)'
                    }
                }
            }
        }
    }
</script>