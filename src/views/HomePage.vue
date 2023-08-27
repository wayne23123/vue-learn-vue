<script setup></script>

<template>
  <section>
    <div class="sectionHolder"></div>
    <div class="sectionHolder"></div>
    <div class="disCen title">
      <div class="titleCard">
        <div class="titleCardLeft">
          <h1>Wayne's Blog</h1>
          <h1>前端學習筆記</h1>
          <h3>記錄一些關於前端學習的筆記</h3>
          <br />
          <div class="btnContainer">
            <div>
              <router-link to="/js"
                ><div class="btnL btn-background-slideL">
                  快速開始
                </div></router-link
              >
            </div>
            <div>
              <a href="https://github.com/wayne23123"
                ><div class="btnR btn-background-slideR">View on GitHub</div>
              </a>
            </div>
          </div>
        </div>
        <div class="titleCardRight">
          <router-link to="/"
            ><div class="cardRightImgLayout svg">
              <img src="../assets/wss.svg" alt="" /></div
          ></router-link>
        </div>
      </div>
    </div>
    <div class="fourCard">
      <div class="fourCardContainer">
        <div class="cardContainer">
          <div class="card">
            <div class="cardLayout">
              <div class="cardTop disCen">
                <span class="cardTopBGC">💡</span>
              </div>
              <h3 class="corTitle disCen">About Me</h3>
              <p class="corText">
                Hi, I'm Wayne Lu, <br />
                a passionate frontend developer from Taiwan.
              </p>
            </div>
          </div>
        </div>
        <div class="cardContainer">
          <div class="card">
            <div class="cardLayout">
              <div class="cardTop disCen">
                <span class="cardTopBGC">💻</span>
              </div>
              <h3 class="corTitle disCen">Languages</h3>
              <p class="corText">JavaScript</p>
            </div>
          </div>
        </div>
        <div class="cardContainer">
          <div class="card">
            <div class="cardLayout">
              <div class="cardTop disCen">
                <span class="cardTopBGC">📚</span>
              </div>
              <h3 class="corTitle disCen">Frontend Skills</h3>
              <p class="corText">Vue</p>
            </div>
          </div>
        </div>
        <div class="cardContainer">
          <div class="card">
            <div class="cardLayout">
              <div class="cardTop disCen">
                <span class="cardTopBGC">🛠️</span>
              </div>
              <h3 class="corTitle disCen">Tools</h3>
              <p class="corText">Vite、Webpack</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
}
.sectionHolder {
  width: 100vw;
  max-width: 100%;
  height: 100px;
  background-color: #171717;
}

.title {
  background-color: #171717;
}

.titleCard {
  width: 76vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* background-color: #c4c4c4; */
}

.titleCardLeft {
  width: 500px;
  /* background-color: #000; */
}

.titleCardRight {
  width: 400px;
  margin: 50px;
  /* background-color: #565656; */
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 34px;
}

h3 {
  font-size: 30px;
}

p {
  font-size: 26px;
}

.cardRightImgLayout {
  /* background-color: #c4c4c4; */
  width: 300px;
  height: 300px;
}

img {
  width: 100%;
  height: 100%;
}

.btnContainer {
  /* background-color: #c4c4c4; */
  display: flex;
  justify-content: space-between;
}

.fourCard {
  width: 100vw;
  max-width: 100%;
  /* background-color: #c4c4c4; */
  background-color: #171717;
  display: flex;
  justify-content: center;
}

.svg:hover {
  /* svg 滑進時顏色 */
  transition: all 0.4s ease;
  filter: invert(30%) sepia(100%) saturate(500%) hue-rotate(100deg);
}

.fourCardContainer {
  width: 90vw;
  /* background-color: #565656; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 0 100px 0;
}

.cardContainer {
  padding: 10px;
}

.card {
  width: 300px;
  padding: 30px 30px 50px 30px;
  background-color: #252529;
  border-radius: 15px;
  overflow: hidden;
}

.cardLayout {
  /* background-color: #c4c4c4; */
  padding: 20px 15px 0 15px;
}

.cardTop {
  font-size: 26px;
}

.cardTopBGC {
  background-color: #1e1e20;
  padding: 5px;
  border-radius: 15px;
}

.corTitle {
  color: #e0e0d8;
  padding: 10px 0;
}

.corText {
  color: #9c9c9d;
}

/* 左邊按鈕特效----------------------------------------------- */
.btnL {
  /* 按鈕設定 */
  background-color: #10b981;
  color: #c4c4c4;
  border-radius: 20px;
  overflow: hidden;
  padding: 15px;
  font-size: 26px;

  border: none;
  outline: none;
  position: relative;
  cursor: pointer;
}

.btnL.btn-background-slideL::before {
  /* 滑進的背景色 */
  background-color: #059669;

  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;

  transition: transform 300ms ease-in-out;
  transform: scaleX(0);
  transform-origin: left;
}

.btnL.btn-background-slideL:hover,
.btnL.btn-background-slideL:focus {
  /* 滑進的顏色 */
  color: #36c1cb;
}

.btnL.btn-background-slideL:hover::before,
.btnL.btn-background-slideL:focus::before {
  transform: scaleX(1);
}

.btnL.btn-background-slideL {
  transition: color 300ms ease-in-out;
  z-index: 1;
}

/* 右邊按鈕特效----------------------------------------------- */
.btnR {
  /* 按鈕設定 */
  background-color: #313136;
  color: #c4c4c4;
  border-radius: 20px;
  overflow: hidden;
  padding: 15px;

  font-size: 26px;

  border: none;
  outline: none;
  position: relative;
  cursor: pointer;
}

.btnR.btn-background-slideR::before {
  /* 滑進的背景色 */
  background-color: #2c2c30;

  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;

  transition: transform 300ms ease-in-out;
  transform: scaleX(0);
  transform-origin: left;
}

.btnR.btn-background-slideR:hover,
.btnR.btn-background-slideR:focus {
  /* 滑進的顏色 */
  color: #36c1cb;
}

.btnR.btn-background-slideR:hover::before,
.btnR.btn-background-slideR:focus::before {
  transform: scaleX(1);
}

.btnR.btn-background-slideR {
  transition: color 300ms ease-in-out;
  z-index: 1;
}
</style>
