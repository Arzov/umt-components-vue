<template>
    <div class="umt-component umt-position-group">
        <h4 class="title">
            POSICIONES DE JUEGO
        </h4>
        <a v-if="showMoreInfo" @click="onInfo"><i>+INFO</i></a>

        <div class="positions">
            <umt-position-badge v-for="pos in positions" :key="pos" :pos="pos" :value="isChecked(pos)" @input="onPressPos(pos)" />
        </div>
    </div>
</template>

<script>
    const positions = ['PO', 'DFI', 'DFC', 'DFD', 'MI', 'MC', 'MD', 'DI', 'DC', 'DD']

    export default {
        props: {
            value: {
                required: false,
                type: Array,
                default: () => []
            },

            showMoreInfo: {
                required: false,
                type: Boolean,
                default: true
            }
        },
        name: 'UmtPositionGroup',
        data () {
            return {
                positions
            }
        },
        methods: {
            isChecked (pos) {
                return this.value.includes(pos)
            },

            onPressPos (pos) {
                let newValue = JSON.parse(JSON.stringify(this.value))
                if (newValue.includes(pos))
                    newValue = newValue.filter((p) => { return p !== pos })
                else
                    newValue.push(pos)

                this.$emit('input', newValue)
            },

            onInfo () {
                this.$emit('info')
            }
        }
    }
</script>
