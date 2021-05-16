<template>
    <div class="umt-component umt-navigation-bar">
        <a-row type="flex" justify="space-around">
            <a-col v-for="tab in tabs" :key="tab.key" class="tab">
                <img v-if="isActive(tab.key)" :src="require(`./../assets/images/${_theme}-${tab.icon}-active.svg`)" />
                <img v-else :src="require(`./../assets/images/${_theme}-${tab.icon}.svg`)" />
                <span class="tab-name" :umt-active="isActive(tab.key)">{{ tab.name }}</span>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import UmtThemeMixin from './../mixins/theme' 

    export default {
        name: 'UmtNavigationBar',
        mixins: [ UmtThemeMixin ],
        props: {
            tabs: {
                required: true,
                type: Array
            },

            theme: {
                required: false,
                type: String,
                default: undefined
            },

            activeTab: {
                required: true,
                type: String
            }
        },
        methods: {
            isActive(key) {
                return this.activeTab === key
            }
        }
    }
</script>