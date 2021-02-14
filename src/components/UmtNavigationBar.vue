<template>
    <div class="umt-component umt-navigation-bar">
        <a-row type="flex" justify="space-around">
            <a-col v-for="tab in tabs" :key="tab.key" class="tab">
                <img v-if="isActive(tab.key)" :src="require(`./../assets/images/${mode}-${tab.icon}-active.svg`)" />
                <img v-else :src="require(`./../assets/images/${mode}-${tab.icon}.svg`)" />
                <span class="tab-name" :umt-active="isActive(tab.key)">{{ tab.name }}</span>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        name: 'UmtNavigationBar',
        props: {
            tabs: {
                required: true,
                type: Array
            },

            mode: {
                required: false,
                type: String,
                default: 'lm'
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