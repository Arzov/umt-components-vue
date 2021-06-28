<template>

    <div class="umt-component umt-transfer-cell">

        <a-row type="flex" align="middle" class="row">

            <!-- TEAM AVATAR -->

            <a-col :span="3">
                <umt-avatar icon="team-profile" size="large" :src="team.picture" />
            </a-col>


            <!-- CONTENT -->

            <a-col :flex="1" class="transfer-info">

                <div class="info">
                    <p><b>{{ team.name.toUpperCase() }}</b></p>
                    <span class="transfer-info-date"><i>{{ _date }}</i></span>
                </div>

                <div class="info-to">
                    <span>Ha fichado a {{ user.firstName }}</span>
                </div>

            </a-col>

            <a-col :span="2" class="transfer-icon">
                <img :src="_icon"/>
            </a-col>


            <!-- USER AVATAR -->

            <a-col :span="3">
                <umt-avatar icon="avatar" size="large" :src="user.picture" />
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