import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './src/assets/styles/styles.css';

// PROTOTYPES
import { default as themeSetup } from "./src/prototypes/theme.js";

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
import { default as UmtTransferCell } from "./src/components/UmtTransferCell.vue";
import { default as UmtTransferCellSkeleton } from "./src/components/UmtTransferCellSkeleton.vue";
import { default as UmtSlide } from "./src/components/UmtSlide.vue";
import { default as UmtTabPanel } from "./src/components/UmtTabPanel.vue";
import { default as UmtTabs } from "./src/components/UmtTabs.vue";
import { default as UmtChallengeCell } from "./src/components/UmtChallengeCell.vue";

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
    UmtProfile,
    UmtTransferCell,
    UmtTransferCellSkeleton,
    UmtSlide,
    UmtTabPanel,
    UmtTabs,
    UmtChallengeCell
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
    UmtRadio,
    UmtRadioGroup,
    UmtCodeInput,
    UmtPositionBadge,
    UmtModal,
    UmtRange,
    UmtNavigationBar,
    UmtProfile,
    UmtTransferCell,
    UmtTransferCellSkeleton,
    UmtSlide,
    UmtTabPanel,
    UmtTabs,
    UmtChallengeCell
};

export default UmtComponents;
