<script setup>
import { ref } from "vue";

const navFixedRef = ref(true);
window.addEventListener("scroll", function () {
  // 當 scrollY大於290 則 carouselShopShowRef 為 true
  navFixedRef.value = window.scrollY;
});
</script>

<template>
  <header :class="{ show: navFixedRef > 0 }">
    <div class="">
      <router-link to="/"
        ><div class="svg imgLayout">
          <img src="../assets/title.svg" alt="" /></div
      ></router-link>
    </div>
    <input type="checkbox" id="nav_check" hidden />
    <nav>
      <ul>
        <li>
          <router-link to="/about"><div class="liPad">關於</div></router-link>
        </li>

        <li>
          <router-link to="/vue"><div class="liPad">Vue</div></router-link>
        </li>
        <!-- <li>
          <router-link to="/about"><div class="liPad">Vue</div></router-link>
        </li> -->
      </ul>
    </nav>
    <label for="nav_check" class="hamburger">
      <div></div>
      <div></div>
      <div></div>
    </label>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  opacity: 0;
  transform: translateX(-100%);

  background: #000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  z-index: 101;
}

.show {
  opacity: 1;
  transform: none;
  transition: all 0.3s ease;
}

nav {
  color: #c4c4c4;
}

ul {
  display: flex;
}

li {
  font-size: 30px;
}

.liPad {
  /* padding: 0 25px; */
  padding: 0 5px;
}

.borR {
  border-right: 2px solid #c4c4c4;
}

a {
  display: inline-block;
  /* 沒互動顏色 */
  color: #c4c4c4;
  padding: 5px 0;
  margin: 0 1;
  border: 3px solid transparent;
}

a:hover {
  /* 滑進時顏色 */
  color: #3ddbe7;
}

.svg:hover {
  /* svg 滑進時顏色 */
  transition: all 0.4s ease;
  filter: invert(30%) sepia(100%) saturate(500%) hue-rotate(100deg);
}

/* 到頁面 active 顏色 */
/* a.router-link-exact-active {
  color: #36c1cb;
} */

a.router-link-active {
  /* 到頁面 active 顏色 */
  color: #36c1cb;
}

.hamburger {
  cursor: pointer;
  display: none;
}

.hamburger div {
  width: 30px;
  height: 3px;
  margin: 5px 0;
  background-color: #c4c4c4;
}
/* @media only screen and (max-width: 900px) {
  header {
    padding: 0 30px;
  }
} */
@media only screen and (max-width: 890px) {
  .hamburger {
    display: block;
  }
  nav {
    position: absolute;
    width: 100%;
    left: -100%;
    top: 70px;
    width: 100%;
    background-color: #565656;
    padding: 30px;
    transition: 0.3s;

    display: flex;
    justify-content: center;
  }
  #nav_check:checked ~ nav {
    left: 0;
  }
  ul {
    display: block;
  }
  a {
    margin: 5px 0;
  }
}
</style>
