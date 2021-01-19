// 蓝湖上设计稿自定义为375px 测量值直接写入即可
(function () {
  const baseSize = 16 // 32
  function setRem () {
    const scale = document.documentElement.clientWidth / 375 // 750
    document.documentElement.style.fontSize =
      baseSize * Math.min(scale, 2) + 'px'
  }

  window.onresize = function () {
    setRem()
  }
})()
