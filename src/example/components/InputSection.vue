<template>

    <section-card title="Inputs" :theme="theme">

        <div>

            <p><i>UmtInput</i></p>

            <div>
                <p class="sec">Type: text</p>
                <umt-input placeholder="Texto" v-model="inputValue" />
            </div>

            <div>
                <p class="sec">Type: password</p>
                <umt-input placeholder="Contraseña" type="password" v-model="inputValue" />
            </div>

            <div>
                <p class="sec">Type: search</p>
                <umt-input placeholder="Buscar" type="search" v-model="inputValue" />
            </div>

            <div>
                <p class="sec">Type: number | Suffix: kg</p>
                <umt-input placeholder="0" type="number" suffix="kg" v-model="inputValue" />
            </div>

            <p><i>UmtDatePicker</i></p>

            <div>
                <p class="sec"></p>
                <umt-date-picker v-model="dateValue" />
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

                inputValue: '',

                dateValue: {
                    day     : undefined,
                    month   : undefined,
                    year    : undefined
                }

            }
        },

    }

</script>