new Vue({
  el: '#app',
  data: {
    // A 表格資料
    items: [
      { name: '花', blue: 10, green: 10, white: 10 },
      { name: '香菇', blue: 10, green: 10, white: 10 },
      { name: '考古', blue: 10, green: 10, white: 10 },
      { name: '木頭', blue: 10, green: 10, white: 10 },
      { name: '石頭', blue: 10, green: 10, white: 10 },
      { name: '魚(綠珍珠)', blue: 10, green: 10, white: 10 },
      { name: '狩獵(綠皮革)', blue: 10, green: 10, white: 10 }
    ],

    // D 表格資料 (X% 影響製作手續費)
    itemsD: [
      { name: '製作手續費', X: 0 },  // X 代表減少的百分比，預設為 0
    ],

    // C 表格資料
    cItems: [
      { name: "中級奧雷哈(狩獵)", material1: 0, material2: 0, material3: 0, material4: 0, material5: 0, productionFee: 0, quantity: 30, marketPrice: 0, productionCostPerUnit: 0, listingFee: 0, totalCost: 0, profit: 0 },
      { name: "高級奧雷哈(狩獵)", material1: 0, material2: 0, material3: 0, material4: 0, material5: 0, productionFee: 0, quantity: 20, marketPrice: 0, productionCostPerUnit: 0, listingFee: 0, totalCost: 0, profit: 0 },
      { name: "中級奧雷哈(釣魚)", material1: 0, material2: 0, material3: 0, material4: 0, material5: 0, productionFee: 0, quantity: 30, marketPrice: 0, productionCostPerUnit: 0, listingFee: 0, totalCost: 0, profit: 0 },
      { name: "高級奧雷哈(釣魚)", material1: 0, material2: 0, material3: 0, material4: 0, material5: 0, productionFee: 0, quantity: 20, marketPrice: 0, productionCostPerUnit: 0, listingFee: 0, totalCost: 0, profit: 0 },
      { name: "中級奧雷哈(考古)", material1: 0, material2: 0, material3: 0, material4: 0, material5: 0, productionFee: 0, quantity: 30, marketPrice: 0, productionCostPerUnit: 0, listingFee: 0, totalCost: 0, profit: 0 },
      { name: "高級奧雷哈(考古)", material1: 0, material2: 0, material3: 0, material4: 0, material5: 0, productionFee: 0, quantity: 20, marketPrice: 0, productionCostPerUnit: 0, listingFee: 0, totalCost: 0, profit: 0 }
    ]
  },

  computed: {
    // 計算 B 表格數據
    computedItems() {
      return this.items.map(item => ({
        name: item.name,
        blue: (item.blue / 10).toFixed(2),  // A 表格的數值 ÷ 10
        green: (item.green / 10).toFixed(2), // A 表格的數值 ÷ 10
        white: (item.white / 100).toFixed(2) // A 表格的數值 ÷ 100
      }));
    }
  },

  methods: {
    // 更新 C 表格數據
    updateCTable() {
      this.cItems.forEach(row => {
        // 1. 計算原料的總成本（所有材料的總和）
        let materialTotal = row.material1 + row.material2 + row.material3 + row.material4 + row.material5;

      // 設定基礎製作手續費 (中級 205, 高級 250)
      let baseProductionFee = row.name.includes("中級") ? 205 : 250;
      
      // 根據 D 表格的數值影響製作手續費
      let adjustedFee = baseProductionFee * ((100 - this.itemsD[0].X) / 100);
      
      // 更新 C 表格的製作手續費
      this.$set(row, 'productionFee', adjustedFee.toFixed(2));

        // 4. 計算「製作成本/個」 = (原料總和 + 調整後的製作手續費) / 數量
        let productionCostPerUnit = ((materialTotal + adjustedFee) / row.quantity).toFixed(2);

           // 5-1. 上架手續費 先計算 市價 × 數量
        let rawTotalPrice = row.marketPrice * 0.05 ;

        // 5-2. 無條件進位（Math.ceil 讓有小數點的數值直接進位）
        let roundedTotalPrice = Math.ceil(rawTotalPrice);

        // 5-3. 計算上架手續費（進位後的數值 × 5%）
        let listingFee = Math.ceil(roundedTotalPrice * row.quantity);

        // 6. 計算「總成本」= 製作成本/個 + 上架手續費
        let totalCost = (parseFloat(productionCostPerUnit) + parseFloat(listingFee)).toFixed(2);

        // 7. 計算「利潤」= 市價 - 總成本
        let profit = (row.marketPrice - totalCost).toFixed(2);

        // 8. 更新 Vue 變數，確保畫面同步更新
        this.$set(row, 'productionFee', adjustedFee.toFixed(2));
        this.$set(row, 'productionCostPerUnit', productionCostPerUnit);
        this.$set(row, 'listingFee', listingFee);
        this.$set(row, 'totalCost', totalCost);
        this.$set(row, 'profit', profit);
      });
    }
  },

  // 當畫面載入時，自動執行一次 updateCTable()
  mounted() {
    this.updateCTable();
  },

  // 監聽 D 表格的「X%」，當它變化時，自動更新 C 表格數據
watch: {
  'itemsD': {
    handler() {
      this.updateCTable();  // 當 D 表格變化時，重新計算 C 表格
    },
    deep: true  // 監聽物件內部屬性的變化
  }
}

  
});