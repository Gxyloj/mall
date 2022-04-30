export function debounce(func, delay) {
  let timer = null
  return function (...args){
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this.args)
    },delay)
  }
}

export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}
function padLeftZero (str) {
  return ('00' + str).substr(str.length);
}

export function scrollToTop(position) {
  // 获取当前元素滚动的距离
  let scrollTopDistance = document.documentElement.scrollTop || document.body.scrollTop;

  function smoothScroll() {
    // 如果你要滚到顶部，那么position传过来的就是0，下面这个distance肯定就是负值。
    let distance = position - scrollTopDistance;
    // 每次滚动的距离要不一样，制造一个缓冲效果
    scrollTopDistance = scrollTopDistance + distance / 20;
    // 判断条件
    if (Math.abs(distance) < 1) {
      window.scrollTo(0, position);
    } else {
      window.scrollTo(0, scrollTopDistance);
      requestAnimationFrame(smoothScroll);
    }
  }

  smoothScroll();
}


export function getCart(){

}
