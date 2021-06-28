<template>

    <section-card title="Displays" :theme="theme">

        <div>

            <p><i>UmtModal</i></p>

            <div>
                <p class="sec"></p>
                <a @click="showModal = true">Mostrar</a>
                <umt-modal v-if="showModal" @click="showModal = false">

                    <center><h2>Lorem ipsum</h2></center>

                    <br>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec ipsum nisi, sollicitudin suscipit lacinia nec, egestas vel massa.
                        Sed egestas, sapien sed eleifend tempus, massa arcu congue neque, non sagittis neque leo quis orci.
                        Suspendisse ultrices porttitor quam, id suscipit ligula tempus vitae.
                        Suspendisse ullamcorper tellus quis placerat luctus.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi.
                        Suspendisse eu nisl lacus. Etiam et malesuada tortor.
                        Curabitur venenatis ex vitae leo convallis commodo.
                        In vel arcu molestie, cursus purus eget, fringilla lorem.
                        Sed iaculis libero sit amet enim interdum, id semper odio rutrum.
                        Nunc in dignissim nisl.
                        Nulla pulvinar mattis erat at molestie.
                    </p>

                </umt-modal>
            </div>

            <br>

            <p><i>UmtAvatar</i></p>

            <div>
                <p class="sec">Icon: avatar | Size: default | Color: green</p>
                <umt-avatar />
            </div>

            <div>
                <p class="sec">Icon: team-profile | Size: small | Color: purple</p>
                <umt-avatar icon="team-profile" size="small" color="purple" />
            </div>

            <br>

            <p><i>UmtRequestCell</i></p>

            <div>
                <p class="sec">ButtonLabel: solicitar</p>
                <umt-request-cell
                    :team="{ name: 'equipo', picture: '', distance: 5 }"
                    buttonLabel="solicitar"
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

                showModal: false

            }
        }

    }

</script>