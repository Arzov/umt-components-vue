export default (Vue, setup) => {
    if (setup && setup.store) {
        const umtComponentsStore = {
            namespaced: true,
            state: {
                umtComponentsTheme: 'lm'
            },
            mutations: {
                setTheme: function(state, value) { state.umtComponentsTheme = value; }
            }
        };

        setup.store.registerModule('umt-components', umtComponentsStore);
    }
}