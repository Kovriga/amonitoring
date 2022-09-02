<template>
  <div id="app">
    <nav-bar-to-do/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import NavBarToDo from "@/components/NavBarToDo.vue";

@Component({
  components: {NavBarToDo},
})
export default class App extends Vue {

}
</script>

<style lang="scss">
#app {
  height: 100vh;
}
</style>
