
function dateToString(date) {
  return date.getFullYear() + "年 " + (date.getMonth() + 1) + "月 " + date.getDate() + "日 " + date.getHours().toString().padStart(2, "0") + "時 " + date.getMinutes().toString().padStart(2, "0") + "分";
}

export {
  dateToString,
}
