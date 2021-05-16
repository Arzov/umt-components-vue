<template>
    <div class="umt-component umt-range">
        <a-row type="flex">
            <a-col :flex="1">
                <h4>
                    {{ label }}
                </h4>
            </a-col>

            <a-col>
                <h4>
                    {{ value[0] }}-{{ value[1] }}
                </h4>
            </a-col>
        </a-row>
        
        <a-slider class="slider" range :value="value" :min="min" :max="max" @change="onInput" />
    </div>
</template>

<script>
    export default {
        name: 'UmtRange',
        props: {
            label: {
                required: false,
                type: String,
                default: ''
            },

            value: {
                required: false,
                type: Array,
                default: () => []
            },

            min: {
                required: false,
                type: Number,
                default: 0
            },

            max: {
                required: false,
                type: Number,
                default: 100
            }
        },
        data() {
            return {
                iValue: [18,25]
            }
        },
        methods: {
            onInput($event) {
                this.$emit('input', $event)
            }
        }
    }
</script>