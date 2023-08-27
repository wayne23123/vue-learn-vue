<script setup></script>

<template>
  <div>
    <ul>
      <li>
        <!-- <RouterLink to="/js">主文章</RouterLink> -->
        <RouterLink to="/vue/note">總結</RouterLink>
      </li>
      <!-- <li>
        <RouterLink to="/vue/jspractice">練習題</RouterLink>
      </li> -->
      <li>
        <!-- <RouterLink to="/js/jsthree">上課筆記</RouterLink> -->
        <RouterLink to="/vue">上課筆記</RouterLink>
      </li>
    </ul>
  </div>
  <RouterView />
</template>

<style scoped>
ul {
  position: fixed;
  top: 70px;
  z-index: 10;
  display: flex;
  padding: 0 0 0 15px;
  /* background-color: #c4c4c4; */
  background-color: #000;
}

li {
  padding: 0 15px;
}

a {
  font-size: 20px;
  color: #a1b6cb;
}

a.router-link-exact-active {
  color: #36c1cb;
}

/* a.router-link-active {
  color: #36c1cb;
} */

section {
  width: 100vw;
  max-width: 100%;
  background-color: #171717;
  color: #000;
  overflow: hidden;
}

.leftNav {
  font-size: 20px;
  position: fixed;
  width: 19vw;
  height: 100%;
  background-color: #040404;
  /* color: #36c1cb; */
  color: #a1b6cb;
  display: flex;
  justify-content: center;
  overflow: auto;
}

.leftNavContainer {
  padding: 25px 5px 0 5px;
}

.leftNavText:hover {
  color: #36c1cb;
  background-color: #1c1c1c;
  cursor: pointer;
}

.Main {
  position: relative;
  /* background-color: #c4c4c4; */
  /* color: #36c1cb; */
  color: #a1b6cb;
  width: 80vw;
  left: 20vw;
  font-size: 30px;
}

.mainContainer {
  padding: 0 50px;
}

p {
  font-size: 30px;
}

.articleCardTitle {
  font-size: 1.75rem;
  padding: 30px 5px 30px 5px;
}

.cor36 {
  color: #36c1cb;
  font-size: 1.25em;
}

/* top按鈕的css -------------------------------------------------------*/
.toTop {
  bottom: 170px;
  right: 50px;
  position: fixed;
  z-index: 200;
  background-color: #7f010190;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  cursor: pointer;
}
.toTop:hover {
  background-color: #6f020250;
}
.toTopButton {
  position: relative;
  font-size: 20px;
  bottom: 7px;
  padding-left: 0;
  color: #999;
  pointer-events: none;
}
.toBot {
  bottom: 100px;
  right: 50px;
  position: fixed;
  z-index: 200;
  background-color: #7f010190;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  cursor: pointer;
}
.toBot:hover {
  background-color: #6f020250;
}

.toBotButton {
  position: relative;
  font-size: 20px;
  bottom: 0;
  padding-left: 0;
  color: #999;
  pointer-events: none;
}
</style>
