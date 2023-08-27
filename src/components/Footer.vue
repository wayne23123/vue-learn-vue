<script setup>
import { ref } from "vue";

// const time = ref("");
// setTimeout(function () {
//   time.value = new Date().toLocaleString();
// }, 1000);

// const time = ref("");
// setInterval(function () {
//   time.value = new Date().toLocaleString();
// }, 1000);

// 每1分鐘更新
const time = ref("");
setInterval(function () {
  // time.value = new Date(year);new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
  let date = new Date();
  time.value =
    `${date.getMonth() + 1} / ` +
    `${date.getDate()} _ ` +
    `${date.getHours()} : ` +
    `${date.getMinutes()}`;
}, 2000);

// 第一次讓畫面渲染
const getTime = () => {
  // time.value = new Date(year);new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
  let date = new Date();
  time.value =
    `${date.getMonth() + 1} / ` +
    `${date.getDate()} _  ` +
    `${date.getHours()} : ` +
    `${date.getMinutes()}`;
};
getTime();

// let test;

// fetch("https://randomuser.me/api/?results=1")
//   .then((response) => response.json())
//   .then((data) => {
//     (test = data.results[0]), console.log(test);
//   });

// const weatherRef = ref("");
// fetch("http://hmajax.itheima.net/api/weather?city=710100")
//   .then((response) => response.json())
//   .then((result) => {
//     weatherRef.value = result.data;
//   })
//   .catch((error) => console.log("error", error));
</script>

<template>
  <div class="showTimeDiv">
    <div>{{ time }}</div>

    <!-- <div>
      {{ weatherRef.temperature }}℃ {{ weatherRef.todayWeather.humidity }}%
    </div>
    <div>今: {{ weatherRef.todayWeather.weather }}</div>
    <div>明: {{ weatherRef.dayForecast[1].weather }}</div> -->
  </div>
  <footer>
    Copyright © 2023 Wayne Lu
    <!-- {{ weatherRef }} -->
  </footer>
</template>

<style scoped>
.showTimeDiv {
  position: fixed;
  left: 0;
  bottom: 20px;
  background-color: #00000050;
  color: #565656;
  font-size: 20px;
}

footer {
  background-color: #000;
  color: gray;
  padding: 50px;
  display: flex;
  justify-content: center;
}
</style>
