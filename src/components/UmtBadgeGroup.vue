<template>

    <div class="umt-component umt-badge-group">

        <div class="badges">
            <umt-badge
                v-for="opt in opts"
                :key="opt.value"
                :color="opt.color"
                :text="opt.text"
                :label="opt.label"
                :value="opt.value"
                :status="opt.status"
                @press="onPress"
            />
        </div>

    </div>

</template>

<script>
    export default {

        name: 'UmtBadgeGroup',


        props: {

            value: {
                required: false,
                type    : Array,
                default : () => []
            },

            options: {
                required: false,
                type    : Array,
                default : () => [
                    {
                        value   : 'GK',
                        text    : 'PO',
                        label   : 'Portero',
                        color   : 'cian',
                        status  : false
                    }
                ]
            },

        },


        data () {
            return {
                opts: []
            }
        },


        watch: {
            value () {
                this.opts = this.initOptions()
            }
        },


        mounted () {
            this.opts = this.initOptions()
        },


        methods: {

            onPress (opt) {

                let newValue = [ ...this.value ]

                if (newValue.includes(opt))
                    newValue = newValue.filter((o) => { return o !== opt })

                else
                    newValue.push(opt)

                this.$emit('input', newValue)

            },


            initOptions () {
                return this.options.map((opt) => {

                    if (this.value.includes(opt.value)) {
                        return { ...opt, status: true }
                    }

                    else {
                        return { ...opt, status: false }
                    }

                })
            }

        }

    }
</script>
