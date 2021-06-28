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
                <p class="sec"></p>
                <umt-request-cell
                    :team="{ name: 'equipo', picture: '', distance: 5 }"
                />
            </div>

            <p><i>UmtTransferCell</i></p>

            <div>
                <p class="sec"></p>
                <umt-transfer-cell
                    :team="{ name: 'equipo', picture: '' }"
                    :user="{ firstName: 'Usuario', picture: '' }"
                    date="2021-05-16T01:26:24.720Z"
                />
            </div>

            <p><i>UmtPatchCell</i></p>

            <div>
                <p class="sec"></p>
                <umt-patch-cell
                    :match="{
                        name1       : 'equipo1',
                        picture1    : '',
                        name2       : 'equipo2',
                        picture2    : '',
                        schedule    : '2021-05-16T01:26:24.720Z',
                        patches     : {
                            CP: { N: 1 },
                            NP: { N: 2 }
                        }
                    }"
                />
            </div>

            <p><i>UmtSlide</i></p>

            <div>
                <p class="sec"></p>
                <umt-slide>
                    <umt-transfer-cell
                        :team="{ name: 'equipo1', picture: '' }"
                        :user="{ firstName: 'Usuario1', picture: '' }"
                        date="2021-05-16T01:26:24.720Z"
                    />
                    <umt-transfer-cell
                        :team="{ name: 'equipo2', picture: '' }"
                        :user="{ firstName: 'Usuario2', picture: '' }"
                        date="2021-05-16T01:26:24.720Z"
                    />
                </umt-slide>
            </div>

            <p><i>UmtTabs</i></p>

            <div>
                <p class="sec"></p>
                <umt-tabs>

                    <!-- CHALLENGES -->

                    <umt-tab-panel tab="1" label="desafiar">
                        <p>
                            Puedes desafiar a otros equipos sólo si tienes o perteneces a un equipo.
                        </p>
                        <umt-request-cell
                            :team="{ name: 'equipo', picture: '', distance: 5 }"
                        />
                    </umt-tab-panel>


                    <!-- PATCH -->

                    <umt-tab-panel tab="2" label="parchar">
                        <p>
                            Únete a partidos cercanos a ti.
                            Puedes parchar de manera individual a equipos que requieran de jugadores.
                        </p>
                        <umt-patch-cell
                            :match="{
                                name1       : 'equipo1',
                                picture1    : '',
                                name2       : 'equipo2',
                                picture2    : '',
                                schedule    : '2021-05-16T01:26:24.720Z',
                                patches     : {
                                    CP: { N: 1 },
                                    NP: { N: 2 }
                                }
                            }"
                        />
                    </umt-tab-panel>


                    <!-- TEAMS -->

                    <umt-tab-panel tab="3" label="equipos">
                        <p>
                            ¿No tienes equipo?
                            Busca uno cercano a ti o encuentra alguno por su nomber.
                        </p>
                        <umt-request-cell
                            :team="{ name: 'equipo', picture: '', distance: 5 }"
                        />
                    </umt-tab-panel>

                </umt-tabs>
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