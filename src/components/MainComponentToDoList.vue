<template>
  <div class="main--to-do">
    <div class="uk-card uk-card-body to-do">
      <p>
        TO DO
      </p>
      <div>
        <div class="item--to-do">
          <div class="uk-card uk-card-default uk-card-hover uk-card-body">
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="item--to-do">
          <div class="uk-card uk-card-default uk-card-hover uk-card-body">
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-card uk-card-body done">
      <p class="uk-text-normal">
        DONE
      </p>
      <div>
        <div class="item--done">
          <div class="uk-card uk-card-default uk-card-hover uk-card-body">
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="item--done">
          <div class="uk-card uk-card-default uk-card-hover uk-card-body">
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="item--done">
          <div class="uk-card uk-card-default uk-card-hover uk-card-body">
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="item--done">
          <div class="uk-card uk-card-default uk-card-hover uk-card-body">
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="item--done">
          <div class="uk-card uk-card-default uk-card-hover uk-card-body">
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="item--done">
          <div class="uk-card uk-card-default uk-card-hover uk-card-body">
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Component, Vue} from 'vue-property-decorator';

@Component

export default class MainComponentToDoList extends Vue {

}
</script>

<style scoped>
.item--to-do:not(:first-child),.item--done:not(:first-child) {
  margin-top: 24px;
}

.item--done > div,.item--to-do > div {
  border-radius: 8px;
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
  max-height: 760px;
  overflow: auto;
}

.to-do > div::-webkit-scrollbar, .done > div::-webkit-scrollbar  {
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
</style>