<template>

    <div class="umt-component umt-avatar">

        <a-avatar :size="size" :src="_srcImage" :umt-color="_colorTheme" :loadError="onError" />

    </div>

</template>


<script>

    import { getImgPath } from '../statics/assets' 


    export default {

        name: 'UmtAvatar',


        props: {

            size: {
                required: false,
                type    : String,
                default : 'default'
            },

            icon: {
                required: false,
                type    : String,
                default : 'avatar'
            },

            color: {
                required: false,
                type    : String,
                default : 'green'
            },

            src: {
                required: false,
                type    : String,
                default : undefined
            }

        },


        data() {
            return {
                srcImage    : this.src,
                colorTheme  : this.color
            }
        },


        computed: {
            _srcImage() {

                const imageURL = this.srcImage || getImgPath(`${this.icon.toLowerCase()}.svg`)

                return imageURL

            },

            _colorTheme() {

                // if there is no error on src we need to put a transparent background
                return this._srcImage === this.src ? 'transparent' : this.colorTheme

            }
        },


        methods: {
            onError () {
                this.srcImage = getImgPath(`${this.icon.toLowerCase()}.svg`)
            }
        }

    }
</script>
