<template>

    <div class="umt-component umt-request-cell">

        <a-row type="flex" align="middle" class="row">

            <!-- AVATAR -->

            <a-col :span="3">
                <umt-avatar icon="team-profile" size="large" :src="team.picture" />
            </a-col>


            <!-- CONTENT -->

            <a-col class="info">

                <div class="team-name">
                    <p><b>{{ team.name.toUpperCase() }}</b></p>
                </div>

                <div class="distance">
                    <span>A {{ team.distance }} kilómetros de distancia</span>
                </div>

            </a-col>


            <!-- BUTTON -->

            <a-col class="button">
                <umt-button type="border" size="small" shape="round" @click="onClick">
                    {{ buttonLabel }}
                </umt-button>
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
            },

            buttonLabel: {
                required: true,
                type    : String
            }
        },


        methods: {
            onClick() {
                this.$emit('click')
            }
        }

    }
</script>