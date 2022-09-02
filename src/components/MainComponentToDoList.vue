<template>
  <div class="main--to-do">
    <div class="uk-card uk-card-body to-do">
      <p>
        TO DO
      </p>
      <div>
        <div class="item--to-do" v-for="(item, index) in $store.state.toDoList.true" :key="index">
          <div @click="edit()">
            <div class="uk-card uk-card-default uk-card-body">
              <h3 class="uk-card-title">{{item.title}}</h3>
              <p>Created dy <span>{{item.userId}}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-card uk-card-body done">
      <p class="uk-text-normal">
        DONE
      </p>
      <div>
        <div class="item--done" v-for="(item, index) in $store.state.toDoList.false" :key="index">
          <div @click="edit()">
            <div class="uk-card uk-card-default uk-card-body">
              <h3 class="uk-card-title">{{item.title}}</h3>
              <p>Created dy <span>{{item.userId}}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {AxiosResponse} from 'axios';
import {groupBy} from 'lodash';

@Component

export default class MainComponentToDoList extends Vue {

  created(): void {
    this.$http.get('https://jsonplaceholder.typicode.com/todos/').then((response: AxiosResponse) => {
      this.$store.state.toDoList = groupBy(response.data, 'completed');
      console.log(this.$store.state.toDoList)
    });
  }

  edit(): void {
    console.log('э')
  }

}
</script>

<style scoped>
.item--to-do:not(:first-child), .item--done:not(:first-child) {
  margin-top: 24px;
}

.item--done > div > div, .item--to-do > div > div {
  transition: 0.5s;
  border-radius: 8px;
}

.item--done > div , .item--to-do > div  {
  max-width: 320px;
}

.main--to-do {
  display: flex;
  flex: auto;
  justify-content: center;
  height: 100vh;
  background-color: #F2F4F7;
}

.to-do > p, .done > p {
  font-weight: 550;
}

.to-do, .done {
  padding: 80px 17px !important;
}

.to-do > div, .done > div {
  max-height: 100%;
  overflow: auto;
}

.to-do > div::-webkit-scrollbar, .done > div::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  border-radius: 8px;
}

.to-do > div::-webkit-scrollbar-button, .done > div::-webkit-scrollbar-button {
  display: none;
}

.to-do > div::-webkit-scrollbar-corner, to-do > div::-webkit-scrollbar-track, .done > div::-webkit-scrollbar-corner, done > div::-webkit-scrollbar-track {
  background: #e1e1e1;
}

.to-do > div::-webkit-scrollbar-thumb, .done > div::-webkit-scrollbar-thumb {
  background: #757575;
}

.to-do > div::-webkit-scrollbar-thumb, .done > div::-webkit-scrollbar-thumb {
  border-radius: 8px;
}

.item--done > div > div:hover, .item--to-do > div > div:hover {
  background-color: dodgerblue;
  color: #e1e1e1;
}
</style>