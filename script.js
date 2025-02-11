new Vue({
  el: '#app',
  data: {
    // A 表格資料
    items: [
      { name: '花', blue: 0, green: 0, white: 0 },
      { name: '香菇', blue: 0, green: 0, white: 0 },
      { name: '考古', blue: 0, green: 0, white: 0 },
      { name: '木頭', blue: 0, green: 0, white: 0 },
      { name: '石頭', blue: 0, green: 0, white: 0 },
      { name: '魚(綠珍珠)', blue: 0, green: 0, white: 0 },
      { name: '狩獵(綠皮革)', blue: 0, green: 0, white: 0 }
    ],

    // D 表格資料 (X% 影響製作手續費)
    itemsD: [
      { name: '製作手續費', X: 0 },  // X 代表減少的百分比，預設為 0
    ],
    
        // E 表格資料 (Y% 影響製作手續費)
    itemsE: [
      { name: '製作手續費', Y: 0 },  // Y 代表減少的百分比，預設為 0
    ],
    
    
    // C 表格資料
    cItems: [
      { name: "中級奧雷哈(狩獵)", material1: 0, material2: 0, material3: 0, material4: 0, material5: 0, productionFee: 0, quantity: 30, marketPrice: 0, productionCostPerUnit: 0, listingFee: 0, totalCost: 0, profit: 0 },
      { name: "高級奧雷哈(狩獵)", material1: 0, material2: 0, material3: 0, material4: 0, material5: 0, productionFee: 0, quantity: 20, marketPrice: 0, productionCostPerUnit: 0, listingFee: 0, totalCost: 0, profit: 0 },
      { name: "中級奧雷哈(釣魚)", material1: 0, material2: 0, material3: 0, material4: 0, material5: 0, productionFee: 0, quantity: 30, marketPrice: 0, productionCostPerUnit: 0, listingFee: 0, totalCost: 0, profit: 0 },
      { name: "高級奧雷哈(釣魚)", material1: 0, material2: 0, material3: 0, material4: 0, material5: 0, productionFee: 0, quantity: 20, marketPrice: 0, productionCostPerUnit: 0, listingFee: 0, totalCost: 0, profit: 0 },
      { name: "中級奧雷哈(考古)", material1: 0, material2: 0, material3: 0, material4: 0, material5: 0, productionFee: 0, quantity: 30, marketPrice: 0, productionCostPerUnit: 0, listingFee: 0, totalCost: 0, profit: 0 },
      { name: "高級奧雷哈(考古)", material1: 0, material2: 0, material3: 0, material4: 0, material5: 0, productionFee: 0, quantity: 20, marketPrice: 0, productionCostPerUnit: 0, listingFee: 0, totalCost: 0, profit: 0 }
    ],
    fItems: [
      { name: "高級恢復藥", material1: 0, material2: 0, material3: 0, material4: 0, material5: 0, productionFee: 0, quantity: 3, marketPrice: 0, productionCostPerUnit: 0, listingFee: 0, totalCost: 0, profit: 0 },
      { name: "精靈恢復藥", material1: 0, material2: 0, material3: 0, material4: 0, material5: 0, productionFee: 0, quantity: 3, marketPrice: 0, productionCostPerUnit: 0, listingFee: 0, totalCost: 0, profit: 0 },
      { name: "閃耀精靈恢復藥", material1: 0, material2: 0, material3: 0, material4: 0, material5: 0, productionFee: 0, quantity: 2, marketPrice: 0, productionCostPerUnit: 0, listingFee: 0, totalCost: 0, profit: 0 },
      { name: "亞德路酚藥水", material1: 0, material2: 0, material3: 0, material4: 0, material5: 0, productionFee: 0, quantity: 3, marketPrice: 0, productionCostPerUnit: 0, listingFee: 0, totalCost: 0, profit: 0 },
      { name: "覺醒藥水", material1: 0, material2: 0, material3: 0, material4: 0, material5: 0, productionFee: 0, quantity: 3, marketPrice: 0, productionCostPerUnit: 0, listingFee: 0, totalCost: 0, profit: 0 },
      { name: "破壞炸彈", material1: 0, material2: 0, material3: 0, material4: 0, material5: 0, productionFee: 0, quantity: 3, marketPrice: 0, productionCostPerUnit: 0, listingFee: 0, totalCost: 0, profit: 0 },
      { name: "暗黑手榴彈", material1: 0, material2: 0, material3: 0, material4: 0, material5: 0, productionFee: 0, quantity: 3, marketPrice: 0, productionCostPerUnit: 0, listingFee: 0, totalCost: 0, profit: 0 },
      { name: "閃耀暗黑手榴彈", material1: 0, material2: 0, material3: 0, material4: 0, material5: 0, productionFee: 0, quantity: 2, marketPrice: 0, productionCostPerUnit: 0, listingFee: 0, totalCost: 0, profit: 0 }
	],
	
	// 物品名稱與對應製作手續費的對照表
  productionFeeMap: {
    "高級恢復藥": 15,
    "精靈恢復藥": 30,
    "閃耀精靈恢復藥": 30,
    "亞德路酚藥水": 30,
    "覺醒藥水": 30,
    "破壞炸彈": 15,
    "暗黑手榴彈": 15,
    "閃耀暗黑手榴彈": 15
  }
   
    
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
let materialTotal = (parseFloat(row.material1) || 0) + (parseFloat(row.material2) || 0) + (parseFloat(row.material3) || 0) + (parseFloat(row.material4) || 0) + (parseFloat(row.material5) || 0);
      // 設定基礎製作手續費 (中級 205, 高級 250)
      let baseProductionFee = row.name.includes("中級") ? 205 : 250;   
      // 根據 D 表格的數值影響製作手續費
      let adjustedFee = baseProductionFee * ((100 - this.itemsD[0].X) / 100);
      // **無條件捨去**
      adjustedFee = Math.floor(adjustedFee);
      // 更新 C 表格的製作手續費
      this.$set(row, 'productionFee', adjustedFee);
        // 2. 計算材料1-3，根據名稱判斷對應的計算規則
      if (row.name === "中級奧雷哈(狩獵)") {
    let huntingItem = this.computedItems.find(item => item.name === '狩獵(綠皮革)');
    this.$set(row, 'material1', (huntingItem.blue * 10).toFixed(2));
    this.$set(row, 'material2', (huntingItem.green * 40).toFixed(2));
    this.$set(row, 'material3', (huntingItem.white * 80).toFixed(2));
} else if (row.name === "高級奧雷哈(狩獵)") {
    let huntingItem = this.computedItems.find(item => item.name === '狩獵(綠皮革)');
    this.$set(row, 'material1', (huntingItem.blue * 16).toFixed(2));
    this.$set(row, 'material2', (huntingItem.green * 64).toFixed(2));
    this.$set(row, 'material3', (huntingItem.white * 128).toFixed(2));
} else if (row.name === "中級奧雷哈(釣魚)") {
    let fishingItem = this.computedItems.find(item => item.name === '魚(綠珍珠)');
    this.$set(row, 'material1', (fishingItem.blue * 10).toFixed(2));
    this.$set(row, 'material2', (fishingItem.green * 40).toFixed(2));
    this.$set(row, 'material3', (fishingItem.white * 80).toFixed(2));
} else if (row.name === "高級奧雷哈(釣魚)") {
    let fishingItem = this.computedItems.find(item => item.name === '魚(綠珍珠)');
    this.$set(row, 'material1', (fishingItem.blue * 16).toFixed(2));
    this.$set(row, 'material2', (fishingItem.green * 64).toFixed(2));
    this.$set(row, 'material3', (fishingItem.white * 128).toFixed(2));
} else if (row.name === "中級奧雷哈(考古)") {
    let archaeologyItem = this.computedItems.find(item => item.name === '考古');
    this.$set(row, 'material1', (archaeologyItem.blue * 8).toFixed(2));
    this.$set(row, 'material2', (archaeologyItem.green * 26).toFixed(2));
    this.$set(row, 'material3', (archaeologyItem.white * 64).toFixed(2));
} else if (row.name === "高級奧雷哈(考古)") {
    let archaeologyItem = this.computedItems.find(item => item.name === '考古');
    this.$set(row, 'material1', (archaeologyItem.blue * 16).toFixed(2));
    this.$set(row, 'material2', (archaeologyItem.green * 29).toFixed(2));
    this.$set(row, 'material3', (archaeologyItem.white * 94).toFixed(2));
}
        // 4. 計算「製作成本/個」 = (原料總和 + 調整後的製作手續費) / 數量
        let productionCostPerUnit = ((materialTotal + adjustedFee) / row.quantity).toFixed(2);
        // 5-1. 計算 上架手續費/個 = 市價 × 5% 並進行無條件進位
        let listingFee = Math.ceil(row.marketPrice * 0.05);
        // 6. 計算「總成本」= 製作成本/個 + 上架手續費
        let totalCost = (parseFloat(productionCostPerUnit) + parseFloat(listingFee)).toFixed(2);
        // 7. 計算「利潤」= 市價 - 總成本
        let profit = (row.marketPrice - totalCost).toFixed(2);
        // 8. 更新 Vue 變數，確保畫面同步更新
        this.$set(row, 'productionFee', adjustedFee);// 更新該行的「製作手續費」，並保留兩位小數
        this.$set(row, 'productionCostPerUnit', productionCostPerUnit);// 更新該行的「製作成本/個」
        this.$set(row, 'listingFee', listingFee);// 更新該行的「上架手續費」
        this.$set(row, 'totalCost', totalCost);// 更新該行的「總成本」
        this.$set(row, 'profit', profit);// 更新該行的「利潤」
      });
    },
      
      // 更新 F 表格數據
	    updateFTable() {
      this.fItems.forEach(row => {
        // 1. 計算原料的總成本（所有材料的總和）
      let materialTotal = (parseFloat(row.material1) || 0) + (parseFloat(row.material2) || 0) + (parseFloat(row.material3) || 0) + (parseFloat(row.material4) || 0) + (parseFloat(row.material5) || 0);
      // 設定基礎製作手續費(data中設置)
      let baseProductionFee = this.productionFeeMap[row.name] || 0;   
      // 根據 E 表格的數值影響製作手續費
      let adjustedFee = baseProductionFee * ((100 - this.itemsE[0].Y) / 100);
      // **無條件捨去**
      adjustedFee = Math.floor(adjustedFee);
      // 更新 F 表格的製作手續費
      this.$set(row, 'productionFee', adjustedFee);
        // 2. 計算材料1-5，根據名稱判斷對應的計算規則
      if (row.name === "高級恢復藥") {
    let flowersItem = this.computedItems.find(item => item.name === '花');
    this.$set(row, 'material1', (flowersItem.green * 9).toFixed(2));
    this.$set(row, 'material2', (flowersItem.white * 18).toFixed(2));
} else if (row.name === "精靈恢復藥") {
    let flowersItem = this.computedItems.find(item => item.name === '花');
    this.$set(row, 'material1', (flowersItem.blue * 6).toFixed(2));
    this.$set(row, 'material2', (flowersItem.green * 24).toFixed(2));
    this.$set(row, 'material3', (flowersItem.white * 48).toFixed(2));
} else if (row.name === "閃耀精靈恢復藥") {
    let flowersItem = this.computedItems.find(item => item.name === '花');
	let spiritPotionCost = parseFloat(this.fItems.find(item => item.name === "精靈恢復藥").productionCostPerUnit) || 0;
    this.$set(row, 'material1', (spiritPotionCost * 3).toFixed(2));  // 計算 閃耀精靈恢復藥 的 材料1
    this.$set(row, 'material2', (flowersItem.blue * 8).toFixed(2));
}  else if (row.name === "亞德路酚藥水") {
    let flowersItem = this.computedItems.find(item => item.name === '花');
    let stoneItem = this.computedItems.find(item => item.name === '石頭');
    let archaeologyItem = this.computedItems.find(item => item.name === '考古');
    this.$set(row, 'material1', (flowersItem.blue * 6).toFixed(2));
    this.$set(row, 'material2', (stoneItem.blue * 2).toFixed(2));
    this.$set(row, 'material3', (flowersItem.green * 24).toFixed(2));
    this.$set(row, 'material4', (archaeologyItem.green * 2).toFixed(2));
    this.$set(row, 'material5', (flowersItem.white * 48).toFixed(2));
} else if (row.name === "覺醒藥水") {
    let mushroomItem = this.computedItems.find(item => item.name === '香菇');
    let woodItem = this.computedItems.find(item => item.name === '木頭');
    let archaeologyItem = this.computedItems.find(item => item.name === '考古');
    this.$set(row, 'material1', (mushroomItem.blue * 5).toFixed(2));
    this.$set(row, 'material2', (mushroomItem.green * 20).toFixed(2));
    this.$set(row, 'material3', (woodItem.blue * 2).toFixed(2));
    this.$set(row, 'material4', (archaeologyItem.green * 4).toFixed(2));
    this.$set(row, 'material5', (mushroomItem.white * 40).toFixed(2));
} else if (row.name === "破壞炸彈") {
    let mushroomItem = this.computedItems.find(item => item.name === '香菇');
    let stoneItem = this.computedItems.find(item => item.name === '石頭');
    this.$set(row, 'material1', (mushroomItem.blue * 4).toFixed(2));
    this.$set(row, 'material2', (mushroomItem.green * 12).toFixed(2));
    this.$set(row, 'material3', (stoneItem.green * 6).toFixed(2));
    this.$set(row, 'material4', (mushroomItem.white * 32).toFixed(2));
} else if (row.name === "暗黑手榴彈") {
    let mushroomItem = this.computedItems.find(item => item.name === '香菇');
    let woodItem = this.computedItems.find(item => item.name === '木頭');
    this.$set(row, 'material1', (mushroomItem.blue * 3).toFixed(2));
    this.$set(row, 'material2', (mushroomItem.green * 12).toFixed(2));
    this.$set(row, 'material3', (woodItem.green * 3).toFixed(2));
    this.$set(row, 'material4', (mushroomItem.white * 24).toFixed(2));
} else if (row.name === "閃耀暗黑手榴彈") {
    let mushroomItem = this.computedItems.find(item => item.name === '香菇');
	let spiritPotionCost = parseFloat(this.fItems.find(item => item.name === "暗黑手榴彈").productionCostPerUnit) || 0;
	this.$set(row, 'material1', (spiritPotionCost * 3).toFixed(2));  // 計算 閃耀暗黑手榴彈 的 材料1
    this.$set(row, 'material2', (mushroomItem.blue * 4).toFixed(2));
}
        // 4. 計算「製作成本/個」 = (原料總和 + 調整後的製作手續費) / 數量
        let productionCostPerUnit = ((materialTotal + adjustedFee) / row.quantity).toFixed(2);
        // 5-1. 計算 上架手續費/個 = 市價 × 5% 並進行無條件進位
        let listingFee = Math.ceil(row.marketPrice * 0.05);
        // 6. 計算「總成本」= 製作成本/個 + 上架手續費
        let totalCost = (parseFloat(productionCostPerUnit) + parseFloat(listingFee)).toFixed(2);
        // 7. 計算「利潤」= 市價 - 總成本
        let profit = (row.marketPrice - totalCost).toFixed(2);
        // 8. 更新 Vue 變數，確保畫面同步更新
        this.$set(row, 'productionFee', adjustedFee);// 更新該行的「製作手續費」，並保留兩位小數
        this.$set(row, 'productionCostPerUnit', productionCostPerUnit);// 更新該行的「製作成本/個」
        this.$set(row, 'listingFee', listingFee);// 更新該行的「上架手續費」
        this.$set(row, 'totalCost', totalCost);// 更新該行的「總成本」
        this.$set(row, 'profit', profit);// 更新該行的「利潤」
      });
    }
    
    
    
  },

  // 當畫面載入時，自動執行一次 updateCTable() updateFTable()
  mounted() {
  // 更新 C 表格
  this.cItems.forEach(item => {
    this.updateCTable(item); // 確保對每個項目進行計算
  });

  // 更新 F 表格
  this.fItems.forEach(item => {
    this.updateFTable(item); // 確保對每個項目進行計算
  });
  },

  watch: {
  // 監控 'items' (A 表格資料) 的變化
  'items': {
    // 當 'items' 中的資料發生變化時，執行這個 handler 函數
    handler() {
      // 呼叫 updateCTable() 函數來更新 C 表格的資料
      this.updateCTable();
	  
	    // 呼叫 updateFTable() 函數來更新 F 表格的資料
      this.updateFTable();
    },
    // deep: true 會監控物件內部屬性的變化
    deep: true
  },
  
    
  // 監控 'itemsD' (D 表格資料) 的變化
  'itemsD': {
    // 當 'itemsD' 中的資料發生變化時，執行這個 handler 函數
    handler() {
      // 呼叫 updateCTable() 函數來更新 C 表格的資料
      this.updateCTable();
    },
    // deep: true 會監控物件內部屬性的變化
    deep: true
  },
    
    
    // 監控 'itemsE' (E 表格資料) 的變化
      'itemsE': {
    // 當 'itemsE' 中的資料發生變化時，執行這個 handler 函數
    handler() {
      // 呼叫 updateFTable() 函數來更新 F 表格的資料
      this.updateFTable();
    },
    // deep: true 會監控物件內部屬性的變化
    deep: true
  }
  
}

  
});