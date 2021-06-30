export default (Vue, setup) => {
    if (setup && setup.store) {
      let defaultTheme = 'lm'

      if (setup.defaultTheme) {
        if (setup.defaultTheme === 'light' || setup.defaultTheme === 'lm')
          defaultTheme = 'lm'; 

        if (setup.defaultTheme === 'dark' || setup.defaultTheme === 'dm')
          defaultTheme = 'dm'; 
      }
      
      const umtComponentsStore = {
        namespaced: true,
        state: {
          umtComponentsTheme: defaultTheme || 'lm'
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