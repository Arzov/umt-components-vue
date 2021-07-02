<template>

    <section-card title="Buttons" :theme="value">

        <div>

            <p><i>UmtButton</i></p>

            <div>
                <p class="sec">Type: primary | Size: normal | Color: purple</p>
                <umt-button>
                    iniciar sesión
                </umt-button>
            </div>

            <div>
                <p class="sec">Type: icon | Size: normal | Color: green | Icon: facebook</p>
                <umt-button type="icon" color="green" icon="facebook" />
            </div>

            <div>
                <p class="sec">Type: icon | Size: normal | Color: transparent | Icon: {{ _themePrefix }}-theme</p>
                <umt-button type="icon" color="transparent" :icon="`${_themePrefix}-theme`" @click="triggerChange" />
            </div>

            <div>
                <p class="sec">Type: border | Size: small</p>
                <umt-button type="border" size="small" shape="round">
                    solicitar
                </umt-button>
            </div>

            <div>
                <p class="sec">Type: icon | Size: small | Color: purple | Icon: x</p>
                <umt-button type="icon" size="small" color="purple" icon="x" />
            </div>

        </div>

    </section-card>

</template>


<script>

    import SectionCard from './SectionCard.vue'


    export default {

        components: { SectionCard },

        props: {
            value: {
                type: String,
                default: 'dark'
            }
        },

        computed: {

            _themePrefix () {
                return this.value === 'dark' ? 'dm' : 'lm'
            }

        },

        methods: {
            triggerChange () {
                const theme = this.value === 'dark' ? 'light' : 'dark'

                this.$emit('input', theme)
                this.$emit('change', theme)
            }
        }

    }

</script>