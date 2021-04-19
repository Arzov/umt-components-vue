<template>
    <div class="umt-component umt-challenge-cell">
        <a-row type="flex" align="middle" class="row">
            <a-col :span="3">
                <img class="team-image" :src="team.image" @error="onErrorLoadImage"/>
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
                <umt-button type="rounded" size="small" @click="onClick">SOLICITAR</umt-button>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import UmtThemeMixin from './../mixins/theme'
    import UmtButton from './UmtButton.vue'

    export default {
        components: { UmtButton },
        name: 'UmtChallengeCell',
        mixins: [ UmtThemeMixin ],
        props: {
            team: {
                required: true,
                type: Object
            }
        },
        methods: {
            onErrorLoadImage(evt) {
                evt.target.src = require(`./../assets/images/${this._theme}-team-profile.svg`)
            },

            onClick(evt) {
                this.$emit('challenge', evt)
            }
        }
    }
</script>