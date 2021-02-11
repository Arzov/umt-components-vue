<template>
    <div class="umt-component umt-position-budge" @click="onClick">
        <div class="budge" :umt-pos="pos" :umt-checked="value">
            <span><b>{{ pos }}</b></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UmtPositionBadge',
        props: {
            pos: {
                required: true,
                type: String
            },

            value: {
                required: false,
                type: Boolean,
                default: false
            }
        },
        methods: {
            onClick() {
                this.$emit('input', !this.value)
            }
        }
    }
</script>
