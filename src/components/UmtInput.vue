<template>
    <div class="umt-component umt-input" :umt-type="type" :umt-has-suffix="suffix != undefined">
        <input :placeholder="placeholder" :type="_type" :value="value" @input="onInput" @focus="onFocus"/>

        <span v-if="suffix" class="suffix"><b>{{suffix}}</b></span>
        
        <div v-if="type == 'password'" class="eye-icon" @click="isHide = !isHide">
            <img :src="_srcEye" />
        </div>

        <div v-if="type == 'search'" class="search-icon">
            <img :src="_srcSearch" />
        </div>
    </div>
</template>

<script>
    import UmtThemeMixin from './../mixins/theme' 

    const TYPES = [ 'text', 'email', 'tel', 'password', 'number', 'search' ]

    export default {
        name: 'UmtInput',
        mixins: [ UmtThemeMixin ],
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

            theme: {
                required: false,
                type: String,
                default: undefined
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
                return require(`./../../public/images/${this._theme}-${icon}.svg`)
            },

            _srcSearch() {
                return require(`./../../public/images/${this._theme}-search.svg`)
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