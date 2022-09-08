<template>
  <div v-if="!$store.state.loadSpin" class="main--to-do">
    <div class="uk-card uk-card-body to-do">
      <p>
        TO DO
      </p>
      <div>
        <div class="item--to-do" v-for="(item, index) in $store.state.toDoList.true" :key="index">
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <h3 class="uk-card-title">{{ item.title }}</h3>
              <div class="item--icon">
                <a @click="deleteToDoItem(item)" class="uk-icon-button delete" uk-icon="trash"></a>
                <a @click="edit(item)" class="uk-icon-button add-done" uk-icon="check"></a>
              </div>
              <p>Created dy <span class="uk-text-emphasis">{{ item.userId }}</span></p>
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
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <h3 class="uk-card-title">{{ item.title }}</h3>
              <div class="item--icon">
                <a @click="deleteToDoItem(item)" class="uk-icon-button delete" uk-icon="trash"></a>
              </div>
              <p>Created dy <span class="uk-text-emphasis">{{ item.userId }}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="main--to-do-spin" v-else>
    <div uk-spinner="ratio: 3"></div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';

@Component

export default class MainComponentToDoList extends Vue {

  @Watch('$store.state.actionUserId')
  loadingToDoFromUserId(): void {
    this.$store.dispatch("loadingToDoFromUserId", [this.$http, this.$store.state.actionUserId]);
  }

  created(): void {
    this.$store.dispatch("getToDoList", [this.$http]);
  }

  edit(item): void {
    this.$http.patch(`https://jsonplaceholder.typicode.com/todos/` + item.id, {
      completed: true
    }).then(() => {
      if (this.$store.state.actionUserId === 0) {
        this.$store.dispatch("getToDoList", [this.$http]);
      } else {
        this.$store.dispatch("loadingToDoFromUserId", [this.$http, this.$store.state.actionUserId]);
      }
    });
  }

  deleteToDoItem(item): void {
    this.$http.delete('https://jsonplaceholder.typicode.com/todos/' + item.id).then(() => {
      if (this.$store.state.actionUserId === 0) {
        this.$store.dispatch("getToDoList", [this.$http]);
      } else {
        this.$store.dispatch("loadingToDoFromUserId", [this.$http, this.$store.state.actionUserId]);
      }
    });
  }

}
</script>

<style scoped>

.item--icon {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}

.delete:hover {
  background-color: rgb(217, 11, 52);
}

.add-done:hover {
  background-color: rgb(114, 217, 11);
}

.uk-card-title {
  font-weight: 550;
}

.item--to-do:not(:first-child), .item--done:not(:first-child) {
  margin-top: 24px;
}

.item--done > div > div, .item--to-do > div > div {
  transition: 0.5s;
  border-radius: 8px;
}

.item--done > div, .item--to-do > div {
  max-width: 320px;
}

.main--to-do {
  display: flex;
  flex: auto;
  justify-content: center;
  height: 100vh;
  background-color: #F2F4F7;
}

.main--to-do-spin {
  display: flex;
  align-items: center;
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
  color: #e1e1e1 !important;
}

.item--done > div > div, .item--to-do > div > div {
  color: #98A2B3;
}
</style>