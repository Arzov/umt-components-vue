<template>

    <section-card title="UmtButton" tag="umt-button">

        <div>

            <div>
                <p class="sec">Type: primary | Size: normal | Color: purple </p>
                <umt-button>
                    iniciar sesión
                </umt-button>
            </div>

            <div>
                <p class="sec">Type: icon | Size: normal | Color: green | Icon: facebook </p>
                <umt-button type="icon" color="green" icon="facebook" />
            </div>

            <div>
                <p class="sec">Type: icon | Size: normal | Color: transparent | Icon: lm-theme </p>
                <umt-button type="icon" color="transparent" icon="lm-theme" />
            </div>

            <div>
                <p class="sec">Type: border | Size: small</p>
                <umt-button type="border" size="small" shape="round">
                    solicitar
                </umt-button>
            </div>

            <div>
                <p class="sec">Type: icon | Size: small | Color: transparent | Icon: x </p>
                <umt-button type="icon" size="small" color="violet" icon="x" />
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