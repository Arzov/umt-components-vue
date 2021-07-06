<template>

    <div class="umt-component umt-skeleton">

        <!-- AVATAR + INFO -->

        <a-row v-if="_type == SKELETON_TYPES[0]" type="flex" justify="space-around" align="middle" :gutter="24">

            <a-col class="avatar-section">
                <a-avatar size="large" class="loading-avatar" />
            </a-col>


            <a-col class="info">
                <span><div class="loading-text title" /></span>
                <span><div class="loading-text" /></span>
            </a-col>

        </a-row>


        <!-- ONLY INFO -->

    </div>

</template>


<script>

    import UmtThemeMixin from './../mixins/theme' 


    export const SKELETON_TYPES = [
        'AvatarInfo',
        'OnlyInfo' // Aún no implementado
    ]


    export default {

        name: 'UmtSkeleton',


        mixins: [ UmtThemeMixin ],


        props: {
            type: {
                type: String,
                require: false,
                default: SKELETON_TYPES[0]
            }
        },


        data() {
            return {
                SKELETON_TYPES
            }
        },


        computed: {
            _type() {
                if (this.SKELETON_TYPES.includes(this.type))
                    return this.type

                return this.SKELETON_TYPES[0]
            }
        }

    }

</script>

<style lang="scss" scoped>

</style>