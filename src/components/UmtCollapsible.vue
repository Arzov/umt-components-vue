<template>

    <div class="umt-component umt-collapsible" :umt-collapsed="isCollapsed">

        <a-row class="header" type="flex" justify="space-around" align="middle" @click.native="onCollapse">

            <a-col class="title-section">

                <slot name="header">
                    <span class="default-header-title"><b>{{ title }}</b></span>
                </slot>

            </a-col>

            <!-- BUTTON -->

            <a-col class="button">
                <a-icon v-if="isCollapsed" type="caret-down" />
                <a-icon v-else type="caret-up" />
            </a-col>

        </a-row>


        <div ref="body" class="body">

            <div ref="contentWrapper" class="body-content-wrapper">
                <slot name="body"></slot>
            </div>

        </div>

    </div>

</template>


<script>
    export default {

        name: "UmtCollapsible",


        props: {
            title: {
                required: false,
                type: String,
                default: '',
            },

            defaultCollapsed: {
                required: false,
                type: Boolean,
                default: true,
            },

            maxHeight: {
                type: Number,
                required: false,
                default: undefined
            },
        },


        data() {
            return {
                isCollapsed: this.defaultCollapsed,
                contentHeight: 0,
                observerInstance: undefined
            }
        },


        mounted() {
            window.addEventListener("load", () => {
                this.changeMaxHeightToContent()
            })

            this.setResizeObserver()
            this.onChildUpdate()
        },


        updated() {
            this.changeMaxHeightToContent()
            this.onChildUpdate()
        },


        methods: {
            onCollapse () {
                this.isCollapsed = !this.isCollapsed

                this.changeMaxHeightToContent()
                this.$emit('collapse', this.isCollapsed)
            },

            setResizeObserver () {
                this.observerInstance = new ResizeObserver(() => {
                    this.changeMaxHeightToContent()
                })
            },

            onChildUpdate () {
                if (this.observerInstance) {
                    this.observerInstance.disconnect()
                    let children = this.$refs.body.querySelectorAll(':scope > *')

                    children.forEach((c) => {
                        this.observerInstance.observe(c, {
                            box: 'border-box'
                        })
                    })
                }
            },

            changeMaxHeightToContent() {
                if (this.maxHeight !== undefined)
                    this.$refs.contentWrapper.style.height = this.maxHeight + "px"
                
                if (this.isCollapsed)
                        this.$refs.body.style.maxHeight = 0
                else {
                    if (this.maxHeight !== undefined)
                        this.$refs.body.style.maxHeight = this.maxHeight + "px"
                    else if (this.$refs.body)
                        this.$refs.body.style.maxHeight = this.$refs.body.scrollHeight + "px"
                }
            }
        }

    }
</script>
