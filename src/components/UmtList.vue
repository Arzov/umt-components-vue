<template>

    <div class="umt-component umt-list" @click="onClick">

        <a-row type="flex" justify="space-around" align="middle" :gutter="24">

            <!-- AVATAR -->

            <a-col v-if="type === 'team'" class="avatar-section">
                <center>
                    <umt-avatar icon="team-profile" color="violet" size="large" :src="team.picture" />
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
            </a-col>

            <a-col v-if="type === 'user'" class="info">
                <span><b>{{ user.firstName.toUpperCase() }}</b></span>
            </a-col>

        </a-row>

    </div>

</template>


<script>

    export default {

        name: 'UmtList',


        props: {

            team: {
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
                default : 'user'
            }

        },


        methods: {
            onClick() {
                this.$emit('click')
            }
        }

    }

</script>