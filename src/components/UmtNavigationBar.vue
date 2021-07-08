<template>

    <div class="umt-component umt-navigation-bar" :umt-position="position">

        <a-row type="flex" justify="space-around" align="middle">

            <a-col v-for="tab in tabs" :key="tab.key" class="tab" @click.native="setClick(tab.key)">

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
                type    : Array
            },

            activeTab: {
                required: true,
                type    : String
            },

            position: {
                required: false,
                type    : String,
                default : 'bottom'
            }
        },


        methods: {

            setClick(key) {
                this.$emit('click', key)
            },

            isActive(key) {
                return this.activeTab === key
            },
            
            icon(name) {
                return getImgPath(`${this._theme}-${name}.svg`)
            },

            activeIcon(name) {
                return getImgPath(`${this._theme}-${name}-active.svg`)
            }

        }

    }

</script>