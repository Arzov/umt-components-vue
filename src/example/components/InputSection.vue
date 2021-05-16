<template>
    <section-card title="UmtInput" tag="umt-input">
        <div>
            <div>
                <p class="sec"></p>
                <umt-input placeholder="Ingresa tu nombre" v-model="inputValue"></umt-input>
            </div>
        </div>
    </section-card>
</template>

<script>
    import SectionCard from './SectionCard.vue'

    export default {
        components: { SectionCard },
        data() {
            return {
                inputValue: ''
            }
        }
    }
</script>