<template>
    <div class="umt-component umt-radio">
        <a-radio :checked="checked" :disabled="disabled" :value="value">
            <slot></slot>
            <div class="radio-gutter"></div>
            <div class="radio" :umt-checked="checked">
                <div class="point"></div>
            </div>
        </a-radio>
    </div>
</template>

<script>
    export default {
        name: 'UmtRadio',
        props: {
            checked: {
                required: false,
                type: Boolean,
                default: false
            },

            disabled: {
                required: false,
                type: Boolean,
                default: false
            },

            value: {
                required: false,
                type: undefined,
                default: undefined
            }
        }
    }
</script>