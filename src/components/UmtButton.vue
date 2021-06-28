<template>

    <div
        ref="button"
        class="umt-component umt-button"
        :umt-type="type"
        :umt-size="size"
        :umt-color="color"
        :umt-shape="shape"
        :umt-disabled="disabled"
        @click="onClick"
        @mouseEnter="onMouseEnter"
        @mouseLeave="onMouseLeave"
    >

        <img v-if="icon" :src="_srcImage">

        <span>
            <slot></slot>
        </span>

    </div>

</template>


<script>

    import chroma from 'chroma-js'
    import { EasingFunctions } from './../assets/utils/easing'
    import { getImgPath } from '../statics/assets' 


    export default {

        name: 'UmtButton',


        props: {

            type: {
                required    : false,
                type        : String,
                default     : 'primary'
            },

            size: {
                required    : false,
                type        : String,
                default     : 'normal'
            },

            shape: {
                required    : false,
                type        : String,
                default     : 'diagonal'
            },

            color: {
                required    : false,
                type        : String,
                default     : 'purple'
            },

            colors: {
                required    : false,
                type        : Object,
                default () {
                    return {}
                }
            },

            icon: {
                required    : false,
                type        : String,
                default     : undefined
            },

            disabled: {
                required    : false,
                type        : Boolean,
                defsult     : false
            }

        },


        data() {
            return {
                currentTheme        : 'light',
                currentColorLeft    : '',
                currentColorRight   : '',
                currentColorBorder  : '',
                endColor            : '',
                initColorLeft       : '',
                initColorRight      : '',
                initColorBorder     : '',
                interval            : undefined,
                intervalDelay       : 5,
                intervalTimeout     : 200
            }
        },


        mounted() {

            let themeElement = document.getElementById('theme-provider')

            if (themeElement != null) {

                let style = getComputedStyle(themeElement)
                this.currentTheme = themeElement.getAttribute('umt-theme')
                this.endColor = style.getPropertyValue(this._colors.hoverColor)

                // if (this.type == 'primary') {
                //     this.currentColorLeft = style.getPropertyValue(this._colors.leftColor)
                //     this.currentColorRight = style.getPropertyValue(this._colors.rightColor)
                //     this.initColorLeft = style.getPropertyValue(this._colors.leftColor)
                //     this.initColorRight = style.getPropertyValue(this._colors.rightColor)
                // }

                // else if (this.type == 'rounded') {
                //     this.currentColorBorder = style.getPropertyValue(this._colors.borderColor)
                //     this.initColorBorder = style.getPropertyValue(this._colors.borderColor)
                // }

            }

        },


        computed: {

            _srcImage() {
                return getImgPath(`${this.icon.toLowerCase()}.svg`)
            },


            _colors() {

                let iconRightColor = '--button-bkg-color-right-alt'

                return {
                    leftColor   : '--button-bkg-color-left-1',
                    rightColor  : this.icon ? iconRightColor : '--button-bkg-color-right-1',
                    borderColor : '--button-border-color',
                    hoverColor  : '--button-bkg-color-hover',
                    ...this.colors
                }

            }

        },


        watch: {

            currentColorLeft: function() {
                this.$refs['button'].style.backgroundImage = `${this.getCssValuePrefix()}linear-gradient(45deg, ${this.currentColorLeft}, ${this.currentColorRight})`
            },


            currentColorRight: function() {
                this.$refs['button'].style.backgroundImage = `${this.getCssValuePrefix()}linear-gradient(45deg, ${this.currentColorLeft}, ${this.currentColorRight})`
            },


            currentColorBorder: function() {
                this.$refs['button'].style.color = this.currentColorBorder
                this.$refs['button'].style.borderColor = this.currentColorBorder
            }

        },


        methods: {

            onClick($event) {

                this.$emit('click', $event)

                if (this.$umtMode == 'mobile') {
                    this.addHover()
                    .then(() => {
                        setTimeout(() => {
                            this.removeHover()
                        }, 100);
                    })
                }

            },


            onMouseEnter() {
                if (this.$umtMode == 'desktop')
                    this.addHover()
            },


            onMouseLeave() {
                if (this.$umtMode == 'desktop')
                    this.removeHover()
            },


            addHover() {

                if (this.type == 'primary') {
                    let chromaLeft = this.calculateColor(this.currentColorLeft, this.endColor).domain([0,1])
                    let chromaRight = this.calculateColor(this.currentColorRight, this.endColor).domain([0,1])
                    return this.playAnimation(chromaLeft, chromaRight)
                }

                else if (this.type == 'rounded') {
                    let chromaBorder = this.calculateColor(this.currentColorBorder, this.endColor).domain([0,1])
                    return this.playAnimation(chromaBorder, null)
                }

            },


            removeHover() {

                if (this.type == 'primary') {
                    let chromaLeft = this.calculateColor(this.currentColorLeft, this.initColorLeft).domain([0,1])
                    let chromaRight = this.calculateColor(this.currentColorRight, this.initColorRight).domain([0,1])
                    return this.playAnimation(chromaLeft, chromaRight)
                }

                else if (this.type == 'rounded') {
                    let chromaBorder = this.calculateColor(this.currentColorBorder, this.initColorBorder).domain([0,1])
                    return this.playAnimation(chromaBorder, null)
                }

            },


            // Obtiene la gama de colores para la animación

            calculateColor(start, end) {
                return chroma.scale([ start.trim(), end.trim() ]);
            },


            // Ejecuta la animación del botón al presionarlo

            playAnimation(chromaLeft, chromaRight) {
                return new Promise((resolve) => {

                    if (this.interval)
                        clearInterval(this.interval)

                    let steps = this.intervalTimeout / this.intervalDelay
                    let currStep = 0


                    this.interval = setInterval(() => {

                        if (currStep <= steps) {

                            let t = (1/steps) * currStep
                            let currDomain = EasingFunctions.easeInOutQuad(t)

                            if (this.type == 'primary') {
                                this.currentColorLeft = chromaLeft(currDomain).hex()
                                this.currentColorRight = chromaRight(currDomain).hex()
                            }
                            
                            else if (this.type == 'rounded') {
                                this.currentColorBorder = chromaLeft(currDomain).hex()
                            }
                            
                            currStep++

                        }
                        
                        else {
                            clearInterval(this.interval)
                            resolve()
                        }

                    }, this.intervalDelay)

                })
            },


            getCssValuePrefix() {

                var rtrnVal = '' // default to standard syntax
                var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-']

                // Create a temporary DOM object for testing
                var dom = document.createElement('div')

                for (var i = 0; i < prefixes.length; i++) {
                    // Attempt to set the style
                    dom.style.background = prefixes[i] + 'linear-gradient(#000000, #ffffff)'

                    // Detect if the style was successfully set
                    if (dom.style.background)
                        rtrnVal = prefixes[i]
                }

                dom = null
                return rtrnVal

            }

        }

    }

</script>