new Vue({
  el: '#app',
  data: {
    items: [
      { name: '花', blue: 10, green: 10, white: 10 },
      { name: '香菇', blue: 10, green: 10, white: 10 },
      { name: '考古', blue: 10, green: 10, white: 10 },
      { name: '木頭', blue: 10, green: 10, white: 10 },
      { name: '石頭', blue: 10, green: 10, white: 10 },
      { name: '魚(綠珍珠)', blue: 10, green: 10, white: 10 },
      { name: '狩獵(綠皮革)', blue: 10, green: 10, white: 10 }
    ],
    productionCost: 0  // 用於保存 D 表格的輸入數字
  },
  computed: {
    computedItems() {
      return this.items.map(item => ({
        name: item.name,
        blue: (item.blue / 10).toFixed(2),  // A 表格的數值 ÷ 10
        green: (item.green / 10).toFixed(2), // A 表格的數值 ÷ 10
        white: (item.white / 100).toFixed(2) // A 表格的數值 ÷ 100
      }));
    }
  }
});