<template>

    <div class="umt-component umt-avatar">

        <a-avatar :size="size" :src="_srcImage" :umt-color="color" :loadError="onError" />

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
                srcImage: this.src
            }
        },


        computed: {
            _srcImage() {
                return this.srcImage || getImgPath(`${this.icon.toLowerCase()}.svg`)
            }
        },


        methods: {
            onError () {
                this.srcImage = getImgPath(`${this.icon.toLowerCase()}.svg`)
            }
        }

    }
</script>
