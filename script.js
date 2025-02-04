new Vue({
  el: '#app',
  data: {
    items: [
      { name: '花', blue: 0, green: 0, white: 0 },
      { name: '香菇', blue: 0, green: 0, white: 0 },
      { name: '考古', blue: 0, green: 0, white: 0 },
      { name: '木頭', blue: 0, green: 0, white: 0 },
      { name: '石頭', blue: 0, green: 0, white: 0 },
      { name: '魚', blue: 0, green: 0, white: 0 }
    ]
  },
  methods: {
    // 用來計算 B 表格中的成本
    calculateCost(value) {
      return value ? (value / 10).toFixed(2) : 0;
    },
    // 更新B表格的數值
    updateB() {
      this.items.forEach(item => {
        item.blue = item.blue;
        item.green = item.green;
        item.white = item.white;
      });
    }
  }
});