<template>
  <div id="app">
    <umt-theme-provider>
      <button-section></button-section>
    </umt-theme-provider>
  </div>
</template>

<script>
import ButtonSection from './components/ButtonSection.vue'

export default {
  components: { ButtonSection },
  name: 'App'
}
</script>

<style>
#app {
  background-color: #F1F3FF;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
}

.sec {
  margin: 15px 0 5px 0;
}
</style>