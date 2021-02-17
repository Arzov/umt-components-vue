<template>
    <div class="umt-component umt-profile">
        <img :src="_profileSrc" />
        <div class="slot-extra" :umt-position="corner">
            <slot name="extra"></slot>
        </div>
    </div>
</template>

<script>
    import UmtThemeMixin from './../mixins/theme' 

    export default {
        name: 'UmtProfile',
        mixins: [ UmtThemeMixin ],
        props: {
            profileSrc: {
                required: false,
                type: undefined,
                default: undefined
            },

            theme: {
                required: false,
                type: String,
                default: undefined
            },

            type: {
                required: false,
                type: String,
                default: 'avatar'
            },

            corner: {
                required: false,
                type: String,
                default: 'bl'
            }
        },
        computed: {
            _profileSrc() {
                if (this.profileSrc)
                    return this.profileSrc

                let defaultImage
                if (this.type == 'team')
                    defaultImage = 'team-profile'
                else
                    defaultImage = 'avatar'
                
                return require(`./../assets/images/${this._theme}-${defaultImage}.svg`)
            }
        }
    }
</script>