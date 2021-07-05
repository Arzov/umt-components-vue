<template>

    <div class="umt-component umt-transfer-cell">

        <a-row type="flex" justify="space-around" align="middle" :gutter="12">

            <!-- TEAM AVATAR -->

            <a-col :span="4" class="avatar-section">
                <center>
                    <umt-avatar icon="team-profile" size="large" :src="team.picture" />
                </center>
            </a-col>


            <!-- CONTENT -->

            <a-col class="info">
                <span><b>{{ team.name.toUpperCase() }}</b> <i>{{ _date }}</i></span>
                <span>Ha fichado a {{ user.firstName }}</span>
            </a-col>

            <a-col class="transfer-icon">
                <center>
                    <img :src="_icon"/>
                </center>
            </a-col>


            <!-- USER AVATAR -->

            <a-col :span="4" class="avatar-section">
                <center>
                    <umt-avatar icon="avatar" size="large" :src="user.picture" />
                </center>
            </a-col>

        </a-row>

    </div>

</template>


<script>

    import UmtThemeMixin from './../mixins/theme' 
    import UmtCellMixin from './../mixins/cells' 
    import { getImgPath } from '../statics/assets' 


    export default {

        name: 'UmtTransferCell',


        mixins: [ UmtThemeMixin, UmtCellMixin ],


        props: {

            team: {
                required: true,
                type    : Object
            },

            user: {
                required: true,
                type    : Object
            },

            date: {
                required: true,
                type    : String
            }

        },


        computed: {
            _date() {
                return `${this.getDayDD(this.date)} / ${this.getMonthMM(this.date)}`
            },

            _icon() {
                return getImgPath(`${this._theme}-transfer.svg`)
            }
        }

    }

</script>