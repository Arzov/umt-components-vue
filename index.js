import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './src/assets/styles/styles.css';

// PROTOTYPES
import { default as themeSetup } from "./src/prototypes/theme.js";

// COMPONENTS
import { default as UmtThemeProvider } from "./src/components/UmtThemeProvider.vue";
import { default as UmtButton } from "./src/components/UmtButton.vue";
import { default as UmtInput } from "./src/components/UmtInput.vue";
import { default as UmtCodeInput } from "./src/components/UmtCodeInput.vue";
import { default as UmtBadge } from "./src/components/UmtBadge.vue";
import { default as UmtModal } from "./src/components/UmtModal.vue";
import { default as UmtRange } from "./src/components/UmtRange.vue";
import { default as UmtNavigationBar } from "./src/components/UmtNavigationBar.vue";
import { default as UmtProfile } from "./src/components/UmtProfile.vue";
import { default as UmtTransferCell } from "./src/components/UmtTransferCell.vue";
import { default as UmtSlide } from "./src/components/UmtSlide.vue";
import { default as UmtTabPanel } from "./src/components/UmtTabPanel.vue";
import { default as UmtTabs } from "./src/components/UmtTabs.vue";
import { default as UmtRequestCell } from "./src/components/UmtRequestCell.vue";
import { default as UmtSkeleton } from "./src/components/UmtSkeleton.vue";
import { default as UmtPatchCell } from "./src/components/UmtPatchCell.vue";
import { default as UmtBadgeGroup } from "./src/components/UmtBadgeGroup.vue";
import { default as UmtDatePicker } from "./src/components/UmtDatePicker.vue";
import { default as UmtMultiSelector } from "./src/components/UmtMultiSelector.vue";
import { default as UmtRadioSelector } from "./src/components/UmtRadioSelector.vue";

const components = [
    UmtThemeProvider,
    UmtButton,
    UmtInput,
    UmtCodeInput,
    UmtBadge,
    UmtModal,
    UmtRange,
    UmtNavigationBar,
    UmtProfile,
    UmtTransferCell,
    UmtSlide,
    UmtTabPanel,
    UmtTabs,
    UmtRequestCell,
    UmtSkeleton,
    UmtPatchCell,
    UmtBadgeGroup,
    UmtDatePicker,
    UmtMultiSelector,
    UmtRadioSelector
]

const UmtComponents = {
    install(Vue, setup) {
        let options = setup ? setup : {};
        Vue.use(Antd);

        components.map(function (component) {
            Vue.component(component.name, component);
        });

        Vue.prototype.$umtMode = options.mode && ['desktop', 'mobile'].includes(options.mode) ? options.mode : 'desktop';

        // Call prototypes
        themeSetup(Vue, setup);
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
    UmtCodeInput,
    UmtBadge,
    UmtModal,
    UmtRange,
    UmtNavigationBar,
    UmtProfile,
    UmtTransferCell,
    UmtSlide,
    UmtTabPanel,
    UmtTabs,
    UmtRequestCell,
    UmtSkeleton,
    UmtPatchCell,
    UmtBadgeGroup,
    UmtDatePicker,
    UmtMultiSelector,
    UmtRadioSelector
};

export default UmtComponents;
