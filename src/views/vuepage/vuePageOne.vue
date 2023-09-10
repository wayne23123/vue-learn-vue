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
          <div class="articleCardTitle cor36 fz34">
            [ vue ] ≫ 對 vue 的理解?
          </div>
          <p class="fz28 cor36">1.</p>
          <p class="fz28">
            Vue 是一個 漸進式的 JS 框架 . . .
            (Vue是一個核心庫,可以添加VueRouter,添加Pinia讓項目壯大)
          </p>
          <br />
          <br />

          <p class="fz28 cor36">2.</p>
          <p class="fz28">他是以 核心庫 加插件的 形式</p>
          <br />
          <br />

          <p class="fz28 cor36">3.</p>
          <p class="fz28">動態創建用戶介面</p>
          <br />
          <br />

          <p class="fz28 cor36">特色</p>

          <p class="fz28 cor36">1.</p>
          <p class="fz28">他是 M V V M 模式</p>
          <br />
          <br />

          <p class="fz28 cor36">2.</p>
          <p class="fz28">他的代碼簡潔 體積小 , 能提高運行效率</p>
          <br />
          <br />

          <p class="fz28 cor36">3.</p>
          <p class="fz28">他適合 PC 端 和 移動端上 的開發</p>
          <br />
          <br />
          <p class="fz28 cor36">4.</p>
          <p class="fz28">他本身只關注 ui</p>
          <br />
          <br />
          <p class="fz28 cor36">5.</p>
          <p class="fz28">他可以輕鬆的引入 vue 插件 及 其他 第三方庫進行開發</p>
          <br />
          <br />
          <p class="fz28">優</p>
          <p class="fz28">
            ① 易用性：Vue
            提供資料響應式、基於配置的元件系統以及眾多指令等，這些讓開發者只需關心核心業務即可。
          </p>
          <br />
          <br />
          <p class="fz28">
            ② 靈活性：如果我們的應用規模較小，僅使用 Vue
            的核心庫已足夠；隨著應用的規模不斷擴大，可以根據需求引入 Vue
            Router、Vuex、Vue CLI 等其他工具。
          </p>
          <br />
          <br />
          <p class="fz28">
            ③ 高效性：Vue 操作的是虛擬 DOM，採用差異算法 (diff) 更新
            DOM，比傳統的 DOM 操作更加高效。
          </p>
          <br />
          <br />
          <p class="fz28">缺</p>
          <p class="fz28">
            ② 不利於 SEO。 Vue 也有相關的伺服器端渲染 (SSR) 方式，並有針對 Vue
            的伺服器端渲染庫，如 Nuxt.js，以提升 SEO 效果。
          </p>
          <br />
          <br />

          <div id="onenote0" class="articleCardTitle cor36 fz30">
            [ vue ] ≫ 什麼是 MVVM ?
          </div>

          <p class="fz28">MVVM . Model View ViewModel</p>
          <br />
          <p class="fz28 cor36">Model . 數據層</p>
          <p class="fz28">負責資料存取 -> 與資料庫溝通、請求網路資源</p>
          <br />
          <p class="fz28 cor36">View . 視圖層</p>
          <p class="fz28">負責顯示資料(UI)</p>
          <br />
          <p class="fz28 cor36">
            ViewModel . 他是連接 Model 和 View 之間的橋梁
          </p>
          <p class="fz28">
            負責處理業務邏輯，並處理接收從 View 傳來的使用者操作事件、使用 Model
            提供的方法來處理資料。
          </p>
          <br />
          <br />

          <p class="fz28">當 數據 發生 改變更新 時</p>
          <br />
          <p class="fz28">
            他會通過 ViewModel 通知 View 來進行 視圖層 的 展示改變
          </p>
          <br />
          <br />
          <p class="fz28">同時 當 視圖層 發生 改變 時</p>
          <br />
          <p class="fz28">他會通過 ViewModel 通知 Model層 改變 數據</p>
          <br />

          <br />
          <br />

          <div id="onenote0" class="articleCardTitle cor36 fz30">
            [ vue ] ≫ MVVM 和 MVC 和 MVP 區別?
          </div>
          <p class="fz28">MVC 是 model vue controller</p>
          <br />
          <p class="fz28">
            View 與使用者互動，當 View 接收到使用者的回饋 要拿資料時 , 呼叫
            Controller , 請 Controller 操作 Model 拿取想要的資料 , Model
            拿到資料後直接把資料丟回給 View , 把資料顯示給使用者
          </p>
          <br />
          <br />
          <p class="fz28 cor36">Model . 數據層</p>
          <p class="fz28">負責資料存取 -> 與資料庫溝通、請求網路資源</p>
          <br />
          <p class="fz28 cor36">View . 視圖層</p>
          <p class="fz28">負責顯示資料(UI)</p>
          <br />
          <p class="fz28 cor36">Controller . 控制器</p>
          <p class="fz28">
            負責處理訊息、控制應用程式流程、處理事件並作出回應。
          </p>
          <br />
          <br />
          <p class="fz28">MVP 是 model vue presenter</p>
          <br />
          <p class="fz28">
            和 MVC 差別 , Model 層拿到數據後 , 並不直接傳給 View
            更新，而是交還給 Presenter , Presenter 再把數據交給 View ,
            並更新畫面。
          </p>
          <br />
          <br />
          <p class="fz28 cor36">Model . 數據層</p>
          <p class="fz28">負責資料存取 -> 與資料庫溝通、請求網路資源</p>
          <br />
          <p class="fz28 cor36">View . 視圖層</p>
          <p class="fz28">負責顯示資料(UI)，並將使用者的操作傳給Presenter。</p>
          <br />
          <p class="fz28 cor36">Presenter</p>
          <p class="fz28">負責處理業務邏輯，並負責View與Model的溝通。</p>
          <br />
          <br />
          <br />
          <p class="fz28">
            MVVM 是 Model-View-ViewModel, 分別對應 數據, 視圖, VM
          </p>
          <br />
          <p class="fz28">
            MVVM 透過觀察者模式將 View 和 Model 連接在一起 , 一旦 Model
            的數據發生變化 , 觀察者 View 就能夠感應到這個更動 , 並把數據更新到
            UI 畫面上 , ViewModel 甚至不需要有 View 的引用，更方便單元測試。
          </p>
          <br />
          <br />
          <p class="fz28">第一個相同點是都有 M 和 V,</p>
          <br />
          <br />
          <p class="fz28">MVC 中的 C 會比較手動一點,</p>
          <br />
          <br />
          <p class="fz28">要自己去監聽視圖的變化,</p>
          <br />
          <br />
          <p class="fz28">然後去發送請求,</p>
          <br />
          <br />
          <p class="fz28">然後去更新視圖或model,</p>
          <br />
          <br />
          <p class="fz32">VM 是自動化一點,</p>
          <br />
          <br />
          <p class="fz28">能自動對 model 和 視圖 進行 雙向綁定</p>
          <br />
          <br />

          <div id="" class="articleCardTitle cor36 fz30">
            [ vue ] ≫ 對響應式數據的理解?
          </div>

          <br />
          <br />
          <br />
          <p class="fz28 cor36">1.</p>
          <p class="fz28">
            響應式 是 當 數據改變後 Vue 會通知 使用該數據的視圖 去更新 . . .
            (視圖渲染數據>數據改變>視圖響應更新)
          </p>
          <br />
          <!-- <p class="fz28">
            ( 響應式 是 能使 數據變化 可 被檢測 並對這種變化 做出響應 的機制 )
          </p>
          <br />

          <p class="fz28">( 響應式 是 當用戶 取值 或 修改值 我能知道 )</p>
          <br /> -->
          <p class="fz28 cor36">2.</p>

          <!-- <p class="fz28">
            Vue2 通過 Object.defineProperty 來更新定義 data 中 的 所有屬性
          </p>
          <br />

          <p class="fz28">
            透過 Object.defineProperty 可使 數據的 獲取 和 設置 get 和 set
          </p>
          <br />
          <p class="fz28">增加一個 攔截功能</p>
          <br />
          <p class="fz28">攔截 屬性的 獲取</p>
          <br />
          <p class="fz28">然後 進行 一個 依賴 的 收集</p>
          <br />
          <p class="fz28">攔截 屬性 的 更新操作</p>
          <br />
          <p class="fz28">進行一個通知</p>
          <br />
          <br />
          <br />

          <br /> -->

          <p class="fz28 comment">vue2 : 把數據變 get & set</p>

          <br />
          <p class="fz28 cor36">#</p>
          <p class="fz28">vue 數據響應式 是透過 數據劫持 實現的,</p>

          <br />

          <p class="fz28">透過 definedProperty 遍歷物件每個屬性 ,</p>
          <br />
          <p class="fz28">把 每個屬性 變 getter 跟 setter,</p>
          <br />

          <p class="fz28">對一個數據的屬性進行監聽,</p>
          <br />

          <p class="fz28">數據變化時 透過 setter 改變它的數據,</p>
          <br />

          <p class="fz28">頁面上可以透過 getter 訪問 它的屬性的值</p>
          <br />
          <br />
          <p class="fz28 cor36">#</p>

          <p class="fz28">
            當新增方法.屬性它是監聽不了的, 需要通過 $set . $delete
          </p>
          <br />
          <br /><br />
          <p class="fz28 cor36">#</p>

          <p class="fz28">
            數組考慮性能 沒有用 defineProperty 對數組每一項進行攔截
          </p>

          <br />

          <p class="fz28">
            而是 重寫變異方法 (pop . push . shift . unshift . splice . sort .
            reverse)
          </p>
          <br />
          <p class="fz28">
            來對 數組 進行劫持 , 劫持過程中 可以通知視圖 去更新
          </p>

          <br />
          <p class="fz28">數組中物件 也會進行 遞歸 劫持</p>

          <br />
          <p class="fz28">( 數組 索引 長度 無法監控 )</p>

          <br />

          <br />
          <br />
          <p class="fz28 cor36">#</p>

          <p class="fz28">Vue3 用 proxy 代理</p>
          <br />
          <br />

          <p class="fz28 cor36"># Vue2 如何觀測數組變化?</p>
          <br />
          <br />

          <p class="fz28 comment">
            數組變化: pop . push . shift . unshift . splice . sort . reverse
          </p>
          <br />
          <br />
          <p class="fz28">用 函數劫持 的方法</p>
          <br />
          <br />
          <p class="fz28">藉由 改變 數組的原型</p>
          <br />
          <br />
          <p class="fz28">用戶調用數組的一些方法時</p>
          <br />
          <br />
          <p class="fz28">走被改過的方法</p>
          <br />
          <br />
          <p class="fz28">通知視圖層更新</p>
          <br />
          <p class="fz28">數組中物件 也會進行 遞歸 劫持</p>

          <br />
          <p class="fz28">( 數組 索引 長度 無法監控 )</p>

          <br />
          <br />

          <p class="fz28 cor36"># 這個Vue2數據響應式缺點是什麼?</p>
          <br />
          <br />

          <p class="fz28">
            物件不是全部都監聽, 新增方法.屬性它是監聽不了的, 沒有監聽陣列
            (陣列不用defineProperty)
          </p>
          <br />
          <br />

          <p class="fz28">解決: $set . $delete</p>
          <br />
          <br />

          <p class="fz28 cor36"># vue3用什麼解決?</p>

          <p class="fz28 cor36"># vue3 為什麼用 Proxy?</p>
          <br />
          <br />

          <p class="fz28">Vue2 在 2013 只能採用 defineProperty</p>
          <br />
          <br />
          <p class="fz28">該 API 存在侷限性</p>
          <br />
          <br />
          <p class="fz28">
            比如 數組的攔截 , 需要另外 專門為數組響應式 做一套 實現
          </p>
          <br />
          <br />
          <p class="fz28">再來 不能攔截 動態 增加刪除 的 物件屬性</p>
          <br />
          <br />
          <p class="fz28">
            再來 在 初始化時 需要 深度 遞歸遍歷 待處理 的物件 才能完全攔截
          </p>
          <br />
          <br />
          <p class="fz28">Vue3 用 Proxy</p>
          <br />
          <br />
          <p class="fz28">不但可以 對數組實現攔截 ,</p>
          <br />
          <br />
          <p class="fz28">還能對 Map , Set 實現攔截</p>
          <br />
          <br />
          <p class="fz28">攔截 是 懶處理 ,</p>
          <br />
          <br />
          <p class="fz28">初始化時 , 不管 物件嵌套多深</p>
          <br />
          <br />
          <p class="fz28">用戶在未來運行時 , 沒去訪問這個物件</p>
          <br />
          <br />
          <p class="fz28">則 不會主動對它 進行 響應式 攔截處理</p>
          <br />
          <br />
          <p class="fz28 cor36"># 缺</p>
          <p class="fz28">兼容性問題 , IE 不支持 proxy</p>
          <br />
          <br />

          <div class="articleCardTitle cor36 fz30">[ vue ] ≫ 事件綁定原理?</div>
          <p class="fz28">第一種 原生 DOM 事件綁定</p>
          <br />
          <br />
          <p class="fz28">採用 addEventListener 實現</p>
          <br />
          <br />
          <p class="fz28">Vue 在創建 真實 DOM 時</p>
          <br />
          <br />
          <p class="fz28">會調用 createEml</p>
          <br />
          <br />
          <p class="fz28">默認調用 invokeCreateHooks</p>
          <br />
          <br />
          <p class="fz28">會遍歷 當前平台上 相對應 的屬性</p>
          <br />
          <br />
          <p class="fz28">
            其中有 updateDOMListener 方法 , 內部會傳入 add() 方法
          </p>
          <br />
          <br />
          <p class="fz28">第二種 組件綁定事件</p>
          <br />
          <br />
          <p class="fz28">Vue 通過自定義 $on 方法實現</p>
          <br />
          <br />

          <div class="articleCardTitle cor36 fz30">
            [ vue ] ≫ 雙向綁定使用和原理?
          </div>
          <div class="dis">
            <div>
              <p class="fz28">vue2 實現雙向綁定 的原理是</p>
              <br />
              <br />
              <p class="fz28">通過數據劫持 和 發佈訂閱模式 實現</p>
              <br />
              <br />
              <p class="fz28">先通過 object.definedproperty 方法</p>
              <br />
              <br />
              <p class="fz28">對數據進行劫持 監聽數據的變化</p>
              <br />
              <br />
              <p class="fz28">並通過 getter 和 setter 方法 對數據 進行 讀寫</p>
              <br />
              <br />
              <p class="fz28">Vue 通過 發布 訂閱模式 , 維護一個訂閱者數組</p>
              <br />
              <br />
              <p class="fz28">當數據發生變化</p>
              <br />
              <br />
              <p class="fz28">Vue 會通知 所有 訂閱者 進行更新</p>
              <br />
              <br />
              <p class="fz28">因此 當用戶 在頁面上 進行修改時</p>
              <br />
              <br />
              <p class="fz28">Vue 會更新 對應數據</p>
              <br />
              <br />
              <p class="fz28">並通知 所有訂閱者 更新 視圖</p>
              <br />
              <br />
              <p class="fz28">同時 數據發生變化時 Vue 也會更新 對應的 視圖</p>
              <br />
              <br />
              <p class="fz28">比如 當我在 輸入框中 輸入文字時</p>
              <br />
              <br />
              <p class="fz28">Vue 會檢測到 數據的 變化</p>
              <br />
              <br />
              <p class="fz28">然後更新對應的 視圖</p>
              <br />
              <br />
              <p class="fz28">如果 通過代碼修改數據</p>
              <br />
              <br />
              <p class="fz28">vue 也會更新視圖</p>
              <br />
              <br />
              <p class="fz28 cor36"># vue2 和 vue3 v-model 差別?</p>

              <br />
              <br />
              <p class="fz28">vue3把 v-model 和 sync 合併成新的v-model</p>
              <br />
              <p class="fz28">用法是 .sync 那種用法</p>
              <br />
              <br />

              <p class="fz28 cor36"># 訂閱者</p>
              <br />
              <br />
              <p class="fz28">在 vue 中 每一個 掛載到 視圖上 的組件</p>
              <br />
              <br />
              <p class="fz28">或 每一個 watcher</p>
              <br />
              <br />
              <p class="fz28">都可 被看作是 一個 訂閱者</p>
              <br />
              <br />
              <p class="fz28">他們 訂閱了 某一個 數據的變化</p>
              <br />
              <br />
              <p class="fz28">並等待 數據變化時 進行更新</p>
              <br />
              <br />

              <p class="fz28"># vue2 中 .sync 作用?</p>
              <br />
              <br />
              <p class="fz28">首先 props 是單向數據流</p>
              <br />
              <br />
              <p class="fz28">如果 子組件想 觸發 $emit 觸發@update:count</p>
              <br />
              <br />
              <p class="fz28">vue3 v-model:count="count"</p>
              <br />
              <br />
            </div>

            <div class="padTwo"></div>

            <div class="bgcVSMid"></div>

            <div class="padTwo"></div>

            <div>
              <p class="fz28">
                <a href="https://juejin.cn/post/7050418094233092104"
                  >你了解v-model吗 @掘金</a
                >
              </p>
              <br />
              <br />
              <br />
              <p class="fz28">1.observer:對所有數據的屬性監聽</p>
              <br />
              <p class="fz28">2.compiler:將指令解析生效->更新</p>
              <br />
              <p class="fz28">3.watcher:數據變化調用update()函數</p>
              <br />
              <p class="fz28">4.Dep:data變化時先找依賴</p>
              <br />
              <p class="fz28">依賴:一個依賴對應到watcher</p>
              <br />
              <p class="fz28 cor36">流程</p>
              <br />
              <p class="fz28">1.new MVVM()</p>
              <br />
              <p class="fz28">2.Observer:劫持監聽所有的屬性</p>
              <br />
              <p class="fz28">3.commpiler:訂閱數據變化 綁訂到 watcher 上</p>
              <br />
              <p class="fz28">當監聽到變化 observer 通知變化給 Dep</p>
              <br />
              <p class="fz28">Dep 通知 watcher</p>
              <br />
              <p class="fz28">watcher 觸發 update()</p>
              <br />
              <p class="fz28">讓視圖更新 頁面重新渲染</p>
              <br />
              <p class="fz28"></p>
              <br />
            </div>
          </div>

          <div id="" class="articleCardTitle cor36 fz30">
            [ vue ] ≫ vue 如何進行依賴收集?
          </div>

          <p class="fz28">
            template 裡的變量 ｛｛test1｝｝ 為 頁面上的模板 = 依賴
          </p>
          <br />
          <p class="fz28">｛｛test2｝｝</p>
          <br />
          <p class="fz28">｛｛test3｝｝</p>
          <br />
          <p class="fz28">每個依賴有一個 key = test1 Watcher1</p>
          <br />
          <p class="fz28">key = test2 Watcher2</p>
          <br />
          <p class="fz28">key = test3 Watcher3</p>
          <br />
          <p class="fz28">需要 dep 進行管理</p>
          <br />
          <p class="fz28">
            Dep1 deps = [ Watcher1,Watcher3 ] //Watcher1,Watcher3 依賴 Dep1
            的內容
          </p>
          <br />
          <p class="fz28">Dep2 deps = [ Watcher2 ]</p>
          <br />

          <p class="fz28">deps 數組將 Watcher1~3 的變化 進行 依賴收集</p>
          <br />

          <p class="fz28">當頁面變化 觸發 deps 中的 Watcher</p>
          <br />
          <p class="fz28 cor36">依賴收集 過程</p>
          <br />
          <p class="fz28">1.通過 defineReactive 為 key 創建 Dep 實例</p>
          <br />
          <p class="fz28">2.針對每個 key 對應的 變量 創建 Watcher</p>
          <br />
          <p class="fz28">3.獲取變量 test1</p>
          <br />
          <p class="fz28">用 getter 獲取 test1 中的方法 getter</p>
          <br />
          <p class="fz28">針對 test1 創建 Watcher1</p>
          <br />
          <p class="fz28">
            在 getter 獲取時 將 Watcher1 添加到 test1 模板解析的 deps 上
          </p>
          <br />
          <p class="fz28">4.當 test1 更新時 觸發 setter</p>
          <br />
          <p class="fz28">setter 從 Deps 上通知 watcher 進行更新</p>
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

          <p class="fz28">是實現響應式數據綁定的關鍵機制之一</p>
          <br />
          <br />

          <p class="fz28">
            通過依賴收集，Vue 能夠知道在數據變化時，哪些地方的視圖需要進行更新。
          </p>
          <br />
          <br />

          <p class="fz28">1.Watcher（觀察者）</p>
          <br />
          <br />

          <p class="fz28">
            每個綁定到 Vue 實例的數據屬性都會有一個對應的 Watcher 對象。
          </p>
          <br />
          <br />
          <p class="fz28">
            Watcher
            對象負責跟踪該屬性的依賴關係，並在屬性變化時執行相應的回調函數，從而更新視圖。
          </p>
          <br />
          <br />

          <p class="fz28">2.Getter 函數：</p>
          <br />
          <br />

          <p class="fz28">
            當 Vue 實例初始化時，每個數據屬性都會被轉化為一個帶有 getter 和
            setter 的物件。
          </p>
          <br />
          <br />

          <p class="fz28">
            Getter 函數會在頁面渲染時被呼叫，用來建立屬性與其依賴之間的關係。
          </p>
          <br />
          <br />
          <p class="fz28">3.依賴收集過程：</p>
          <br />
          <br />

          <p class="fz28">
            在 Getter 函數中，當訪問一個數據屬性時，Vue 會將正在運行的 Watcher
            添加到屬性的依賴列表中。
          </p>
          <br />
          <br />

          <p class="fz28">這意味著當前的 Watcher 對該屬性產生了依賴。</p>
          <br />
          <br />

          <p class="fz28">
            如果有多個 Watcher 需要收集同一個屬性的依賴，Vue
            會確保不會重複添加相同的 Watcher。
          </p>
          <br />
          <br />
          <p class="fz28">4.觸發更新：</p>
          <br />
          <br />

          <p class="fz28">
            當數據屬性變化時，對應的 Setter
            函數會被呼叫，同時它會通知該屬性的所有依賴項（即 Watcher）。
          </p>
          <br />
          <br />

          <p class="fz28">
            這些 Watcher 會在被通知時執行回調函數，從而觸發視圖更新。
          </p>
          <br />
          <br />

          <p class="fz28 cor36"># vue3</p>
          <p class="fz28">watch -> effect</p>
          <br />
          <br />
          <p class="fz28">通過 map 結構 將 屬性和 effect 映射起來</p>
          <br />
          <br />

          <p class="fz28">初始化 調用 render 函數 , 觸發依賴收集 track</p>
          <br />
          <br />

          <p class="fz28">當屬性修改 , 找對應 effect 列表 依次執行 trigger</p>
          <br />
          <br />

          <div class="articleCardTitle cor36 fz30">
            [ vue ] ≫ 異步組件是什麼?
          </div>

          <p class="fz28">在大型項目中 , 可能需要拆分應用為 更小的塊</p>
          <br />
          <br />
          <p class="fz28">並且在 需要組件時 再加載他們</p>
          <br />
          <br />

          <p class="fz28 cor36"># 異步組件 & 路由懶加載</p>
          <br />
          <br />
          <p class="fz28">異步組件不能被用於定義懶加載路由上</p>
          <br />
          <br />
          <p class="fz28">處理它是 vue 框架</p>
          <br />
          <br />
          <p class="fz28">處理路由組件加載的是 vue-router</p>
          <br />
          <br />
          <p class="fz28">但可以在 懶加載的路由組件中 使用 異步組件</p>
          <br />
          <br />

          <div class="articleCardTitle cor36 fz30">[ vue ] ≫ nextTick</div>

          <p class="fz28 cor36"># Vue 為什麼會有 nextTick?</p>
          <br />
          <br />
          <p class="fz28 cor36">
            # Vue data 中某一個屬性的值發生改變後 ,
            視圖會立即同步執行重新渲染嗎?
          </p>
          <br />
          <br />
          <p class="fz28 cor36"># Vue nextTick 原理是什麼?</p>
          <br />
          <br />
          <p class="fz28">nextTick 是 等待 下一次 DOM 更新 刷新的 工具方法</p>
          <br />
          <br />
          <p class="fz28">(在下次 DOM 更新循環結束 之後 執行延遲回調)</p>
          <br />
          <br />
          <p class="fz28">由於 vue 中 DOM 更新是 異步執行的</p>
          <br />
          <br />
          <p class="fz28">修改數據時 , 視圖 不會 立即更新</p>
          <br />
          <br />
          <p class="fz28">而是 會監聽 數據變化</p>
          <br />
          <br />
          <p class="fz28">並 緩存在 同一事件循環中</p>
          <br />
          <br />
          <p class="fz28">等 同一數據 循環中 的 所有 數據 變化完成之後</p>
          <br />
          <br />
          <p class="fz28">再 統一進行 視圖更新</p>
          <br />
          <br />
          <p class="fz28">如果在 DOM 還未更新時 獲取的 DOM 是變更前的</p>
          <br />
          <br />
          <p class="fz28">可以設置 nextTick 方法</p>
          <br />
          <br />
          <p class="fz28">來 獲取 更新後的 DOM</p>
          <br />
          <br />
          <p class="fz28 cor36"># 使用場景</p>
          <br />
          <br />
          <p class="fz28">
            比如 需要 在 生命週期 的 created 函數 , 進行 DOM 操作
          </p>
          <br />
          <br />
          <p class="fz28">把相關代碼 寫在 nextTick 的 回調函數中</p>
          <br />
          <br />
          <p class="fz28">因為在 created 鉤子函數中 , DOM 還未進行任何渲染</p>
          <br />
          <br />
          <p class="fz28">此時 進行 DOM 操作 沒用</p>
          <br />
          <br />

          <div class="articleCardTitle cor36 fz30">
            [ vue ] ≫ 虛擬 DOM 是幹嘛用的?
          </div>
          <p class="fz28">因為 DOM 操作本身是是非常占用性能的,</p>
          <br />
          <br />
          <p class="fz28">先用虛擬 DOM 生成一些虛擬的節點,</p>
          <br />
          <br />
          <p class="fz28">先不真的渲染到頁面上去,</p>
          <br />
          <br />
          <p class="fz28">在生成虛擬的頁面上進行操作再一次性的選染到頁面上,</p>
          <br />
          <br />
          <p class="fz28">這樣能達到性能優化的效果</p>
          <br />
          <br />
          <div class="articleCardTitle cor36 fz30">
            [ vue ] ≫ Vue 的 diff 算法?
          </div>
          <p class="fz28">
            (雙端交叉對比5句) _ 頭頭對比 尾尾對比 新頭舊尾 新尾舊頭 利用key對比
          </p>
          <br />
          <br />

          <p class="fz28">首尾雙端這樣優化的算法,</p>
          <br />
          <br />

          <p class="fz28">先進行頭頭的對比,</p>
          <br />
          <br />

          <p class="fz28">然後進行尾尾的對比,</p>
          <br />
          <br />

          <p class="fz28">然後舊尾新頭,</p>
          <br />
          <br />

          <p class="fz28">然後舊頭新尾,</p>
          <br />
          <br />

          <p class="fz28">最後再進行key的對比,</p>
          <br />
          <br />

          <p class="fz28">這樣五步循環的方式進行一個優化</p>
          <br />
          <br />

          <p class="fz32 cor36"># 好處?</p>
          <br />
          <br />

          <p class="fz28">好處是能更大程度上復用節點, 而不用像 react 一樣,</p>
          <br />
          <br />
          <p class="fz28">先把一些節點都廢棄, 再從一個map裡面去找,</p>
          <br />
          <br />

          <p class="fz28">
            如果有相同的key再給他復活的這樣一個機制, 比他更高效
          </p>
          <br />
          <br />

          <p class="fz32 cor36"># react 為什麼不用 diff?</p>
          <br />
          <br />

          <p class="fz28">他的fiber架構上就 不支持這個 雙端指針 的問題</p>
          <br />
          <br />
          <p class="fz28">如果要升級的話, 是一個比較大幅度的改變,</p>
          <br />
          <br />

          <p class="fz28">
            而且從使用上來說, 虛擬DOM在性能上也沒產生比較大的問題,
          </p>
          <br />
          <br />

          <div class="articleCardTitle cor36 fz30">
            [ vue ] ≫ Vue 通過數據劫持可以實現對數據在具體 DOM
            上的變化的精確檢測，為什麼 還要使用虛擬 DOM ?
          </div>
          <p class="fz28">當數據變化時，若直接操作真實 DOM，</p>
          <br />
          <br />

          <p class="fz28">瀏覽器必須反覆進行重新排列和重繪，</p>
          <br />
          <br />

          <p class="fz28">虛擬 DOM 的引入有助於減少頻繁的 DOM 操作。</p>
          <br />
          <br />
          <p class="fz28">先將變化渲染至虛擬 DOM，</p>
          <br />
          <br />

          <p class="fz28">然後通過差異算法 (diff)，</p>
          <br />
          <br />

          <p class="fz28">僅對真正發生變化的部分進行操作，</p>
          <br />
          <br />
          <p class="fz28">
            最後再將變化的部分呈現於實際 DOM，減輕瀏覽器負擔，提升性能。
          </p>
          <br />
          <br />

          <div id="" class="articleCardTitle cor36 fz30">
            [ vue ] ≫ Vue2的生命週期有哪些?
          </div>

          <p class="fz28">分三階段 , 掛載 、 更新 、 銷毀,</p>
          <br />
          <br />

          <p class="fz28">掛載有 beforeCreate, created,</p>
          <br />
          <br />
          <p class="fz28">beforeMount , mounted ,</p>
          <br />
          <br />

          <p class="fz28">更新有 beforeUpdate , updated</p>
          <br />
          <br />

          <p class="fz28">銷毀有 beforeDestroy , destroyed</p>
          <br />
          <br />
          <br />
          <br />
          <br />

          <table class="fz30">
            <tr>
              <td><div class="pad10">Vue3</div></td>
              <td><div class="pad10">vue2</div></td>
              <td><div class="pad10">觸發時間</div></td>
            </tr>
            <tr>
              <td><div class="pad10"></div></td>
              <td><div class="pad10">beforeCreate(){}</div></td>
              <td>
                <div class="pad10">
                  <div>Vue實例創建完成之前</div>
                  <div>( 組件創建 )</div>
                </div>
              </td>
            </tr>
            <tr>
              <td><div class="pad10"></div></td>
              <td><div class="pad10">created(){}</div></td>
              <td><div class="pad10">Vue實例創建完畢後</div></td>
            </tr>
            <tr>
              <td><div class="pad10"></div></td>
              <td><div class="pad10">beforeMount(){}</div></td>
              <td><div class="pad10">模板渲染到頁面之前</div></td>
            </tr>
            <tr>
              <td><div class="pad10"></div></td>
              <td><div class="pad10">mounted(){}</div></td>
              <td><div class="pad10">模板渲染到頁面後</div></td>
            </tr>
            <tr>
              <td><div class="pad10"></div></td>
              <td><div class="pad10">beforeUpdated(){}</div></td>
              <td>
                <div class="pad10">
                  <div>組件數據發生變化</div>
                  <div>更新之前</div>
                </div>
              </td>
            </tr>
            <tr>
              <td><div class="pad10"></div></td>
              <td><div class="pad10">updated</div></td>
              <td><div class="pad10">數據更新後</div></td>
            </tr>
            <tr>
              <td><div class="pad10">beforeUnmounted</div></td>
              <td><div class="pad10">beforeDestroy</div></td>
              <td><div class="pad10">組件實例銷毀前</div></td>
            </tr>
            <tr>
              <td><div class="pad10">unmounted</div></td>
              <td><div class="pad10">destroyed</div></td>
              <td><div class="pad10">組件實例銷毀後</div></td>
            </tr>
            <tr>
              <td><div class="pad10">renderTracked</div></td>
              <td><div class="pad10"></div></td>
              <td><div class="pad10">響應式依賴被收集時</div></td>
            </tr>
            <tr>
              <td><div class="pad10">renderTriggered</div></td>
              <td><div class="pad10"></div></td>
              <td><div class="pad10">響應式依賴被觸發時</div></td>
            </tr>
            <tr>
              <td><div class="pad10">serverPrefetch</div></td>
              <td><div class="pad10"></div></td>
              <td><div class="pad10">ssr only</div></td>
            </tr>
          </table>
          <br />
          <br />
          <br />

          <p class="fz28 cor36"># 還有用過其他鉤子嗎?</p>
          <br />
          <br />

          <p class="fz28">keepalive,它會帶 2 個鉤子 activated, deactivated</p>
          <br />
          <br />

          <p class="fz28 cor36"># vue3和vue2生命鉤子差在哪?</p>
          <br />
          <br />

          <p class="fz28">
            銷毀前 beforeDestroy, 銷毀後 destroyed 換名子變成 卸載前 卸載後
            beforeUnmounted unmounted
          </p>
          <br />
          <br />
          <div id="" class="articleCardTitle cor36 fz36">
            [ vue ] ≫ v-if v-for 哪個優先級更高?
          </div>
          <p class="fz28">
            <a
              href="https://v2.cn.vuejs.org/v2/guide/conditional.html#v-if-%E4%B8%8E-v-for-%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8"
              >vue2 文檔</a
            ><a
              href="https://cn.vuejs.org/guide/essentials/list.html#v-for-with-v-if"
              >vue3 文檔</a
            >
          </p>
          <br />
          <br />
          <br />
          <p class="fz28">v-for 和 v-if 應該要避免在同一個標籤中使用</p>
          <br />
          <p class="fz28">在 vue2 中 v-for 優先級高於 v-if</p>
          <br />
          <p class="fz28">在 vue3 中 v-if 優先級高於 v-for</p>
          <br />
          <br />
          <p class="fz28 cor36">
            # 情況 1. 有一個列表 , 列表中有一個條件 決定要不要顯示
          </p>
          <br />
          <p class="fz28 cor36"># 情況 1-1 vue2</p>
          <p class="fz28 pEig">v-for > v-if</p>
          <br />
          <div class="fz30">
            <div>
              <span class="function">v-for</span> <span class="then">=</span>
              <span class="src">"userinusers" </span>
              <span class="function">v-if</span> <span class="then">=</span>
              <span class="src">"user.isActive"</span>
            </div>
          </div>
          <br />
          <p class="fz28">不斷做循環 , 不斷條件判斷 isActive 是否為真</p>
          <br />
          <br />
          <br />
          <br />
          <p class="fz28 cor36"># 情況 1-2 vue3</p>
          <p class="fz28 pEig">v-if > v-for</p>
          <br />
          <div class="fz30">
            <div>
              <span class="function">v-for</span> <span class="then">=</span>
              <span class="src">"user in users" </span>
              <span class="function">v-if</span> <span class="then">=</span>
              <span class="src">"user.isActive"</span>
            </div>
          </div>
          <br />
          <p class="fz28">vue 嘗試拿不存在的 user.isActive ...> 報錯</p>
          <br />
          <br />
          <br />

          <p class="fz28 cor36"># 情況 1. 改善</p>
          <br />
          <p class="fz28">定義一個 計算屬性 , 讓其返回 過濾後的 列表</p>
          <br />
          <p class="fz28">users.filter( (u) => u.isActive)</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p class="fz28 cor36">
            # 情況 2. 根據 一個 條件 直接決定 當前列表 要不要 顯示
          </p>
          <br />
          <p class="fz28 cor36"># 情況 2-1 vue2</p>
          <p class="fz28 pEig">v-for > v-if</p>
          <br />
          <div class="fz30">
            <div>
              <span class="function">v-for</span> <span class="then">=</span>
              <span class="src">"user in users" </span>
              <span class="function">v-if</span> <span class="then">=</span>
              <span class="src">"sholdShowUsers"</span>
            </div>
          </div>
          <br />
          <p class="fz28">不斷先做 v-for 循環 再判斷 v-if 造成資源浪費</p>
          <br />
          <br />
          <br />
          <br />
          <p class="fz28 cor36"># 情況 2-2 vue3</p>
          <p class="fz28 pEig">v-if > v-for</p>
          <br />

          <p class="fz28">先 v-if 判斷 再 v-for 循環</p>
          <br />
          <br />
          <br />

          <p class="fz28 cor36"># 情況 2. 改善</p>
          <br />

          <p class="fz28">在 ul 直接 v-if 判斷 li 再做循環</p>
          <br />

          <div id="" class="articleCardTitle cor36 fz30">
            [ vue ] ≫ v-show v-if ?
          </div>

          <p class="fz28">
            v-if 如果條件不成立 , 不會渲染當前指令所在節點的 dom 元素
          </p>
          <br />
          <br />
          <p class="fz28">
            v-show 只是 切換當前 dom 的顯示 或 隱藏 (條件不滿足 display:none)
          </p>
          <br />
          <br />

          <p class="fz28">
            opacity 控制透明度 佔位 visiviblity 控制元素是否出現在頁面 佔位
          </p>
          <br />
          <br />

          <p class="fz28 cor36"># 如何選擇?</p>
          <br />
          <br />

          <p class="fz28">
            v-if 可以阻斷內部代碼是否執行 , 條件不成立 不執行內部邏輯
          </p>
          <br />
          <br />
          <p class="fz28">
            頁面邏輯在第一次加載時 已被確認後續不會頻繁更改 用 v-if
          </p>
          <br />
          <br />

          <p class="fz28 cor36"># v-if v-show 寫一起?</p>
          <br />
          <br />

          <p class="fz28">v-if 優先級更高</p>
          <br />
          <br />
          <div id="" class="articleCardTitle cor36 fz36">
            [ vue ] ≫ vue 中 key 的作用和原理?
          </div>
          <p class="fz28">key 的作用是 給每個 vnode 節點</p>
          <br />
          <p class="fz28">添加 唯一的 id</p>
          <br />
          <p class="fz28">作用是 為 diff 算法做優化</p>
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
          <div id="" class="articleCardTitle cor36 fz30">
            [ vue ] ≫ Vue要做權限管理怎麼做? 控制到按鈕級別權限怎麼做?
          </div>

          <p class="fz28">1. 登入鑒權</p>
          <br />
          <br />
          <p class="fz28">用戶登入後 , 服務器返回 token</p>
          <br />
          <br />

          <p class="fz28">前端將 token 保存到本地 , 做為 用戶登入 的憑證</p>
          <br />
          <br />

          <p class="fz28">每次發請求都攜帶 token , 後端 對 token 做驗證</p>
          <br />
          <br />
          <p class="fz28">每當 頁面刷新 都可以 透過 token 獲取用戶 相關權限</p>
          <br />
          <br />

          <p class="fz28">2. 訪問權限</p>
          <br />
          <br />

          <p class="fz28">
            根據用戶是否登入 判斷能否訪問頁面 , 通過路由守衛 實現判斷用戶 是否有
            權限
          </p>
          <br />
          <br />
          <p class="fz28">router.beforeEach*( hook )</p>
          <br />
          <br />
          <p class="fz28">在路由 component 下配置 meta: { needLogin:true }</p>
          <br />
          <br />

          <p class="fz28">store.state.user.hasPermission</p>
          <br />
          <br />

          <p class="fz28">localStorage.getItem("token")</p>
          <br />
          <br />
          <p class="fz28">3. 頁面權限</p>
          <br />
          <br />
          <p class="fz28">
            前端配置路由 分 2 部分 , "通用路由配置" "需要權限路由配置"
          </p>
          <br />
          <br />

          <p class="fz28">
            可 根據 後端返回 權限 來決定 那些路由需要動態添加的
          </p>
          <br />
          <br />

          <p class="fz28">可調用 router.addRoute() 實現動態路由添加</p>
          <br />
          <br />
          <p class="fz28">4. 按鈕權限</p>
          <br />
          <br />
          <p class="fz28">
            一般用 自定義指令實現 , 用戶登入後 , 返回對應按鈕權限
          </p>
          <br />
          <br />

          <p class="fz28">在對應的按鈕上 使用指令 ,</p>
          <br />
          <br />

          <p class="fz28">有權限就顯示</p>
          <br />
          <br />
          <p class="fz28">沒權限就隱藏</p>
          <br />
          <br />

          <div class="articleCardTitle cor36 fz30">
            [ vue ] ≫ 那些 Vue 性能優化方法?
          </div>

          <p class="fz28">平常寫代碼有一些優化手段 , 以下</p>
          <br />
          <br />
          <p class="fz28 cor36">路由懶加載</p>
          <br />
          <br />
          <p class="fz28">通過 vite 提供的 動態加載方法 import</p>
          <br />
          <br />
          <p class="fz28">可以動態加載組件 , 實現 異步組件</p>
          <br />
          <br />
          <p class="fz28">於是打包時 , 可以分包去打包</p>
          <br />
          <br />
          <p class="fz28">這樣程序 能變 更小更快</p>
          <br />
          <br />
          <p class="fz28">我需要訪問時 , 才異步加載</p>
          <br />
          <br />
          <p class="fz28 cor36">組件緩存</p>
          <br />
          <br />
          <p class="fz28">通過 keep-alive 可以進行 組件緩存</p>
          <br />
          <br />
          <p class="fz28">避免重複創建 組件實例 , 且能保留 緩存組件狀態</p>
          <br />
          <br />
          <p class="fz28 cor36">v-show 復用 DOM</p>
          <br />
          <br />
          <p class="fz28">v-show 和 v-if 差在它不會 重新創建 元素</p>
          <br />
          <br />
          <p class="fz28">比如有一個 創建時間長的 重組件</p>
          <br />
          <br />
          <p class="fz28">通過緩存的方式</p>
          <br />
          <br />
          <p class="fz28">下次再來時 , 直接隱藏 或顯示</p>
          <br />
          <br />
          <p class="fz28">而不是 刪除 再創建 , 這樣快得多</p>
          <br />
          <br />
          <p class="fz28 cor36">v-for 遍歷 避免 同時用 v-if</p>
          <br />
          <br />
          <p class="fz28">v-for 避免 v-if 同時使用</p>
          <br />
          <br />
          <p class="fz28 cor36">圖片懶加載</p>
          <br />
          <br />
          <p class="fz28">對 圖片過多頁面 , 等圖片出現在可視區域 再加載</p>
          <br />
          <br />
          <p class="fz28 cor36">第三方插件按需引入</p>
          <br />
          <br />
          <p class="fz28">
            像 element-plus 這樣第三方組件庫 引入 來避免 體積太大
          </p>
          <br />
          <br />
          <p class="fz28 cor36">子組件分割策略</p>
          <br />
          <br />
          <p class="fz28">計算邏輯 較重的 組件 拆分</p>
          <br />
          <br />
          <p class="fz28">這樣它 頻繁更新時 , 是影響這個組件 的小單元</p>
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
          <p class="fz28"></p>
          <br />
          <br />
          <p class="fz28"></p>
          <br />
          <br />
          <p class="fz28"></p>
          <br />
          <br />

          <div class="articleCardTitle cor36 fz30">[ vue ] ≫ 對 SPA 理解?</div>
          <p class="fz28">是什麼? . 和 MPA? . 優缺</p>
          <br />
          <br />

          <p class="fz28">SPA . （Single-Page Application） . 單頁應用</p>
          <br />
          <br />

          <p class="fz28">
            在網頁初始化時，會加載相應的 HTML、JavaScript 和 CSS。
          </p>
          <br />
          <br />

          <p class="fz28">
            一旦頁面加載完成，單頁應用 (SPA)
            不會因為用戶的操作而進行頁面的重新加載或跳轉
          </p>
          <br />
          <br />

          <p class="fz28">
            利用路由機制實現 HTML 內容的變換，UI
            與用戶的互動，避免頁面的重新加載。
          </p>
          <br />
          <br />

          <p class="fz32">MPA ，每個頁面都是一個主頁面，</p>
          <br />
          <br />

          <p class="fz28">
            在訪問另一個頁面的時候，都需要重新加載 HTML、CSS、JS 檔案
          </p>
          <br />
          <br />

          <p class="fz30">優</p>
          <p class="fz28">用戶體驗好、快，內容的改變不需要重新加載整個頁面。</p>
          <br />
          <p class="fz28">良好的前後端分離，分工更明確。</p>
          <br />
          <br />

          <p class="fz30">缺</p>
          <p class="fz28">不利於搜索引擎的抓取。</p>
          <br />
          <p class="fz28">首次渲染速度相對較慢。</p>
          <br />
          <br />

          <div id="" class="articleCardTitle cor36 fz30">
            [ vue ] ≫ Watch 和 computed 區別?
          </div>
          <p class="fz28 cor36"># computed</p>
          <p class="fz28">
            computed 是 某個值 需要 通過某些邏輯 或 多個數據計算而來 就要用
            computed
          </p>
          <br />
          <br />

          <p class="fz28">比如 購物車 結算總金額</p>
          <br />
          <br />

          <p class="fz28">總金額 依賴 數量 和 單價</p>
          <br />
          <br />
          <p class="fz28">
            另外 支持 緩存 , 只有當 依賴的數據 發生改變的時候 才重新計算
          </p>
          <br />
          <br />

          <p class="fz28">否則 直接從 緩存中 讀取</p>
          <br />
          <br />

          <p class="fz28">
            computed 不支持異步 , 內部有異步操作是無效的 無法監聽數據變化
          </p>
          <br />
          <br />

          <p class="fz28 cor36"># watch</p>
          <p class="fz28">
            watch 是當一個數據的變化 會影響其他一個 或多個數據的時候
          </p>
          <br />
          <br />

          <p class="fz28">就需要監聽這個數據</p>
          <br />
          <br />
          <p class="fz28">watch 不支持緩存</p>
          <br />
          <br />

          <p class="fz28">監聽的數據發生變化 就會觸發相應的操作</p>
          <br />
          <br />

          <p class="fz28">watch 支持異步 ,</p>
          <br />
          <br />

          <p class="fz28">且監聽的數據必須是 data 中聲明過的數據</p>
          <br />
          <br />

          <p class="fz28">或 父組件傳遞的 props 中的數據</p>
          <br />
          <br />
          <p class="fz28">另外每個監聽數據有 2 個可選屬性 immediate & deep</p>
          <br />
          <br />

          <p class="fz28">immediate 是組件加載 立刻觸發</p>
          <br />
          <br />

          <p class="fz28">true 首次加載立即觸發</p>
          <br />
          <br />

          <p class="fz28">false 首次加載 不會執行這個監聽邏輯</p>
          <br />
          <br />

          <p class="fz28">只有當數據改變時 , 才會監聽</p>
          <br />
          <br />
          <p class="fz28">deep 是深度監聽</p>
          <br />
          <br />

          <p class="fz28">為了監聽物件內部值的變化 , 適合用在複雜數據類型中</p>
          <br />
          <br />

          <div id="" class="articleCardTitle cor36 fz30">
            [ vue ] ≫ ref 和 reactive 區別?
          </div>
          <p class="fz28">1.概念</p>
          <p class="fz28">2.使用場景</p>
          <p class="fz28">3.異同</p>
          <p class="fz28">4.細節</p>
          <p class="fz28">5.原理</p>
          <br />
          <br />

          <p class="fz28">ref 接收內部值 返回 響應式的 包裝物件 Ref 類型</p>
          <br />
          <br />

          <p class="fz28">是對一個單值 進行 響應式處理</p>
          <br />
          <br />

          <p class="fz28">
            比較可能是 原始類型值 , 因為遠使類型值 不能做 proxy 代理
          </p>
          <br />
          <br />

          <p class="fz28">因為封裝 , 訪問內部值用 .value</p>
          <br />
          <br />

          <p class="fz28">ref 處理單值響應式 reactive 處理物件響應式</p>
          <br />
          <br />

          <p class="fz28">ref 也可以 數組 物件</p>
          <br />
          <br />

          <p class="fz28">
            ref 在 JS 中使用 要加 .value , 在視圖中會自動脫ref 不須加 .value
          </p>
          <br />
          <br />

          <p class="fz28">
            reactive 在 JS 不用加 .value , 在視圖中要 變量名 點 屬姓名
          </p>
          <br />
          <br />

          <p class="fz28">有人會嘗試 展開運算符 ...展開</p>
          <br />
          <br />

          <p class="fz28">展開後失去響應</p>
          <br />
          <br />

          <p class="fz28">可結合 toRefs() 將值轉為 Ref 物件 後再展開</p>
          <br />
          <br />

          <p class="fz28">值是響應式單值 , 視圖對他進行單獨脫殼處理</p>
          <br />
          <br />

          <p class="fz28 cor36">內部實現機制</p>
          <p class="fz28">
            reactive 對傳入對象 通過 proxy 方式進行訪問攔截 (trap)
          </p>
          <br />
          <br />

          <p class="fz28">ref 創建一個新物件 將單一值 進行包裝</p>
          <br />
          <br />

          <p class="fz28">
            這個值通過一個存取器 get value / set value 對外暴露
          </p>
          <br />
          <br />

          <div class="articleCardTitle cor36 fz30">
            [ vue ] ≫ 對 vue 組件化 的理解?
          </div>

          <p class="fz28">定義 . 使用場景 . 如何使用 . 組件本質</p>
          <br />
          <br />

          <p class="fz28">組件 是可複用的 vue 實例</p>
          <br />
          <br />
          <p class="fz32">優</p>
          <p class="fz28">組件 可增加 代碼 複用性 . 可維護性 . 可測試性</p>
          <br />
          <br />

          <p class="fz32">場景</p>
          <p class="fz28">
            通用組件 基本功能 -> 有通用 複用性 -> 按鈕、輸入框組件
          </p>
          <br />
          <br />

          <p class="fz28">業務組件 具體業務 -> 複用性 -> 登入、輪播組件</p>
          <br />
          <br />

          <p class="fz28">
            頁面組件 組織個部分獨立內容 -> 不同頁面組件間切換 -> 商品列表
          </p>
          <br />
          <br />
          <p class="fz32">創建</p>
          <p class="fz28">定義: Vue.component() , components 選項</p>
          <br />
          <br />

          <p class="fz28">分類: 有狀態組件(有data屬性) , function</p>
          <br />
          <br />

          <p class="fz28">通信: props , $emit()/$on() , provide/inject</p>
          <br />
          <br />
          <p class="fz28">內容分發: ＜slot> , ＜template> , v-slot</p>
          <br />
          <br />

          <p class="fz28">使用及優化: is , keep-alive , 異步組件</p>
          <br />
          <br />

          <p class="fz32">組件本質</p>
          <p class="fz28">
            vue組件經歷 . 組件配置 -> VueComponent實例 -> render() -> Virtual
            DOM -> DOM
          </p>
          <br />
          <br />

          <p class="fz28">所以組件本質 -> 產生虛擬 DOM</p>
          <br />
          <br />

          <div class="articleCardTitle cor36 fz30">[ vue ] ≫ vue 組件通信?</div>

          <p class="fz28">父子組件通信</p>
          <br />
          <br />

          <p class="fz28">兄弟組件通信</p>
          <br />
          <br />
          <p class="fz28">祖孫 後代 通信</p>
          <br />
          <br />
          <p class="fz28">非關係組件的通信</p>
          <br />
          <br />
          <p class="fz28 cor36"># props 父傳子</p>
          <br />
          <div class="fz30">
            <div><span class="comment">//父組件</span></div>
            <div>
              <span class="then">＜</span>
              <span class="number">Children </span>
              <span class="word">name</span> <span class="then">=</span>
              <span class="src">"wayne"</span> <span class="word">age</span>
              <span class="then">=</span> <span class="number">18</span>
              <span class="then">></span>
            </div>
            <br />
            <div><span class="comment">//children子組件</span></div>
            <div>
              <span class="word">props:</span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">name:</span>
              <span class="brackets">String,</span>
              <div>
                <span class="word">age:</span> <span class="brackets">{</span>
              </div>
              <div class="padTwo VSL">
                <span class="word">require:</span>
                <span class="number">true</span> <span class="then">,</span>
                <div>
                  <span class="word">default:</span>
                  <span class="number">18,</span>
                </div>
                <div>
                  <span class="word">type:</span>
                  <span class="brackets">Number</span>
                </div>
                <div></div>
              </div>

              <div></div>
              <div><span class="brackets">}</span></div>
            </div>
            <div><span class="brackets">}</span></div>
          </div>
          <br />
          <p class="fz28 cor36"># 子組件向父組件觸發</p>
          <p class="pFou fz28">1.$emit</p>
          <p class="pFou fz28">2.父@add</p>

          <p class="pFou fz28">3.ref</p>

          <br />
          <br />

          <div class="fz30">
            <p class="cor36">1.$emit</p>

            <div class="comment">
              //子組件 透過 @emit() 觸發 自定義事件 add 參數 123
            </div>
            <div>
              <span class="then">this</span>
              <span class="variable">.$emit</span>
              <span class="brackets">(</span> <span class="src">"add"</span>
              <span class="src">,</span> <span class="number">123</span>
              <span class="brackets">)</span>
            </div>
            <br />
            <br />
            <p class="cor36">2.父@add</p>

            <div>
              <span class="comment"
                >//父組件通過add標示符@add="觸發父組件中方法"</span
              >
            </div>
            <div>
              <span class="comment"
                >//父組件透過監聽方式來觸發父組件中方法,通過event來獲取參數</span
              >
            </div>
            <div>
              <span class="then">＜</span> <span class="number">Children </span>
              <span class="then">@add=</span>
              <span class="src">"cartAdd</span>
              <span class="brackets">(</span> <span class="then">$event</span>
              <span class="brackets">)</span> <span class="src">"</span>
              <span class="then">></span>
            </div>
            <br />
            <br />
            <p class="cor36">3.ref</p>
          </div>

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
</style>
