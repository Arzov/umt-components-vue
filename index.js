import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './src/assets/styles/styles.css';

// COMPONENTS
import { default as UmtThemeProvider } from "./src/components/UmtThemeProvider.vue";
import { default as UmtButton } from "./src/components/UmtButton.vue";
import { default as UmtInput } from "./src/components/UmtInput.vue";
import { default as UmtRadio } from "./src/components/UmtRadio.vue";
import { default as UmtRadioGroup } from "./src/components/UmtRadioGroup.vue";
import { default as UmtCodeInput } from "./src/components/UmtCodeInput.vue";
import { default as UmtPositionBadge } from "./src/components/UmtPositionBadge.vue";
import { default as UmtModal } from "./src/components/UmtModal.vue";
import { default as UmtRange } from "./src/components/UmtRange.vue";
import { default as UmtNavigationBar } from "./src/components/UmtNavigationBar.vue";
import { default as UmtProfile } from "./src/components/UmtProfile.vue";

const components = [
    UmtThemeProvider,
    UmtButton,
    UmtInput,
    UmtRadio,
    UmtRadioGroup,
    UmtCodeInput,
    UmtPositionBadge,
    UmtModal,
    UmtRange,
    UmtNavigationBar,
    UmtProfile
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
    UmtButton,
    UmtInput,
    UmtRadio,
    UmtRadioGroup,
    UmtCodeInput,
    UmtPositionBadge,
    UmtModal,
    UmtRange,
    UmtNavigationBar,
    UmtProfile
};

export default UmtComponents;
