export default {
    methods: {
        onErrorLoadProfileImage(evt) {
            evt.target.src = require(`/public/images/${this._theme}-avatar.svg`)
        },

        onErrorLoadTeamImage(evt) {
            evt.target.src = require(`/public/images/${this._theme}-team-profile.svg`)
        },

        onSubmit(evt) {
            this.$emit('submit', evt)
        }
    }
}