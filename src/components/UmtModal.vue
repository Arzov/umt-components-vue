<template>

    <div class="umt-component umt-modal" @click="onClick">
        <div class="umt-modal-container">
            <slot></slot>
        </div>
    </div>

</template>


<script>
    export default {

        name: 'UmtModal',

        methods: {
            onClick() {
                this.$emit('click')
            }
        }

    }
</script>