<template>

    <div class="umt-component umt-notification">

        <div class="buttons">

            <a-icon v-if="type === 'success'" type="check-circle" />
            <a-icon v-if="type === 'error'" type="close-circle" />
            <a-icon v-if="type === 'warning'" type="warning" />

            <umt-button
                type="icon"
                color="transparent"
                shape="square"
                size="small"
                icon="x"
                @click="onClick"
            />

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