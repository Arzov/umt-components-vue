<template>
    <div class="umt-component umt-skeleton">
        <!-- AVATAR + INFO -->
        <div v-if="_type == SKELETON_TYPES[0]" class="avatar-info">
            <a-row type="flex" align="middle">
                <a-col :span="3">
                    <div class="circle"></div>
                </a-col>

                <a-col :flex="1" class="info">
                    <div class="first square-wrapper">
                        <div class="square"></div>
                    </div>
                    <div class="second square-wrapper">
                        <div class="square"></div>
                    </div>
                </a-col>
            </a-row>
        </div>

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