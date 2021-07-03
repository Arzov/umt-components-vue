<template>

    <div class="umt-component umt-notification">

        <div class="buttons">

            <a-icon class="symbol" v-if="type === 'success'" type="check-circle" />
            <a-icon class="symbol" v-if="type === 'error'" type="close-circle" />
            <a-icon class="symbol" v-if="type === 'warning'" type="warning" />

            <p><a-icon type="close" @click="onClick" /></p>

        </div>

        <div class="title">
            <h2>{{ title }}</h2>
        </div>

        <div class="msg">
            <p>{{ msg }}</p>
        </div>

    </div>

</template>


<script>
    export default {

        name: 'UmtNotification',


        props: {

            type: {
                required: false,
                type    : String,
                default : 'success'
            },

            title: {
                required: false,
                type    : String,
                default : 'title'
            },

            msg: {
                required: false,
                type    : String,
                default : 'msg'
            }

        },


        methods: {
            onClick() {
                this.$emit('click')
            }
        }

    }
</script>