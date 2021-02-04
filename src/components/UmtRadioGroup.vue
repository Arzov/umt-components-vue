<template>
    <div class="umt-component umt-radio-group">
        <h4 v-if="label">
            {{ label }}
        </h4>
        <a-radio-group :value="value" :disabled="disabled" :name="name" :options="options" @input="onInput" @change="onChange">
            <slot></slot>
        </a-radio-group>
    </div>
</template>

<script>
    export default {
        name: 'UmtRadioGroup',
        props: {
            label: {
                required: false,
                type: String,
                default: undefined
            },

            value: {
                required: false,
                type: undefined,
                default: undefined
            },

            disabled: {
                required: false,
                type: Boolean,
                default: false
            },

            options: {
                required: false,
                type: Array,
                default: undefined
            },

            name: {
                required: true,
                type: String
            }
        },
        methods: {
            onInput($event) {
                this.$emit('input', $event)
            },

            onChange($event) {
                this.$emit('change', $event)
            }
        }
    }
</script>