<template>

    <div class="umt-component umt-badge" @click="onClick">

        <a-tooltip placement="bottom">

            <template slot="title">
                <span>{{ label }}</span>
            </template>

            <div class="badge" :umt-color="color" :umt-checked="check">
                <span><b>{{ text }}</b></span>
            </div>

        </a-tooltip>

    </div>

</template>


<script>
    export default {

        name: 'UmtBadge',


        props: {

            color: {
                required: true,
                type    : String
            },

            text: {
                required: true,
                type    : String
            },

            label: {
                required: false,
                type    : String
            },

            status: {
                required: true,
                type    : Boolean,
                default : false
            },

            value: {
                required: true,
                type    : String
            }

        },


        data () {
            return {
                check: this.status
            }
        },


        methods: {
            onClick() {
                this.check = !this.check
                this.$emit('press', this.value)
            }
        }

    }
</script>
