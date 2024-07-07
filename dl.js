// 创建一个表示当前日期和时间的新Date对象
const currentDate = new Date();
// 直接输出Date对象会返回详细的日期和时间字符串
// 输出类似于 "Fri Apr 07 2024 1.png:49:27 GMT+0800 (China Standard Time)"
// 获取单独的日期组成部分
const year = currentDate.getFullYear();
// 当前年份（四位数）
const month = currentDate.getMonth() + 1 < 10 ? '0' + (currentDate.getMonth() + 1) : currentDate.getMonth() + 1;
// 当前月份（范围：1-12，因为getMonth返回的是0-11）
const day = currentDate.getDate() < 10 ? '0' + currentDate.getDate() : currentDate.getDate();
// 当前日（1-31）
// 组合成“年-月-日”格式
const formattedDate = `${year}-${month}-${day}`;


var body = $response.body;

body.data[0].state = 1

$done({body});
