<template>
  <div id="app">
    <nav-bar-to-do/>
    <main-component-to-do-list/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import NavBarToDo from "@/components/NavBarToDo.vue";
import MainComponentToDoList from "@/components/MainComponentToDoList.vue";

@Component({
  components: {MainComponentToDoList, NavBarToDo},
})
export default class App extends Vue {

}
</script>

<style lang="scss">
#app {
  overflow: hidden;
  height: 100vh;
  display: flex;
}

@media (min-width: 1200px) {
  .uk-card-body {
    padding: 20px 20px;
  }
}
</style>
