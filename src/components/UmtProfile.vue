<template>
    <div class="umt-component umt-profile" @click="onClick">
        <img :src="_profileSrc" />
        <div class="slot-extra" :umt-position="corner" :umt-display="_hasChild">
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
                
                return require(`/public/images/${this._theme}-${defaultImage}.svg`)
            },

            _hasChild() {
                return !!this.$slots.extra
            }
        },
        methods: {
            onClick(evt) {
                this.$emit('click', evt)
            }
        }
    }
</script>