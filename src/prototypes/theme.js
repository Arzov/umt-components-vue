export default (Vue, setup) => {
    if (setup && setup.store) {
        const umtComponentsStore = {
            namespaced: true,
            state: {
                umtComponentsTheme: 'lm'
            },
            mutations: {
                setTheme: function(state, value) {
                  if (value === 'light' || value === 'lm')
                    state.umtComponentsTheme = 'lm'; 

                  if (value === 'dark' || value === 'dm')
                    state.umtComponentsTheme = 'dm'; 
                }
            }
        };

        setup.store.registerModule('umt-components', umtComponentsStore);
    }
}