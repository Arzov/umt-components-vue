<template>
    <div class="umt-component umt-challenge-cell">
        <a-row type="flex" align="middle" class="row">
            <a-col :span="3">
                <img class="team-image" :src="team.image" @error="onErrorLoadTeamImage"/>
            </a-col>

            <a-col class="info">
                <div class="team-name">
                    <h3>{{ team.name.toUpperCase() }}</h3>
                </div>
                <div class="distance">
                    <span>A {{ team.distance }} kilómetros de distancia</span>
                </div>
            </a-col>

            <a-col>
                <umt-button type="rounded" size="small" @click="onSubmit">DESAFIAR</umt-button>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import UmtThemeMixin from './../mixins/theme'
    import UmtCellMixin from './../mixins/cells'

    export default {
        name: 'UmtChallengeCell',
        mixins: [ UmtThemeMixin, UmtCellMixin ],
        props: {
            team: {
                required: true,
                type: Object
            }
        }
    }
</script>