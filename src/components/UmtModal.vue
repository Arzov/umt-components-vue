<template>

    <div class="umt-component umt-modal">
        <div class="umt-modal-container">
            <umt-button
                v-if="closable"
                type="icon"
                color="green"
                icon="x"
                @click="onClick"
            />
            <slot></slot>
        </div>
    </div>

</template>


<script>
    export default {

        name: 'UmtModal',


        props: {

            closable: {
                required: false,
                type    : Boolean,
                default : true
            }

        },


        methods: {
            onClick() {
                this.$emit('click')
            }
        }

    }
</script>