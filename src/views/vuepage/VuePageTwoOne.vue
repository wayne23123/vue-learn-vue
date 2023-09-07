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
          <div class="articleCardTitle cor36 fz34">1. 差值表達式</div>
          <p class="fz28">是 Vue 模板語法</p>
          <br />
          <p class="fz28">1.作用</p>
          <br />
          <p class="fz28">利用表達式 進行插值 , 渲染到頁面</p>
          <br />
          <p class="fz28">2.語法 ｛｛ 表達式 ｝｝</p>
          <br />
          <p class="fz28">｛｛ title ｝｝</p>
          <br />
          <p class="fz28">｛｛ name.toUpperCase ｝｝</p>
          <br />
          <p class="fz28">｛｛ age >= 18 ? "成年" : "未成年" ｝｝</p>
          <br />
          <p class="fz28">｛｛ obj.name ｝｝</p>
          <br />
          <p class="fz28">3.注意</p>
          <br />
          <p class="fz28">數據必須存在</p>
          <br />
          <p class="fz28">不支持語句 if for</p>
          <br />
          <p class="fz28">不能在標籤屬性中用</p>
          <br />
          <div class="articleCardTitle cor36 fz34">2. Vue 指令</div>

          <div class="bgcVS">
            <p>1. v-html</p>
            <p>動態設置 當前元素的 innerHTML</p>
            <br />
            <div>
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">id</span> <span class="then">=</span>
              <span class="src">"app"</span> <span class="then">></span>
            </div>
            <div class="padTwo VSL">
              <span class="then">＜</span> <span class="number">div </span>
              <span class="word">v-html</span> <span class="then">=</span>
              <span class="src">"msg"</span> <span class="then">>＜/ </span>
              <span class="number">div </span> <span class="then">></span>
              <div></div>
            </div>
            <div>
              <span class="then">＜/</span> <span class="number">div </span>
              <span class="then">></span>
            </div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">app</span> <span class="then">= new </span>
              <span class="word">Vue</span> <span class="brackets">({</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">el:</span> <span class="src">"#app"</span>
              <span class="then">,</span>
              <div>
                <span class="word">data:</span> <span class="brackets">{</span>
              </div>

              <div></div>
              <div class="pTwo VSL">
                <span class="word">msg:</span>
                <span class="src"
                  >`＜a href="http://www.google.com">GOOGLE＜/a>`</span
                >
              </div>
              <div><span class="brackets">}</span></div>
            </div>
            <div><span class="brackets">})</span></div>
            <br />
            <br />
            <br />
            <p>2. v-show</p>
            <p>控制元素顯示隱藏</p>
            <p>語法 v-show = "表達式" true 顯示 false 隱藏</p>
            <p>v-show 切換 css 的 display: none 來控制顯示隱藏</p>
            <p>適合頻繁切換 顯示隱藏 ex即時購物車</p>
            <br />
            <p>3. v-if</p>
            <p>控制元素顯示隱藏 (條件渲染)</p>
            <p>語法 v-if = "表達式" true 顯示 false 隱藏</p>
            <p>根據 條件判斷 控制元素的 創建 和 移除</p>
            <p>適合不頻繁切換 ex廣告X</p>
            <br />
            <br />
            <br />
            <p>4. v-on</p>
            <p>註冊事件 = 添加監聽 + 提供處理邏輯</p>
            <p>v-on: 事件名 = "內聯語句"</p>
            <p>v-on: 事件名 = "methods 中的函數名"</p>
            <div>
              <span class="then">＜</span> <span class="number">button </span>
              <span class="word">v-on:click</span> <span class="then">=</span>
              <span class="src">"count++"</span>
              <span class="then">>+＜/ </span>
              <span class="number">button</span>
              <span class="then">></span>
            </div>
            <div>
              <span class="then">＜</span> <span class="number">button </span>
              <span class="then">@</span>
              <span class="word">click</span> <span class="then">=</span>
              <span class="src">"count++"</span>
              <span class="then">>+＜/ </span>
              <span class="number">button</span>
              <span class="then">></span>
            </div>
            <br />
            <div>
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">id</span> <span class="then">=</span>
              <span class="src">"app"</span> <span class="then">></span>
            </div>
            <div class="padTwo VSL">
              <span class="then">＜</span> <span class="number">button</span>
              <span class="then">@</span> <span class="word">click</span>
              <span class="then">=</span> <span class="src">"fn"</span>
              <span class="then">></span>
              <span class="word">切換顯示隱藏</span>
              <span class="then">＜/</span> <span class="number">button</span>
              <span class="then">></span>
              <div>
                <span class="then">＜</span> <span class="number">div </span>
                <span class="word">v-show</span> <span class="then">=</span>
                <span class="src">"isShow"</span> <span class="then">></span>
                <span class="word">test</span> <span class="then">＜/</span>
                <span class="number">div </span> <span class="then">></span>
              </div>
              <div></div>
            </div>

            <div>
              <span class="then">＜/</span> <span class="number">div </span>
              <span class="then">></span>
            </div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">app</span> <span class="then">= new </span>
              <span class="word">Vue</span> <span class="brackets">({</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">el:</span> <span class="src">"#app"</span>
              <span class="then">,</span>
              <div>
                <span class="word">data:</span> <span class="brackets">{</span>
              </div>

              <div></div>
              <div class="pTwo VSL">
                <span class="word">isShow:</span>
                <span class="number">true</span>
              </div>
              <div><span class="brackets">},</span></div>

              <div>
                <span class="word">methods:</span>
                <span class="brackets">{</span>
              </div>
              <div class="padTwo VSL">
                <span class="word">fn</span> <span class="brackets">(){</span>
                <div></div>
                <div class="padTwo VSL">
                  <span class="comment"
                    >//讓提供的所有methods中的函數,this都指向當前實例app</span
                  >
                  <div>
                    <span class="comment">//console.log(app===this)//true</span>
                  </div>
                  <div>
                    <span class="comment">//app.isShow=!app.isShow</span>
                  </div>
                  <div>
                    <span class="then">this</span>
                    <span class="word">.isShow</span>
                    <span class="then">=</span> <span class="then">!this</span>
                    <span class="word">.isShow</span>
                  </div>

                  <div></div>
                </div>
                <div><span class="brackets">}</span></div>
              </div>
              <div><span class="brackets">}</span></div>
            </div>
            <div><span class="brackets">})</span></div>
            <br />
            <br />
            <p>v-on 調用傳參</p>
            <div>
              <span class="then">＜</span> <span class="number">button </span>
              <span class="then">@</span>
              <span class="word">click</span> <span class="then">=</span>
              <span class="src">"fn(參數1,參數2)"</span>
              <span class="then">>+＜/ </span>
              <span class="number">button</span>
              <span class="then">></span>
            </div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">app</span> <span class="then">= new </span>
              <span class="word">Vue</span> <span class="brackets">({</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">el:</span> <span class="src">"#app"</span>
              <span class="then">,</span>
              <div>
                <span class="word">methods:</span>
                <span class="brackets">{</span>
              </div>
              <div class="padTwo VSL">
                <span class="word">fn</span>
                <span class="brackets">(</span> <span class="word">a,b</span>
                <span class="brackets">){</span>

                <div><span class="brackets">}</span></div>
              </div>
              <div><span class="brackets">}</span></div>
            </div>
            <div><span class="brackets">})</span></div>
            <br />
            <br />
            <br />
            <p>5. v-bind</p>
            <p>動態 設置 html 的 標籤屬性 -> src url title</p>
            <p>語法 v-bind:屬姓名 = "表達式"</p>
            <p>簡寫 :屬姓名 = "表達式"</p>
            <br />
            <div>
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">id</span> <span class="then">=</span>
              <span class="src">"app"</span> <span class="then">></span>
            </div>
            <div class="padTwo VSL">
              <span class="then">＜</span> <span class="number">img </span>
              <span class="word">:src</span> <span class="then">=</span>
              <span class="src">"imgUrl"</span> <span class="then">></span>
              <div></div>
            </div>
            <div>
              <span class="then">＜/</span> <span class="number">div </span>
              <span class="then">></span>
            </div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">app</span> <span class="then">= new </span>
              <span class="word">Vue</span> <span class="brackets">({</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">el:</span> <span class="src">"#app"</span>
              <span class="then">,</span>
              <div>
                <span class="word">data:</span> <span class="brackets">{</span>
              </div>

              <div></div>
              <div class="pTwo VSL">
                <span class="word">imgUrl:</span>
                <span class="src">`"./imgs/test01.jpg",</span>
              </div>
              <div><span class="brackets">}</span></div>
            </div>
            <div><span class="brackets">})</span></div>
            <br />
            <br />
            <br />
            <p>6. v-for</p>
            <p>基於數據循環 , 多次渲染整個元素</p>
            <p>語法: v-for="(item,index) in 數組"</p>
            <p>item 每一項 index 下標</p>
            <br />
            <p>v-for 中的 key</p>
            <p>語法: key 屬性 = "唯一標識"</p>
            <p>
              作用: 給列表項 添加的 唯一標識 , 便於 Vue 進行 列表項的
              正確排序復用
            </p>
            <br />
            <div>
              <span class="then">＜</span> <span class="number">ul </span>
              <span class="then">></span>
            </div>
            <div class="padTwo VSL">
              <span class="then">＜</span> <span class="number">li</span>
              <span class="word">v-for</span> <span class="then">=</span>
              <span class="src">"(item,index) in list" </span>
              <span class="word">:key</span> <span class="then">=</span>
              <span class="src">"item.id"</span> <span class="then">></span>
              <div></div>
              <div class="padTwo VSL">
                <span class="then">＜</span> <span class="number">span</span>
                <span class="word">>　｛｛item.name｝｝</span>
                <span class="then">＜/</span> <span class="number">span</span>
                <span class="then">></span>
                <div></div>
              </div>
            </div>

            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
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
