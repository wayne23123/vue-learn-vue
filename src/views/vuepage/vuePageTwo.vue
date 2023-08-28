<script setup>
import { ref } from "vue";

const toTopRef = ref(false);
window.addEventListener("scroll", function () {
  // 當 scrollY大於0 則 showRef 為 true
  toTopRef.value = window.scrollY > 0;
});
// 當點擊返回頂部時，滾動到頁面頂部
function toTopFunction() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
function toBotFunction() {
  window.scrollTo({
    top: 999999,
    left: 0,
    behavior: "smooth",
  });
}
function locate(idPound) {
  window.scrollTo({
    top: document.getElementById(`${idPound}`).offsetTop,
    behavior: "smooth",
  });
}
</script>

<template>
  <section>
    <!-- <div class="sectionHolderNav"></div> -->
    <!-- 左邊導航條 -->
    <div class="leftNav">
      <div class="leftNavContainer">
        <div class="leftNavLayout">
          <br />
          <div class="leftNavText">1</div>
          <div class="leftNavText">1</div>
          <div class="leftNavText">1</div>
          <div class="leftNavText"></div>
          <div class="leftNavText"></div>
          <div class="leftNavText"></div>
          <div class="leftNavText"></div>
        </div>
      </div>
    </div>
    <!-- maintopMAINTOP -->
    <!-- 右邊文章內容 -->
    <div class="Main">
      <div class="mainContainer">
        <div class="mainLayout">
          <div class="articleCardTitle cor36 fz32">[ vue ] ≫</div>
          <p class="fz32">123</p>
          <br />
          <br />

          <div class="articleCardTitle cor36 fz30">[ vue ] ≫</div>
          <p class="fz28"></p>
          <br />
          <br />

          <div class="articleCardTitle cor36 fz30">[ vue ] ≫</div>
          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <div class="articleCardTitle cor36 fz30">[ vue ] ≫</div>
          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />
          <div class="articleCardTitle cor36 fz30">[ vue ] ≫</div>
          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />
          <div class="articleCardTitle cor36 fz30">[ vue ] ≫</div>
          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />
          <div class="articleCardTitle cor36 fz30">[ vue ] ≫</div>
          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />
          <div class="articleCardTitle cor36 fz30">[ vue ] ≫</div>
          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />
          <div class="articleCardTitle cor36 fz30">[ vue ] ≫</div>
          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />
          <div class="articleCardTitle cor36 fz30">[ vue ] ≫</div>
          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />
          <div class="articleCardTitle cor36 fz30">[ vue ] ≫</div>
          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />
          <div class="articleCardTitle cor36 fz30">[ vue ] ≫</div>
          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />
          <div class="articleCardTitle cor36 fz30">[ vue ] ≫</div>
          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />
          <div class="articleCardTitle cor36 fz30">[ vue ] ≫</div>
          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />
          <div class="articleCardTitle cor36 fz30">[ vue ] ≫</div>
          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />
          <div class="articleCardTitle cor36 fz30">[ vue ] ≫</div>
          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />
          <div class="articleCardTitle cor36 fz30">[ vue ] ≫</div>
          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />
          <div class="articleCardTitle cor36 fz30">[ vue ] ≫</div>
          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />
          <div class="articleCardTitle cor36 fz30">[ vue ] ≫</div>
          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />
          <div class="articleCardTitle cor36 fz30">[ vue ] ≫</div>
          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />

          <p class="fz28"></p>
          <br />
          <br />
        </div>
      </div>
    </div>
  </section>
  <div>
    <transition name="fade" tag="div" v-show="toTopRef">
      <div @click="toTopFunction" class="toTop">
        <div class="toTopButton">
          <div class="disCen">___</div>
          <div class="disCen">▲</div>
        </div>
      </div>
    </transition>
    <transition name="fade" tag="div" v-show="toTopRef">
      <div @click="toBotFunction" class="toBot">
        <div class="toBotButton">
          <div class="disCen">▼</div>
          <div class="disCen">￣</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.sectionHolderNav {
  width: 100vw;
  max-width: 100%;
  height: 70px;
  background-color: #171717;
}

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
  /* font-size: 30px; */
}

.mainContainer {
  padding: 0 50px;
}

.articleCardTitle {
  /* font-size: 1.75em; */
  padding: 30px 5px 30px 5px;
}

.cor36 {
  color: #36c1cb;
  /* font-size: 1.25em; */
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

.toTopButton {
  position: relative;
  font-size: 20px;
  bottom: 7px;
  padding-left: 0;
  color: #999;
  pointer-events: none;
}

.toTop:hover {
  background-color: #6f020250;
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
