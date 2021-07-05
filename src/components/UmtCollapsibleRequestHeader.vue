<template>
    <div class="umt-component umt-collapsible-request-header">
        <a-row type="flex" justify="space-around" align="middle" :gutter="12">
            <!-- TEAM AVATAR -->
            <a-col :span="4">
                <center>
                    <umt-avatar v-if="type === 'team'" icon="team-profile" size="large" :src="picture" />
                    <umt-avatar v-else icon="avatar" size="large" :src="picture" />
                </center>
            </a-col>

            <a-col flex="auto" class="team-name">
                <span><b>{{ name.toUpperCase() }}</b></span>
                <span class="hight-light"><i> ({{ requestCount }})</i></span>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        name: 'UmtCollapsibleRequestHeader',


        props: {

            type: {
                required: false,
                type: String,
                default: 'team'
            },

            picture: {
                required: false,
                type: String,
                default: '',
            },

            name: {
                required: false,
                type: String,
                default: '',
            },

            requestCount: {
                required: true,
                type: Number
            }
        },

    }
</script>
