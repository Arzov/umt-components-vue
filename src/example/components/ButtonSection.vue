<template>
    <section-card title="UmtButton" tag="umt-button">
        <div>
            <div>
                <p class="sec">Style: primary | Size: normal</p>
                <umt-button>
                    iniciar sesión
                </umt-button>
            </div>

            <div>
                <p class="sec">Style: rounded | Size: small</p>
                <umt-button type="rounded" size="small">
                    solicitar
                </umt-button>
            </div>

            <div>
                <p class="sec">Icon: lm-facebook</p>
                <umt-button icon="lm-facebook" />
            </div>
        </div>
    </section-card>
</template>

<script>
    import SectionCard from './SectionCard.vue'

    export default {
        components: { SectionCard },
    }
</script>