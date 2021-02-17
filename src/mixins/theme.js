export default {
    computed: {
        _theme() {
            if (this.theme)
                return this.theme

            return this.$store && this.$store.state['umt-components'] ? this.$store.state['umt-components']['umtComponentsTheme'] : 'lm'
        }
    }
}