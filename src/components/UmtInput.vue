<template>
    <div class="umt-component umt-input" :umt-type="type" :umt-has-suffix="suffix != undefined">
        <input :placeholder="placeholder" :type="_type" :value="value" @input="onInput" @focus="onFocus"/>

        <div v-if="type == 'password'" class="eye-icon" @click="isHide = !isHide">
            <img :src="_srcEye" />
        </div>

        <span v-if="suffix" class="suffix"><b>{{suffix}}</b></span>
    </div>
</template>

<script>
    const TYPES = [ 'text', 'email', 'tel', 'password', 'number' ]

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
            },

            defaultHidePassword: {
                required: false,
                type: Boolean,
                default: true
            },

            suffix: {
                required: false,
                type: String,
                default: undefined
            },

            mode: {
                required: false,
                type: String,
                default: 'lm'
            }
        },
        data() {
            return {
                placeholderIsFocused: false,
                isHide: this.defaultHidePassword
            }
        },
        computed: {
            _type() {
                if (!TYPES.includes(this.type))
                    throw new Error('Propiedad type incorrecta, revise TYPES permitidos.')

                if (this.type === 'password') {
                    if (!this.isHide)
                        return 'text'
                }                    

                return this.type
            },

            _showDatePlaceholder() {
                const isDate = this._type === 'date'
                const hasValue = this.value != '' && this.value != null
                return isDate && !hasValue && !this.placeholderIsFocused
            },

            _srcEye() {
                let icon = this.isHide ? 'eye' : 'eye-slash'
                return require(`./../assets/images/${this.mode}-${icon}.svg`)
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