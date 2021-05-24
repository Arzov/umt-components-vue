<template>
    <div class="umt-component umt-navigation-bar">
        <a-row type="flex" justify="space-around">
            <a-col v-for="tab in tabs" :key="tab.key" class="tab">
                <img v-if="isActive(tab.key)" :src="activeIcon(tab.icon)" />
                <img v-else :src="icon(tab.icon)" />
                <span class="tab-name" :umt-active="isActive(tab.key)">{{ tab.name }}</span>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import UmtThemeMixin from './../mixins/theme' 
    import { getImgPath } from '../statics/assets' 

    export default {
        name: 'UmtNavigationBar',
        mixins: [ UmtThemeMixin ],
        props: {
            tabs: {
                required: true,
                type: Array
            },

            activeTab: {
                required: true,
                type: String
            }
        },
        methods: {
            isActive(key) {
                return this.activeTab === key
            },
            
            icon(name) {
                return getImgPath(`${this._theme}-${name}-active.svg`)
            },

            activeIcon(name) {
                return getImgPath(`${this._theme}-${name}.svg`)
            }
        }
    }
</script>