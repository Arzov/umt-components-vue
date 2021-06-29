<template>

    <div class="umt-component umt-request-cell">

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
                <span>A {{ team.distance }} kilómetros de distancia</span>
            </a-col>


            <!-- BUTTON -->

            <a-col class="button">
                <center>
                    <umt-button type="border" size="small" shape="round" @click="onClick">
                        SOLICITAR
                    </umt-button>
                </center>
            </a-col>

        </a-row>

    </div>

</template>


<script>
    export default {

        name: 'UmtRequestCell',


        props: {
            team: {
                required: true,
                type    : Object
            }
        },


        methods: {
            onClick() {
                this.$emit('click')
            }
        }

    }
</script>