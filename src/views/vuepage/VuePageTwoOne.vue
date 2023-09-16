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
            <p class="fz32 cor36">v-bind 對樣式控制的增強 - 操作 class</p>
            <br />
            <p class="fz28">語法 :class="物件/數組"</p>
            <br />
            <div class="fz30">
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">class </span> <span class="then">=</span>
              <span class="src">"box"</span>
              <span class="function">:class</span>
              <span class="then">=</span>
              <span class="src">"{類名1:布林值,類名2:布林值}"</span>
              <span class="then">>＜/ </span> <span class="number">div </span>
              <span class="then">></span>
            </div>
            <br />
            <p class="fz28">場景: 一個類名 , 來回切換</p>
            <br />
            <div class="fz30">
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">class </span> <span class="then">=</span>
              <span class="src">"box"</span>
              <span class="function">:class</span>
              <span class="then">=</span>
              <span class="src">"[類名1,類名2,類名3]"</span>
              <span class="then">>＜/ </span> <span class="number">div </span>
              <span class="then">></span>
            </div>
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
              <span class="function">v-for</span> <span class="then">=</span>
              <span class="src">"(item,index) in list" </span>
              <span class="function">:key</span> <span class="then">=</span>
              <span class="src">"item.id"</span> <span class="then">></span>
              <div></div>
              <div class="padTwo VSL">
                <span class="then">＜</span> <span class="number">span</span>
                <span class="then">></span>
                <span class="word">｛｛item.name｝｝</span>
                <span class="then">＜/</span> <span class="number">span</span>
                <span class="then">></span>
                <div>
                  <span class="then">＜</span>
                  <span class="number">button </span>
                  <span class="then">@click = </span>
                  <span class="src">"del(item.id)"</span>
                  <span class="then">></span> <span class="word">刪除</span>
                  <span class="then">＜/</span>
                  <span class="number">button </span>
                  <span class="then">></span>
                </div>
                <div></div>
              </div>
              <div>
                <span class="then">＜/</span> <span class="number">li </span>
                <span class="then">></span>
              </div>
            </div>
            <div>
              <span class="then">＜/</span> <span class="number">ul </span>
              <span class="then">></span>
            </div>
            <br />
            <br />
            <p>key 作用: 給元素 添加的 唯一標識 , vue 能正確排序復用</p>
            <br />
            <p>有加 key 列表正確刪除 (ex第一項) , 下面三項往上</p>
            <p>沒加 key , v-for 會嘗試 原地修改元素 (就地復用)</p>
            <p>找前三個 , 把文字內容 替換到 前三個 li 身上 (ex背景顏色仍在)</p>
            <br />
            <br />
            <br />
            <p>7. v-model</p>
            <p>
              給 表單元素 使用 , 雙向數據綁定 -> 可以快速 獲取 或 設置
              表單元素內容
            </p>
            <p>視圖變化 -> 數據自動更新</p>
            <p>語法: v-model="變量"</p>
            <br />
            <br />
            <p class="fz32 cor36">v-model 用於其他表單</p>
            <br />
            <p class="fz28">
              常見表單 都可用 v-model -> 快速 獲取 & 設置 表單元素的 值
            </p>
            <br />
            <p class="fz28">輸入框 input: text -> value</p>
            <br />
            <p class="fz28">文本域 textarea -> value</p>
            <br />
            <p class="fz28">複選框 input: checkbox -> checked</p>
            <br />
            <p class="fz28">單選框 input: radio -> checked</p>
            <br />
            <p class="fz28">下拉菜單 select -> value</p>
            <br />
            <br />
          </div>
          <p class="fz28">指令修飾符</p>
          <br />
          <p class="fz28">1.按鍵</p>
          <br />
          <p class="fz28">@keyup.enter -> 鍵盤按 enter 監聽</p>
          <br />
          <p class="fz28">2.v-model</p>
          <br />
          <p class="fz28">v-model.trim -> 去除首尾空格</p>
          <br />
          <p class="fz28">v-model.number -> 轉數字</p>
          <br />
          <p class="fz28">3.事件</p>
          <br />
          <p class="fz28">@事件名.stop -> 阻止冒泡</p>
          <br />
          <p class="fz28">@事件名.prevent -> 阻止默認行為</p>
          <br />
          <br />
          <br />
          <p class="fz32 cor36">計算屬性 computed</p>
          <br />
          <p class="fz28">
            基於現有數據 , 計算出來的新屬性 , 依賴的數據變化 , 自動重新計算
          </p>
          <br />

          <p class="fz28">
            語法: 聲明在 computed 中 , 一個計算屬性對應一個函數
          </p>
          <br />
          <p class="fz28">使用 ｛｛ 計算屬性名 ｝｝</p>
          <br />
          <div class="fz30">
            <div>
              <span class="word">computed:</span>
              <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <div>
                <span class="comment"
                  >//計算屬性:有緩存的,一旦計算出來結果,就會立刻緩存</span
                >
              </div>
              <div>
                <span class="comment"
                  >//下一次讀取->直接讀緩存就行了->性能高</span
                >
              </div>
              <span class="word">計算屬性名</span>
              <span class="brackets">(){</span>
              <div></div>
              <div class="padTwo VSL">
                <span class="comment">//基於現有數據,編寫求值邏輯</span>
                <div>
                  <span class="then">return </span>
                  <span class="word">結果</span>
                </div>
                <div></div>
              </div>
              <div><span class="brackets">}</span></div>
            </div>
            <div><span class="brackets">}</span></div>
          </div>
          <br />
          <br />
          <p class="fz28">計算屬性完整寫法</p>
          <br />
          <div class="fz30">
            <div>
              <span class="word">computed:</span>
              <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">計算屬性名</span>
              <span class="brackets">{</span>
              <div class="padTwo VSL">
                <div>
                  <span class="variable">get</span>
                  <span class="brackets">(){</span>
                </div>

                <div class="padTwo VSL">
                  <div>
                    <span class="word">一段代碼邏輯</span>
                    <span class="brackets">(</span>
                    <span class="word">計算邏輯</span>
                    <span class="brackets">)</span>
                  </div>
                  <div>
                    <span class="then">return </span>
                    <span class="word">結果</span>
                  </div>
                  <div></div>
                </div>
                <div><span class="brackets">},</span></div>
                <div>
                  <span class="variable">set</span>
                  <span class="brackets">(</span>
                  <span class="word">修改的值</span>
                  <span class="brackets">){</span>
                </div>
                <div class="padTwo VSL">
                  <span class="word">一段代碼邏輯</span>
                  <span class="brackets">(</span>
                  <span class="word">修改邏輯</span>
                  <span class="brackets">)</span>
                  <div></div>
                </div>
                <div><span class="brackets">}</span></div>
              </div>

              <div><span class="brackets">}</span></div>
            </div>
            <div><span class="brackets">}</span></div>
          </div>
          <br />
          <br />
          <br />
          <p class="fz32 cor36">watch 偵聽器</p>
          <br />
          <p class="fz28">監視數據變化 , 執行一些 業務邏輯 或 異步操作</p>
          <br />
          <p class="fz28">語法:</p>
          <br />
          <p class="fz28">簡單寫法 -> 簡單數據類型 , 直接監視</p>
          <br />

          <br />
          <br />

          <br />
          <br />

          <br />
          <br />

          <br />
          <p class="fz36 cor36"># 仍在施工中... 未完待續</p>
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
