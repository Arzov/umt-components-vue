import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// COMPONENTS
import { default as UmtButton } from "./src/components/UmtButton.vue";

const components = [
    UmtButton
]

const UmtComponents = {
    install(Vue) {
        Vue.use(Antd);

        components.map(function (component) {
            Vue.component(component.name, component);
        });
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(UmtComponents);
}

export {
    // Components
    UmtButton
};

export default UmtComponents;
