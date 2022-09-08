<template>
  <div class="main--nav-bar">
    <div>
      <div class="uk-card uk-card-default uk-card-header">
        <div class="uk-container-expand name--nav-bar">
          <div class="uk-container-large">
            <div class="main--header-icon"></div>
            <p class="uk-text-bold uk-text-emphasis">Company</p>
          </div>
        </div>
        <div class="to-do-list--nav-bar">
          <div class="list--nav-bar">
            <span class="item-for--nav-bar" v-for="(item, index) in $store.state.users" :key="index">
              <div @click="actionUserId(item.id)" class="uk-container-expand item-list--nav-bar">
                <div class="uk-container-large">
                  <span uk-icon="icon: thumbnails; ratio: 1"></span>
                  <p class="uk-text-bold uk-text-emphasis">{{ item.name }}</p>
                </div>
                <div class="main--item-icon">{{ item.id }}</div>
              </div>
            </span>
          </div>
          <div class="edit--nav-bar">
            <div class="uk-container-expand item-edit--nav-bar">
              <div class="uk-container-large">
                <span uk-icon="icon: cog; ratio: 1"></span>
                <p class="uk-text-normal uk-text-emphasis">Settings</p>
              </div>
              <div class="uk-container-large" @click="newTask = !newTask">
                <span uk-icon="icon: cog; ratio: 1" ></span>
                <p class="uk-text-normal uk-text-emphasis">New Task</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="dialog--add-new-task" v-if="newTask" @keydown.esc="newTask = false" @click="newTask = false">
      <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-position-center" >
        <h3 class="uk-card-title">New Task</h3>
        <form>
          <fieldset class="uk-fieldset">
            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Task" v-model="taskTitle">
            </div>
            <div class="uk-margin" v-if="$store.state.actionUserId === 0">
              <select v-model="selected" class="uk-select">
                <option :value="item.id" v-for="(item, index) in $store.state.users" :key="index">
                  {{ item.name }}
                </option>
              </select>
            </div>
          </fieldset>
        </form>
        <button :disabled="!taskTitle" class="uk-button uk-button-default" @click="addTask()">Add</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {AxiosResponse} from "axios";


@Component({})

export default class NavBarToDo extends Vue {

  newTask = false;
  selected = 0;
  taskTitle = '';

  actionUserId(id: number): void {
    this.$store.commit('setUserId', id)
  }

  created(): void {
    this.$http.get('https://jsonplaceholder.typicode.com/users/').then((response: AxiosResponse) => {
      this.$store.commit('setUsers', response.data)
    })
  }

  addTask(): void {
    this.$http.post('https://jsonplaceholder.typicode.com/todos', {
      userId: this.$store.state.actionUserId === 0 ? this.selected : this.$store.state.actionUserId,
      title: this.taskTitle,
      completed: false
    }).then(() => {
      if(this.$store.state.actionUserId === 0) {
        this.$store.dispatch("getToDoList", [this.$http]);
      } else {
        this.$store.dispatch("loadingToDoFromUserId", [this.$http, this.$store.state.actionUserId]);
      }
    }).finally(() => {
      this.newTask = false;
    })
  }
}
</script>

<style lang="scss" scoped>
#dialog--add-new-task {
  z-index: 5;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, .2);
}

#dialog--add-new-task > div {
  height: 27%;
}

.item-for--nav-bar > div {
  transition: 0.5s;
}

.item-for--nav-bar > div:hover {
  background-color: dodgerblue;
  color: #e1e1e1;
}

.to-do-list--nav-bar {
  height: 100%;
  width: 272px;
  margin-top: 34px;
}

.edit--nav-bar {
  width: 100%;
}

.item-edit--nav-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.item-edit--nav-bar > div {
  display: flex;
  align-items: center;
}

.item-edit--nav-bar > div > span {
  margin-right: 8px;
}

.item-edit--nav-bar > div > p {
  font-weight: 550;
  color: #667085 !important;
  margin: 0;
}

.name--nav-bar > div {
  align-items: center;
  display: flex;
}

.main--header-icon {
  margin-right: 8px;
  width: 24px;
  height: 24px;
  background: #1D2939;
  border-radius: 4px;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.main--item-icon {
  font-size: 12px;
  color: white;
  margin-right: 8px;
  width: 20px;
  height: 20px;
  background: #1D2939;
  border-radius: 4px;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.list--nav-bar {
  overflow: auto;
  height: 95%;
  width: 100%;
}

.list--nav-bar::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  border-radius: 8px;
}

.list--nav-bar::-webkit-scrollbar-button {
  display: none;
}

.list--nav-bar::-webkit-scrollbar-corner, ::-webkit-scrollbar-track {
  background: #e1e1e1;
}

.list--nav-bar::-webkit-scrollbar-thumb {
  background: #757575;
}

.list--nav-bar::-webkit-scrollbar-thumb {
  border-radius: 8px;
}

.item-list--nav-bar {
  height: 48px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #F2F4F7;
  border-radius: 8px;
}

.item-list--nav-bar > .uk-container-large > span {
  margin: 0 10px;
}

.item-list--nav-bar > div > p {
  margin: 0;
}

.item-list--nav-bar > div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.main--nav-bar {
  height: 100%;
  display: flex;
  width: 320px;
}

.main--nav-bar > div > .uk-card {
  display: flex;
  width: 320px;
  height: 100%;
  flex-direction: column;
  align-content: center;
  align-items: center;
}

@media (min-width: 640px) {
  .uk-offcanvas-bar {
    left: 0;
    width: 350px;
    padding: 30px 30px;
  }
}
</style>