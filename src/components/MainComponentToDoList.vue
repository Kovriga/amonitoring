<template>
  <div class="main--to-do">

  </div>
</template>

<script>
import {Component, Vue} from 'vue-property-decorator';

@Component

export default class MainComponentToDoList extends Vue {

}
</script>

<style scoped>
.main--to-do {
  display: flex;
  flex: auto;
  height: 100vh;
  background-color: #F2F4F7;
}
</style>