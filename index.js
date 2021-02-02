import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './src/assets/styles/styles.css';

// COMPONENTS
import { default as UmtThemeProvider } from "./src/components/UmtThemeProvider.vue";
import { default as UmtButton } from "./src/components/UmtButton.vue";

const components = [
    UmtThemeProvider,
    UmtButton
]

const UmtComponents = {
    install(Vue, setup) {
        let options = setup ? setup : {};
        Vue.use(Antd);

        components.map(function (component) {
            Vue.component(component.name, component);
        });

        Vue.prototype.$umtMode = options.mode && ['desktop', 'mobile'].includes(options.mode) ? options.mode : 'desktop';
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(UmtComponents);
}

export {
    // Components
    UmtThemeProvider,
    UmtButton
};

export default UmtComponents;
