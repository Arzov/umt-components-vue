import { getImgPath } from '../statics/assets' 

export default {
    methods: {
        onErrorLoadProfileImage(evt) {
            evt.target.src = getImgPath(`${this._theme}-avatar.svg`)
        },

        onErrorLoadTeamImage(evt) {
            evt.target.src = getImgPath(`${this._theme}-team-profile.svg`)
        },

        onSubmit(evt) {
            this.$emit('submit', evt)
        }
    }
}