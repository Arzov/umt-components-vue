<template>
    <umt-modal class="umt-component umt-position-modal" @click="onClick">
            <a-row type="flex" justify="center">
                <a-col>
                    <h2 class="umt-modal-title">
                        Posiciones de juego
                    </h2>
                </a-col>
            </a-row>
            <a-row type="flex" justify="center">
                <a-col :span="20">
                    <p class="info">
                        Puedes elegir una o más opciones. Tu posición será visible para otros rivales cuando quieras unirte como parche a una partida.
                    </p>
                </a-col>
            </a-row>

            <a-row type="flex" justify="center">
                <a-col :span="20">
                    <a-row
                        v-for="pos in allPositions"
                        :key="pos.key"
                        type="flex"
                        :gutter="12"
                        align="middle"
                        class="position-row"
                    >
                        <a-col>
                            <umt-position-badge :pos="pos.key" :value="true" />
                        </a-col>

                        <a-col :flex="1">
                            <span>{{ pos.label }}</span>
                        </a-col>
                    </a-row>
                </a-col>
            </a-row>
        </umt-modal>
</template>

<script>
    const allPositions = [
        { key: 'PO', label: 'Portero' },
        { key: 'DFI', label: 'Defensa izquierdo' },
        { key: 'DFC', label: 'Defensa central' },
        { key: 'DFD', label: 'Defensa derecho' },
        { key: 'MI', label: 'Medio campo izquierdo' },
        { key: 'MC', label: 'Medio campo' },
        { key: 'MD', label: 'Medio campo derecho' },
        { key: 'DI', label: 'Delantero izquierdo' },
        { key: 'DC', label: 'Delantero centro' },
        { key: 'DD', label: 'Delantero derecho' }
    ]

    export default {
        name: 'UmtPositionModal',
        data() {
            return {
                allPositions
            }
        },
        methods: {
            onClick (evt) {
                this.$emit('click', evt)
            }
        }
    }
</script>