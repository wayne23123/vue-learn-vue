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
          <div @click="locate('')" class="leftNavText"></div>
          <div @click="locate('')" class="leftNavText"></div>
          <div @click="locate('')" class="leftNavText"></div>
          <div @click="locate('')" class="leftNavText"></div>
          <div @click="locate('')" class="leftNavText"></div>
          <div @click="locate('')" class="leftNavText"></div>
        </div>
      </div>
    </div>
    <!-- maintopMAINTOP -->
    <!-- 右邊文章內容 -->
    <div class="Main">
      <div class="mainContainer">
        <div class="mainLayout">
          <!-- 這裡 -->
          <br />
          <br />
          <div class="articleCardTitle cor36 fz34">Vue3</div>
          <div class="dis wra">
            <div>
              <p class="fz28 cor36">更容易維護</p>
              <br />
              <p class="fz28">1.組合式API</p>
              <br />
              <p class="fz28">2.更好的TypeScript支持</p>
              <br />
            </div>
            <div class="padL10">
              <p class="fz28 cor36">更快速</p>
              <br />
              <p class="fz28">1.重寫 diff 算法</p>
              <br />
              <p class="fz28">2.模板編譯優化</p>
              <br />
              <p class="fz28">3.更高效的組件初始化</p>
              <br />
            </div>
            <div class="padL10">
              <p class="fz28 cor36">更小體積</p>
              <br />
              <p class="fz28">1.良好的 TreeShaking</p>
              <br />
              <p class="fz28">2.按需引入</p>
              <br />
            </div>
            <div class="padL10">
              <p class="fz28 cor36">更優數據響應式</p>
              <br />
              <p class="fz28">1.Proxy</p>
            </div>
          </div>
          <br />
          <br />
          <div class="articleCardTitle cor36 fz34">reactive()</div>
          <p class="fz28">
            接收 物件 類型數據的 參數傳入 並返回一個 響應式對象
          </p>
          <br />
          <div class="fz30">
            <div>
              <span class="then">import </span> <span class="brackets">{</span>
              <span class="variable">reactive</span>
              <span class="brackets">}</span>
              <span class="variable">from</span> <span class="src">"vue"</span>
            </div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">state</span> <span class="then">=</span>
              <span class="variable">reactive</span>
              <span class="brackets">(</span>
              <span class="word">物件數據類型</span>
              <span class="brackets">)</span>
            </div>
          </div>
          <br />

          <br />
          <div class="articleCardTitle cor36 fz34">ref()</div>
          <p class="fz28">接收簡單類型 或 複雜類型 , 返回一個響應式對象</p>
          <br />
          <p class="fz28">在 script 中訪問要加 .value</p>
          <br />
          <p class="fz28">在 template .value 不用加</p>
          <br />
          <p class="fz28">
            它是在原有傳入數據的基礎上 , 外層包了一層物件 , 包成複雜類型 ,再用
            reactive 實現的 響應式
          </p>
          <br />
          <br />
          <div class="fz30">
            <div>
              <span class="then">import </span> <span class="brackets">{</span>
              <span class="variable">ref</span> <span class="brackets">}</span>
              <span class="variable">from</span> <span class="src">"vue"</span>
            </div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">count</span> <span class="then">=</span>
              <span class="variable">ref</span> <span class="brackets">(</span>
              <span class="number">0</span> <span class="brackets">)</span>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div class="articleCardTitle cor36 fz34">computed</div>
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <div class="fz30">
            <div>
              <span class="then">import </span> <span class="brackets">{</span>
              <span class="variable">computed</span>
              <span class="brackets">}</span>
              <span class="variable">from</span> <span class="src">"vue"</span>
            </div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">computedState</span>
              <span class="then">=</span>
              <span class="variable">computed</span>
              <span class="brackets">(()</span>
              <span class="function">=> </span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="then">return </span>
              <span class="word">基於響應式數據計算後的值</span>
              <div></div>
            </div>
            <div><span class="brackets">})</span></div>
          </div>
          <br />

          <br />
          <p class="fz28">1.計算屬性不該有副作用 (異步請求/修改DOM)</p>
          <br />
          <p class="fz28">
            2.避免直接修改計算屬性的值, 應該只讀的,特殊用get()set()
          </p>
          <br />
          <br />
          <br />
          <div class="articleCardTitle cor36 fz34">watch</div>
          <p class="fz28">
            偵聽 一個 或 多個 數據的 變化 , 變化時 執行回掉函數
          </p>
          <br />
          <p class="fz28">額外 2 參數 1.immediate(立即執行) 2.deep(深度監聽)</p>
          <div class="bgcVS">
            <p>偵聽單個數據</p>
            <p>執行 watch 函數 傳入 要偵聽的 響應式數據 和 回調函數</p>
            <div>
              <span class="then">import </span> <span class="brackets">{</span>
              <span class="variable">ref,watch</span>
              <span class="brackets">}</span>
              <span class="variable">from</span> <span class="src">"vue"</span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">count</span> <span class="then">=</span>
              <span class="variable">ref</span> <span class="brackets">(</span>
              <span class="number">0</span> <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">watch</span> <span class="brackets">(</span>
              <span class="word">count,</span> <span class="brackets">(</span>
              <span class="word">newValue,oldValue</span>
              <span class="brackets">)</span> <span class="function">=> </span>
              <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span>
              <span class="src">`count變化,就值</span>
              <span class="then">${oldValue}</span>
              <span class="src">,新值</span>
              <span class="then">${newValue}</span>
              <span class="src">`</span>

              <span class="brackets">)</span>

              <div></div>
            </div>
            <div><span class="brackets">})</span></div>
            <br />
            <br />
            <p>偵聽多個數據</p>
            <p>同時偵聽多個響應式 數據的變化 , 不管哪個變 , 都要</p>
            <div>
              <span class="then">import </span> <span class="brackets">{</span>
              <span class="variable">ref,watch</span>
              <span class="brackets">}</span>
              <span class="variable">from</span> <span class="src">"vue"</span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">count</span> <span class="then">=</span>
              <span class="variable">ref</span> <span class="brackets">(</span>
              <span class="number">0</span> <span class="brackets">)</span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">name</span> <span class="then">=</span>
              <span class="variable">ref</span> <span class="brackets">(</span>
              <span class="src">"wayne"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">watch</span> <span class="brackets">(</span>
            </div>
            <div class="padTwo VSL">
              <span class="brackets">[</span>
              <span class="word">count,name</span>
              <span class="brackets">],</span>
              <div>
                <span class="brackets">([</span>
                <span class="word">newCount,newName</span>
                <span class="brackets">],[</span>
                <span class="word">oldCount,oldName</span>
                <span class="brackets">])</span>
                <span class="function">=> </span>
                <span class="brackets">{</span>
              </div>
              <div></div>
              <div class="padTwo VSL">
                <span class="word">console</span>
                <span class="variable">.log</span>
                <span class="brackets">(</span>
                <span class="src">"數據變化了",</span>
                <span class="brackets">[</span>
                <span class="word">newCount,newName</span>
                <span class="brackets">],[</span>
                <span class="word">oldCount,oldName</span>
                <span class="brackets">])</span>
                <div></div>
              </div>
              <div><span class="brackets">}</span></div>
            </div>
            <div><span class="brackets">)</span></div>
          </div>
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <div class="articleCardTitle cor36 fz34"></div>
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <div class="articleCardTitle cor36 fz34"></div>
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <div class="articleCardTitle cor36 fz34"></div>
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
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
  right: 80px;
  top: 150px;
  /* width: 19vw; */
  /* height: 100%; */
  /* background-color: #040404; */
  background-color: rgba(0, 0, 0, 0.1);
  /* color: #36c1cb; */
  color: #a1b6cb4b;
  display: flex;
  justify-content: center;
  overflow: auto;
}

.leftNav:hover {
  background-color: rgba(0, 0, 0, 0.5);
  /* color: #36c1cb; */
  color: #a1b6cb;
  transition: all 0.2s ease;
}

.leftNavContainer {
  /* padding: 25px 5px 0 5px; */
  padding: 25px;
}

.leftNavText:hover {
  color: #36c1cb;
  background-color: #1c1c1c;
  cursor: pointer;
}

.Main {
  /* position: relative; */
  /* background-color: #c4c4c4; */
  /* color: #36c1cb; */
  color: #a1b6cb;
  /* width: 80vw; */
  /* left: 20vw; */
}

.mainContainer {
  padding: 0 50px;
}

.articleCardTitle {
  padding: 30px 5px 30px 5px;
}

.cor36 {
  color: #36c1cb;
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
</style>
