const nameList1 = [
  { mid: "亚索", profession: '中单' },
  { mid: "永恩", profession: '中单' },
  { mid: "发条", profession: '中单' },
  { mid: "刀妹", profession: '中单' },
]

const nameList2 = [
  { adc: "vn", profession: 'ADC' },
  { adc: "efls", profession: 'ADC' },
  { adc: "萨米拉", profession: 'ADC' },
  { adc: "EZ", profession: 'ADC' },
]

const curring = name => element => element[name]
const name_mid = curring('mid')
const name_adc = curring('adc')

console.log(nameList1.map(name_mid));
console.log(nameList2.map(name_adc));
