class Calendar {
  constructor() {
    this.date = new Date();
    this.s = document.querySelector(".s");
    this.x = document.querySelector(".x");
    this.rl = document.querySelector("#data");
    this.YearDom = document.querySelector("#year");
    this.MonthDom = document.querySelector("#month");
    this.atMonth = this.date.getMonth();
    this.atYear = this.date.getFullYear(); // 获取当前年份
    this.MonthArr = [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月",
    ];
    this.init();
  }

  init() {
    this.render();
    this.event();
  }
  render() {
    this.html = "";
    this.rl.innerHTML = "";
    this.atDay = this.date.getDate(); // 获取当前
    this.Year = this.date.getFullYear(); // 获取当前年份
    this.Month = this.date.getMonth(); // 获取当前月份
    this.YearDom.innerHTML = this.Year;
    this.MonthDom.innerHTML = this.MonthArr[this.Month];
    this.zhou = new Date(this.Year, this.Month, 1).getDay();
    this.days = new Date(this.Year, this.Month, -1).getDate() + 1;

    for (let i = 0; i < this.zhou; i++) {
      this.html += "<li></li>";
    }

    for (let i = 1; i <= this.days; i++) {
      if (i == this.atDay && this.atMonth == this.Month && this.atYear == this.Year) {
        this.html += `<li style="background:skyblue">${i}</li>`;
      } else {
        this.html += `<li>${i}</li>`;
      }
    }
    this.rl.innerHTML = this.html;
  }
  event() {
    this.s.addEventListener("click", () => {
      this.upMonth();
    });
    this.x.addEventListener("click", () => {
      this.downMonth();
    });
  }
  upMonth() {
    this.Month = this.date.setMonth(this.date.getMonth() - 1);
    this.render();
  }
  downMonth() {
    this.Month = this.date.setMonth(this.date.getMonth() + 1);
    this.render();
  }
}

export { Calendar }