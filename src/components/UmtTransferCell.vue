<template>
    <div class="umt-component umt-transfer-cell">
        <a-row type="flex" align="middle" class="row">
            <a-col :span="3">
                <img class="team-image" :src="team.image" @error="onErrorLoadTeamImage"/>
            </a-col>

            <a-col :flex="1" class="transfer-info">
                <div class="info">
                    <h3>{{ team.name.toUpperCase() }}</h3>
                    <span class="transfer-info-date"><i>{{ _date }}</i></span>
                </div>
                <div class="info-to">
                    <span>A fichado a {{ profile.name }}</span>
                </div>
            </a-col>

            <a-col :span="2" class="transfer-icon">
                <img :src="_icon"/>
            </a-col>

            <a-col :span="3">
                <img class="profile-image" :src="profile.image" @error="onErrorLoadProfileImage"/>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import UmtThemeMixin from './../mixins/theme' 
    import UmtCellMixin from './../mixins/cells' 
    import { getImgPath } from '../statics/assets' 
    import moment from 'moment'

    export default {
        name: 'UmtTransferCell',
        mixins: [ UmtThemeMixin, UmtCellMixin ],
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
        },
        computed: {
            _date() {
                return moment(this.date).format('DD/MM')
            },

            _icon() {
                return getImgPath(`${this._theme}-transfer.svg`)
            }
        }
    }
</script>