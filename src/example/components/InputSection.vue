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
                <umt-date-picker v-model="datePickerValue" />
            </div>

            <p><i>UmtCodeInput</i></p>

            <div>
                <p class="sec"></p>
                <umt-code-input />
            </div>

            <p><i>UmtMultiSelector</i></p>

            <div>
                <p class="sec"></p>
                <umt-multi-selector
                    v-model="multiSelectorValue"
                    :options="[
                        { key: '5v5', value     : '5v5' },
                        { key: '7v7', value     : '7v7' },
                        { key: '11v11', value   : '11v11' }
                    ]"
                />
            </div>

            <p><i>UmtRadioSelector</i></p>

            <div>
                <p class="sec"></p>
                <umt-radio-selector
                    v-model="radioSelectorValue"
                    :options="[
                        { key: 'Masculino', value     : 'M' },
                        { key: 'Femenino', value     : 'F' }
                    ]"
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

                inputValue: '',

                datePickerValue: {
                    day     : undefined,
                    month   : undefined,
                    year    : undefined
                },

                multiSelectorValue: ['5v5'],

                radioSelectorValue: 'M'

            }
        },

    }

</script>