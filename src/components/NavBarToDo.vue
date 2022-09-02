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
            <div class="uk-container-expand item-list--nav-bar">
              <div class="uk-container-large">
                <span uk-icon="icon: thumbnails; ratio: 1"></span>
                <p class="uk-text-bold uk-text-emphasis">Tasks</p>
              </div>
              <div class="main--item-icon">4</div>
            </div>
          </div>
          <div class="edit--nav-bar">
            <div class="uk-container-expand item-edit--nav-bar">
              <div class="uk-container-large">
                <span uk-icon="icon: cog; ratio: 1"></span>
                <p class="uk-text-normal uk-text-emphasis">Settings</p>
              </div>
              <div class="uk-container-large">
                <span uk-icon="icon: cog; ratio: 1"></span>
                <p class="uk-text-normal uk-text-emphasis">NewTask</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({})

export default class NavBarToDo extends Vue {
}
</script>

<style lang="scss" scoped>
.to-do-list--nav-bar{
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
  height: 760px;
  overflow: auto;
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
</style>