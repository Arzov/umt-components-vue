<template>

    <div class="umt-component umt-request-list">

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

            <a-col v-if="type === 'user'" class="avatar-section">
                <center>
                    <umt-avatar icon="avatar" color="green" size="large" :src="user.picture" />
                </center>
            </a-col>


            <!-- CONTENT -->

            <a-col v-if="type === 'team'" class="info">
                <span><b>{{ team.name.toUpperCase() }}</b></span>
                <span v-if="inbound"><i>Aceptar solicitud</i></span>
                <span v-else><i>Solicitud enviada</i></span>
            </a-col>

            <a-col v-if="type === 'match'" class="info">
                <span><b>{{ match.name1.toUpperCase() }} / {{ match.name2.toUpperCase() }}</b></span>
                <span v-if="inbound"><i>Aceptar solicitud</i></span>
                <span v-else><i>Solicitud enviada</i></span>
            </a-col>

            <a-col v-if="type === 'user'" class="info">
                <span><b>{{ user.firstName.toUpperCase() }}</b></span>
                <span v-if="inbound"><i>Aceptar solicitud</i></span>
                <span v-else><i>Solicitud enviada</i></span>
            </a-col>


            <!-- BUTTONS -->

            <a-col v-if="inbound" class="accept">
                <umt-button type="icon" size="small" color="green" icon="check" @click="emitAccept" />
            </a-col>

            <a-col class="reject">
                <umt-button type="icon" size="small" color="violet" icon="x" @click="emitReject" />
            </a-col>

        </a-row>

    </div>

</template>


<script>
    export default {

        name: 'UmtRequestList',


        props: {

            team: {
                required: false,
                type    : Object
            },

            match: {
                required: false,
                type    : Object
            },

            user: {
                required: false,
                type    : Object
            },

            type: {
                required: true,
                type    : String,
                default : 'team'
            },

            inbound: {
                required: false,
                type    : Boolean,
                default : false
            }

        },


        methods: {
            emitAccept() {
                this.$emit('accept')
            },

            emitReject() {
                this.$emit('reject')
            }
        }

    }
</script>