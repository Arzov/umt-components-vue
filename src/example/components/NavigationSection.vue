<template>

    <section-card title="Navigations" :theme="theme">

        <div>

            <p><i>UmtNavigation</i></p>

            <div>
                <p class="sec">Position: bottom</p>
                <umt-navigation-bar
                    :tabs="navigationTabs"
                    :active-tab="navigationValue"
                    @click="(e) => navigationValue = e"
                />
            </div>

            <div>
                <p class="sec">Position: top</p>
                <umt-navigation-bar
                    position="top"
                    :tabs="navigationTabs"
                    :active-tab="navigationValue"
                    @click="(e) => navigationValue = e"
                />
            </div>

        </div>

    </section-card>

</template>


<script>

    import SectionCard from './SectionCard.vue'


    export default {

        components: { SectionCard },


        props: {
            theme: {
                type: String,
                default: 'dark'
            }
        },


        data() {
            return {

                navigationValue : 'home',

                navigationTabs  : [
                    { key: 'home', name: 'Inicio', icon: 'football' },
                    { key: 'teams', name: 'Equipos', icon: 'shield' },
                    { key: 'matches', name: 'Partidos', icon: 'whistle' }
                ]

            }
        }

    }

</script>