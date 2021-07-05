<template>

    <div class="umt-component umt-chat-cell" :umt-active="active" @click="onClick">

        <a-row type="flex" justify="space-around" align="middle" :gutter="12">

            <!-- AVATAR -->

            <a-col :span="4">
                <center>
                    <umt-avatar icon="team-profile" size="large" :src="team.picture" />
                </center>
            </a-col>


            <!-- CONTENT -->

            <a-col class="info">
                <span><b>{{ team.name.toUpperCase() }}</b></span>
                <span>{{ team.chat.messages[0].author }}: {{ team.chat.messages[0].msg }}</span>
            </a-col>


            <!-- DATETIME -->

            <a-col class="datetime">
                <center>
                    <span>{{ _date }}</span>
                    <span>{{ _time }}</span>
                </center>
            </a-col>

        </a-row>

    </div>

</template>


<script>

    import UmtCellMixin from "./../mixins/cells";


    export default {

        name: 'UmtChatCell',


        mixins: [UmtCellMixin],


        props: {

            team: {
                required: true,
                type    : Object
            },

            active: {
                required: false,
                type    : Boolean,
                default : false
            }

        },


        computed: {

            _date() {
                return `${this.getDayDD(this.team.chat.messages[0].sentOn)}/${this.getMonthMM(this.team.chat.messages[0].sentOn)}`
            },

            _time() {
                return `${this.getHourHH(this.team.chat.messages[0].sentOn)}:${this.getMinutesMM(this.team.chat.messages[0].sentOn)}`
            }

        },


        methods: {
            onClick() {
                this.$emit('click')
            }
        }

    }
</script>