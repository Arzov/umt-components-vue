<template>
    <div class="umt-component umt-input">
        <input :placeholder="placeholder" :type="_type" :value="value" @input="onInput" @focus="onFocus"/>
    </div>
</template>

<script>
    const TYPES = [ 'text', 'email', 'tel' ]

    export default {
        name: 'UmtInput',
        props: {
            placeholder: {
                required: false,
                type: String,
                default: ''
            },

            type: {
                required: false,
                type: String,
                default: 'text'
            },
            
            value: {
                required: false,
                type: String,
                default: undefined
            }
        },
        data() {
            return {
                placeholderIsFocused: false
            }
        },
        computed: {
            _type() {
                if (!TYPES.includes(this.type))
                    throw new Error('Propiedad type incorrecta, revise TYPES permitidos.')

                return this.type
            },

            _showDatePlaceholder() {
                const isDate = this._type === 'date'
                const hasValue = this.value != '' && this.value != null
                return isDate && !hasValue && !this.placeholderIsFocused
            }
        },
        methods: {
            onInput($event) {
                const value = $event.target.value
                this.$emit('input', value)
            },

            onFocus($event) {
                this.$emit('focus', $event)
            }
        }
    }
</script>