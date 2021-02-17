<template>
    <div class="umt-component umt-transfer-cell">
        <a-row type="flex" align="middle">
            <a-col :span="3">
                <img class="team-image" :src="team.image"/>
            </a-col>

            <a-col :flex="1" class="transfer-info">
                <div class="info">
                    <h3>{{ team.name }}</h3>
                    <span class="transfer-info-date"><i>{{ _date }}</i></span>
                </div>
                <div class="info-to">
                    <span>A fichado a {{ profile.name }}</span>
                </div>
            </a-col>

            <a-col :span="2" class="transfer-icon">
                <img :src="require(`./../assets/images/${_theme}-transfer.svg`)"/>
            </a-col>

            <a-col :span="3">
                <img class="profile-image" :src="profile.image"/>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import UmtThemeMixin from './../mixins/theme' 
    import moment from 'moment'

    export default {
        name: 'UmtTransferCell',
        mixins: [ UmtThemeMixin ],
        props: {
            team: {
                required: true,
                type: Object
            },

            profile: {
                required: true,
                type: Object
            },

            date: {
                required: true,
                type: undefined
            },

            theme: {
                required: false,
                type: String,
                default: undefined
            }
        },
        computed: {
            _date() {
                return moment(this.date).format('DD/MM')
            }
        }
    }
</script>