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
          <p class="fz28">Vue 是一套用於構建使用者界面的漸進式框架</p>
          <br />
          <br />
          <p class="fz28">
            Vue 的核心庫只關注視圖層 （用來呈現資料和與用戶進行互動）
          </p>
          <br />
          <br />
          <p class="fz28">頁面多時，可以逐步引入 Vue Router</p>
          <br />
          <br />
          <p class="fz28">需要全域狀態管理時，也可以再引入 Pinia</p>
          <br />
          <br />
          <p class="fz28">
            需要構建一個大型單頁應用 (SPA) 專案時，可以使用工具 Vite 來建構
          </p>
          <br />
          <br />
          <p class="fz28">
            Vue
            的漸進式特性體現在剛開始時不會一次性地將所有概念都投射給你，而是讓你根據自己的需求逐步擴展。
          </p>
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

          <div id="onenote001" class="articleCardTitle cor36 fz30">
            [ vue ] ≫ MVVM 和 MVC 和 MVP 區別?
          </div>
          <p class="fz28">M 數據 . . V 視圖 . . C 控制器</p>
          <br />
          <br />
          <p class="fz28">
            MVC 是 model vue controller 分別對應 數據 , 視圖 , 控制器,
          </p>
          <br />
          <br />
          <p class="fz28">
            MVVM 是 Model-View-ViewModel, 分別對應 數據, 視圖, VM
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

          <div class="articleCardTitle cor36 fz30">
            [ vue ] ≫ 對響應式數據的理解?
          </div>
          <p class="fz28">響應式 是 當用戶 取值 或 修改值 我能知道</p>
          <br />
          <p class="fz28">vue2 : 把數據變 get & set</p>

          <br />
          <br />
          <p class="fz28">vue 數據響應式 是透過 數據劫持 實現的,</p>

          <br />
          <br />

          <p class="fz28">透過 definedProperty 遍歷物件每個屬性 ,</p>
          <br />
          <br />

          <p class="fz28">把 每個屬性 變 getter 跟 setter,</p>
          <br />
          <br />

          <p class="fz28">對一個數據的屬性進行監聽,</p>
          <br />
          <br />

          <p class="fz28">數據變化時 透過 setter 改變它的數據,</p>
          <br />
          <br />

          <p class="fz28">頁面上可以透過 getter 訪問 它的屬性的值</p>
          <br />
          <br />

          <p class="fz28">Vue3 用 proxy 代理</p>
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
          <br />
          <br />

          <p class="fz28">
            proxy 不用重寫屬性 , 只是做一層代理 , 當我訪問 a , a 去訪問 b
          </p>
          <br />
          <br />

          <p class="fz28">且 攔截 物件 而不是物件裡 屬性</p>
          <br />
          <br />

          <p class="fz28">且 也支持 數組</p>
          <br />
          <br />

          <div class="articleCardTitle cor36 fz30">
            [ vue ] ≫ Vue如何監聽數組的變化?
          </div>
          <p class="fz28">遍歷數組 增加 get set 性能低</p>
          <br />
          <br />

          <p class="fz28">
            重寫遍歷方法 對 數組劫持 , 劫持過程中 可通知 視圖更新
          </p>
          <br />
          <br />

          <p class="fz28">注意 數組 索引 長度監控不到</p>
          <br />
          <br />

          <p class="fz28">vue3 proxy 則可支持 數組 索引 長度</p>
          <br />
          <br />

          <div id="" class="articleCardTitle cor36 fz30">
            [ vue ] ≫ vue 如何進行依賴收集?
          </div>
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
          <p>watch -> effect</p>
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

          <div id="" class="articleCardTitle cor36 fz30">
            [ vue ] ≫ Vue.set 方法 如何實現
          </div>
          <p class="fz28"></p>
          <br />
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

          <div id="" class="articleCardTitle cor36 fz30">[ vue ] ≫</div>
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
          <div id="" class="articleCardTitle cor36 fz30">[ vue ] ≫</div>
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
