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
                        { key: 'Masculino', value   : 'M' },
                        { key: 'Femenino', value    : 'F' }
                    ]"
                />
            </div>

            <p><i>UmtRange</i></p>

            <div>
                <p class="sec"></p>
                <umt-range v-model="rangeValue" label="RANGO DE EDAD" :min="18" :max="60" />
            </div>

            <p><i>UmtBadgeGroup</i></p>

            <div>
                <p class="sec"></p>
                <umt-badge-group
                    v-model="badgeGroupValue"
                    :options="[
                        {
                            value   : 'GK',
                            text    : 'PO',
                            label   : 'Portero',
                            color   : 'cian',
                            status  : false
                        },
                        {
                            value   : 'LB',
                            text    : 'DFI',
                            label   : 'Defensa izquierdo',
                            color   : 'violet',
                            status  : false
                        },
                        {
                            value   : 'CB',
                            text    : 'DFC',
                            label   : 'Defensa central',
                            color   : 'violet',
                            status  : false
                        },
                        {
                            value   : 'RB',
                            text    : 'DFD',
                            label   : 'Defensa derecho',
                            color   : 'violet',
                            status  : false
                        },
                        {
                            value   : 'LM',
                            text    : 'MI',
                            label   : 'Medio campo izquierdo',
                            color   : 'pink',
                            status  : false
                        },
                        {
                            value   : 'CM',
                            text    : 'MC',
                            label   : 'Medio campo',
                            color   : 'pink',
                            status  : false
                        },
                        {
                            value   : 'RM',
                            text    : 'MD',
                            label   : 'Medio campo derecho',
                            color   : 'pink',
                            status  : false
                        },
                        {
                            value   : 'LW',
                            text    : 'DI',
                            label   : 'Delantero izquierdo',
                            color   : 'purple',
                            status  : false
                        },
                        {
                            value   : 'CF',
                            text    : 'DC',
                            label   : 'Delantero centro',
                            color   : 'purple',
                            status  : false
                        },
                        {
                            value   : 'RW',
                            text    : 'DD',
                            label   : 'Delantero derecho',
                            color   : 'purple',
                            status  : false
                        }
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

                multiSelectorValue  : ['5v5'],

                radioSelectorValue  : 'M',

                rangeValue          : [18, 22],

                badgeGroupValue     : []

            }
        },

    }

</script>