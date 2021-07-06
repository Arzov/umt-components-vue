<template>

    <div class="umt-component umt-chat-list" :umt-active="active" @click="onClick">

        <a-row type="flex" justify="space-around" align="middle" :gutter="24">

            <!-- AVATAR -->

            <a-col v-if="type === 'team'" class="avatar-section">
                <center>
                    <umt-avatar icon="team-profile" color="violet" size="large" :src="team.picture" />
                </center>
            </a-col>

            <a-col v-if="type === 'match'" class="avatar-section">
                <center>
                    <umt-avatar icon="team-profile" color="violet" :src="match.picture1" />
                </center>
            </a-col>

            <a-col v-if="type === 'match'">
                <center><h2>-</h2></center>
            </a-col>

            <a-col v-if="type === 'match'" class="avatar-section">
                <center>
                    <umt-avatar icon="team-profile" color="violet" :src="match.picture2" />
                </center>
            </a-col>


            <!-- CONTENT -->

            <a-col v-if="type === 'team'" class="info">
                <span><b>{{ team.name.toUpperCase() }}</b></span>
                <span v-if="team.chat.messages.length">{{ team.chat.messages[0].author }}: {{ team.chat.messages[0].msg }}</span>
                <span v-else>No hay mensajes</span>
            </a-col>

            <a-col v-if="type === 'match'" class="info">
                <span><b>{{ match.name1.toUpperCase() }} / {{ match.name2.toUpperCase() }}</b></span>
                <span v-if="match.chat.messages.length">{{ match.chat.messages[0].author }}: {{ match.chat.messages[0].msg }}</span>
                <span v-else>No hay mensajes</span>
            </a-col>


            <!-- DATETIME -->

            <a-col v-if="type === 'team' && team.chat.messages.length" class="datetime">
                <span>{{ _date }}</span>
                <span>{{ _time }}</span>
            </a-col>

            <a-col v-if="type === 'match' && match.chat.messages.length" class="datetime">
                <span>{{ _date }}</span>
                <span>{{ _time }}</span>
            </a-col>

        </a-row>

    </div>

</template>


<script>

    import UmtCellMixin from "./../mixins/cells";


    export default {

        name: 'UmtChatList',


        mixins: [UmtCellMixin],


        props: {

            team: {
                required: false,
                type    : Object
            },

            match: {
                required: false,
                type    : Object
            },

            type: {
                required: true,
                type    : String,
                default : 'team'
            },

            active: {
                required: false,
                type    : Boolean,
                default : false
            }

        },


        computed: {

            _date() {

                const date = this.type === 'team'
                    ? this.team.chat.messages[0].sentOn
                    : this.match.chat.messages[0].sentOn

                return `${this.getDayDD(date)}/${this.getMonthMM(date)}`

            },

            _time() {

                const date = this.type === 'team'
                    ? this.team.chat.messages[0].sentOn
                    : this.match.chat.messages[0].sentOn

                return `${this.getHourHH(date)}:${this.getMinutesMM(date)}`

            }

        },


        methods: {
            onClick() {
                this.$emit('click')
            }
        }

    }
</script>