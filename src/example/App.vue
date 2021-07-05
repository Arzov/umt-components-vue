<template>

    <div id="app" :style="theme === 'dark' ? `background-color: #161C27;` : `background-color: #F1F3FF;`">

        <umt-theme-provider :theme="theme">

            <button-section v-model="theme" />
            <input-section :theme="theme" />
            <display-section :theme="theme" />
            <navigation-section :theme="theme" />
            <collapsible-section :theme="theme" />

        </umt-theme-provider>

    </div>


</template>


<script>

import ButtonSection from './components/ButtonSection.vue'
import InputSection from './components/InputSection.vue'
import DisplaySection from './components/DisplaySection.vue'
import NavigationSection from './components/NavigationSection.vue'


export default {

    components: { 
        ButtonSection,
        InputSection,
        DisplaySection,
        NavigationSection,
    },

    name: 'App',

    data () {
        return {
            theme: 'dark',
        }
    }

}

</script>


<style>

#app {
    position        : absolute;
    top             : 0;
    bottom          : 0;
    left            : 0;
    right           : 0;
    overflow        : auto;
}

.sec {
    margin: 15px 0 5px 0;
}

</style>