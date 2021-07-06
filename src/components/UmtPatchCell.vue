<template>

    <div class="umt-component umt-patch-cell">

        <a-row type="flex" justify="space-around" align="middle" :gutter="24">

            <!-- TEAMS AVATAR -->

            <a-col class="avatar-section">
                <center>
                    <umt-avatar icon="team-profile" color="violet" :src="match.picture1" />
                    <h3 class="team-name">{{ match.name1 }}</h3>
                </center>
            </a-col>

            <a-col :span="1">
                <center><h2>-</h2></center>
            </a-col>

            <a-col class="avatar-section">
                <center>
                    <umt-avatar icon="team-profile" color="violet" :src="match.picture2" />
                    <h3 class="team-name">{{ match.name2 }}</h3>
                </center>
            </a-col>


            <!-- CONTENT -->

            <a-col class="patches">
                <center>
                    <span><i>{{ `${match.patches.CP.N}/${match.patches.NP.N}` }}</i></span>
                    <span>Parches</span>
                </center>
            </a-col>

            <a-col class="date">
                <center>
                    <span><i>{{ _date }}</i></span>
                    <span>Fecha</span>
                </center>
            </a-col>


            <!-- BUTTON -->

            <a-col class="button">
                <umt-button type="border" size="small" shape="round" @click="onClick">
                    UNIRSE
                </umt-button>
            </a-col>

        </a-row>

    </div>

</template>


<script>

import UmtCellMixin from "./../mixins/cells";


export default {

    name: "UmtPatchCell",


    mixins: [UmtCellMixin],


    props: {
        match: {
            type    : Object,
            required: true
        }
    },


    methods: {
        onClick() {
            this.$emit('click')
        }
    },


    computed: {
        _date() {
            return `${this.getDayDD(this.match.schedule)}/${this.getMonthMM(this.match.schedule)}`
        }
    }

};

</script>