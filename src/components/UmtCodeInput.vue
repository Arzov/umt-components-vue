<template>

    <div class="umt-component umt-code-input">
        <input
            v-for="n in length"
            type="number"
            :key="n"
            :ref="'cn-' + n"
            :min="0"
            :max="9"
            :placeholder="n"
            @keyup="onKeyPress($event, n)"
            @focus="onFocus($event, n)"
            @blur="onBlur($event, n)"
            @change="triggerChange"
        >
    </div>

</template>


<script>
    export default {

        name: 'UmtCodeInput',


        props: {
            length: {
                required: false,
                type    : Number,
                default : 6
            }
        },


        data () {
            return {
                code            : [],
                previousValue   : undefined
            }
        },


        created () {
            for (let i = 0; i < this.length; i++)
                this.code[i] = undefined
        },


        methods: {
            onKeyPress (event, key) {

                let aux = this.code[key - 1] ? this.code[key - 1] + event.key : undefined


                // número mayor a 10

                if (this.code[key - 1] && aux && Number(aux) > 10) {
                    event.preventDefault()
                    this.code[key - 1] = Number(event.key)
                }

                // dígito distinto entre 0 y 9

                else if (Number(event.keyCode) < 48 || Number(event.keyCode) > 57) {
                    event.preventDefault()
                }

                else {
                    this.code[key - 1] = Number(event.key)
                }

                this.$refs['cn-' + key][0].value = this.code[key - 1]

                if ((Number(event.keyCode) >= 48 && Number(event.keyCode) <= 57)) {

                    // si existe siguiente

                    if (this.$refs['cn-' + (key + 1)]) {
                        this.$refs['cn-' + (key + 1)][0].focus()
                    }

                    // en el último se sale

                    else {
                        this.$refs['cn-' + key][0].blur()
                    }

                }

                else if (event.key === 'Backspace' && this.$refs['cn-' + (key - 1)]) {
                    this.$refs['cn-' + (key - 1)][0].focus()
                }

            },

            onFocus (_, key) {
                this.previousValue = this.code[key - 1]
                this.code[key - 1] = undefined
                this.$refs['cn-' + key][0].value = this.code[key - 1]
                this.triggerChange()
            },

            onBlur (_, key) {
                if (this.$refs['cn-' + key][0].value === undefined || this.$refs['cn-' + key][0].value === '') {
                    this.$refs['cn-' + key][0].value = this.previousValue
                    this.code[key - 1] = this.previousValue
                }

                this.previousValue = undefined
                this.triggerChange()
            },

            triggerChange () {

                let code = ''

                this.code.forEach((n) => {
                    if (n || n === 0)
                        code += n.toString()
                    else
                        code += ''
                })

                this.$emit('change', code)

            }
        }

    }

</script>
