const moment = require('moment');
// let time = moment('2018-08-13T00:00:00.000Z').utc();
// console.log(time.format("YYYYMM"));
// let timeofWeek = moment.utc().endOf('week');
// console.log(timeofWeek);
// let timeOfIsoWeek = moment.utc().endOf('isoWeek');
// console.log(timeOfIsoWeek);
// let weekInYear = moment.utc().weeksInYear();
// let weekOfYear = moment.utc().isoWeek();
// let partitionScheme = 'weekly';
// let week = weekOfYear + partitionScheme === 'weekly' ? `_${pad(2, weekOfYear, '0')}` : '';
// console.log(partitionScheme == 'weekly');
// console.log(new Date());
let startDate = moment('2018-01-01T00:00:00.000Z').utc();
let endDate = moment('2018-01-07T02:00:00.000Z').utc();
console.log(startDate.unix());
console.log(endDate.unix());
console.log(moment().utc().startOf('year'));
let condition = 0;
let time = moment();
console.log(time.hour());
let batch = time.add(2, 'h');
console.log(time.hour());
while(condition<1) {
  console.log(time);
  console.log(batch);
  condition  = 2;
}
