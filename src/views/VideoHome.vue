<template>
  <div class="video-home">
    <div class="nav">
      <div>
        <span class="flow-icon">
          <span class="icon flow"></span>
        </span>
        <span>接单邀请</span>
      </div>
      <div>
        <span class="cpc-icon">
          <span class="icon home"></span>
        </span>
        <span>有赚</span>
      </div>
    </div>
    <div class="main">
      <div class="top">
        <div class="bg"></div>
        <div class="slogo">
          <span class="logo"></span>
          <span>视频直投、万粉计价的广告交易平台</span>
        </div>
        <div class="level-wrap">
          <div class="circles-wrap">
            <div class="level-one">
              <div class="face face-one">
                <div class="circle"></div>
              </div>
              <div class="circle-one"></div>
              <div class="circle-two"></div>
              <div class="circle-three"></div>
            </div>
            <div class="level-two">
              <div class="face face-two">
                <div class="circle"></div>
              </div>
            </div>
            <div class="level-three"></div>
            <div class="level-four">
              <div class="face face-four">
                <div class="circle"></div>
              </div>
            </div>
            <div class="level-five">
              <span class="level-name">视频宝<br/>接&nbsp;单</span>
            </div>
          </div>
        </div>
         <div class="circle-ring-one">
            <div class="ring-in"></div>
          </div>
          <div class="circle-ring-two">
            <div class="ring-in"></div>
          </div>
      </div>
      <div class="tabs">
        <div class="row-tabs">
          <div class="item-tab">
            <span class="tab-icon account"></span>
            <span>账号管理</span>
          </div>
          <div class="item-tab">
            <span class="tab-icon order"></span>
            <span>订单管理</span>
          </div>
        </div>
        <div class="row-tabs">
          <div class="item-tab">
            <span class="tab-icon cash"></span>
            <span>即时提现</span>
          </div>
          <div class="item-tab">
            <span class="tab-icon help"></span>
            <span>帮助中心</span>
          </div>
        </div>
      </div>
    </div>
    <div class="foot">新榜 · 有赚</div>
  </div>
</template>

<script>
export default {
  name: 'VideoHome',
  components: {},
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.video-home{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  .nav{
    position: fixed;
    top: 15px;
    right:8px;
    font-size: 12px;
    font-weight: lighter;
    width: 120px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index:99;
    color: #fff;
    div{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 60px;
      word-break: keep-all;
    }
    .flow-icon, .cpc-icon{
      width:34px;
      height:34px;
      background:rgba(255,255,255,0.2);
      border-radius:50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 4px;
      .icon{
        width: 20px;
        height: 20px;
        &.flow{
          background: url('../assets/img/common/youzhuan_flow.svg') no-repeat center;
        }
        &.home{
          background: url('../assets/img/common/youzhuan_home.svg') no-repeat center;
        }

      }
    }
  }
  .main{
    display: flex;
    flex-direction: column;
    flex: 1;
    .top{
      position: relative;
      color: #fff;
      flex: 0.7;
      display: flex;
      flex-direction: column;
      background: url('../assets/img/video/home_bg.svg') no-repeat bottom/120%;
    }
    .bg{
      width: 100%;
      height: 80%;
      position: absolute;
      background: url('../assets/img/video/home_bg.svg') no-repeat top/120%;
    }
    .slogo{
      display: flex;
      align-items: center;
      margin-top: 25px;
      margin-left: 16px;
      font-size: 12px;
      z-index: 1;
      .logo{
        width: 12px;
        height: 12px;
        margin-right: 2px;
        background: url('../assets/img/video/video_logo.svg') no-repeat center;
      }
    }
    .level-wrap{
      width: 100%;
      height: 200px;
      position: absolute;
      top: 24px;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 999;
      .level-name{
        font-size: 18px;
        font-weight: bold;
        color:#FF7733;
        text-align: center;
      }
      .level-five{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        left:50%;
        top:50%;
        margin-left: -40px;
        margin-top: -40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .level-four{
        width: 96px;
        height: 96px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.7);
        position: absolute;
        left:50%;
        top:50%;
        margin-left: -48px;
        margin-top: -48px;
      }
      .level-three{
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background:linear-gradient(225deg,rgba(255,110,46,1) 0%,rgba(255,167,89,0) 100%);
        position: absolute;
        left:50%;
        top:50%;
        margin-left: -60px;
        margin-top: -60px;
      }
      .level-two{
        width: 144px;
        height: 144px;
        border-radius: 50%;
        background:linear-gradient(181deg,rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 100%);
        position: absolute;
        left:50%;
        top:50%;
        margin-left: -72px;
        margin-top: -72px;
      }
      .level-one{
        width: 166px;
        height: 166px;
        border-radius: 50%;
        background:linear-gradient(181deg,rgba(255,255,255,0.2) 0%,rgba(255,255,255,0) 100%);
        position: absolute;
        left:50%;
        top:50%;
        margin-left: -83px;
        margin-top: -83px;
      }
    }
    .circles-wrap{
      position: relative;
      width: 166px;
      height: 166px;
      margin: auto;
    }
    .circle-ring-one{
      position: absolute;
      width: 160px;
      height: 160px;
      background-color: #fff;
      opacity: 0.05;
      border-radius: 50%;
      top:-60px;
      left: -70px;
    }
    .circle-ring-two{
      position: absolute;
      width: 160px;
      height: 160px;
      background-color: #fff;
      opacity: 0.05;
      border-radius: 50%;
      bottom:0;
      right: -80px;
      
    }
    .ring-in{
      position: absolute;
      width: 90px;
      height: 90px;
      background:linear-gradient(225deg,rgba(255,110,46,1) 0%,rgba(255,167,89,1) 100%);
      border-radius: 50%;
      left: 50%;
      top: 50%;
      margin-left: -45px;
      margin-top: -45px;
    }
    .circle-one{
      position: absolute;
      width:8px;
      height:8px;
      background:linear-gradient(270deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
      border-radius:50%;
      opacity:1;
      right: -20px;
      top: 90px;
    }
    .circle-two{
      position: absolute;
      width:4px;
      height:4px;
      background:linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
      border-radius:50%;
      opacity:1;
      left: 20px;
      top: 30px;
      opacity: 0.8;
    }
    .circle-three{
      position: absolute;
      width:9px;
      height:9px;
      background:linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
      border-radius:50%;
      left: -10px;
      top: 40px;
    }
    .face{
      width: 144px;
      height: 144px;
      position: absolute;
      border: solid;
      border-color: white transparent transparent transparent;
      border-radius: 50%;
      border-width: 1px 1px 0 0;
      animation: circleAn 5s linear infinite;
    }
    .face .circle{
      position: absolute;
      width: 50%;
      height: 2px;
      top:26%;
      left: 43.5%;
      background-color: transparent;
      transform: rotate(var(--deg));
      transform-origin: left;
    }
    .face-one{
      width: 166px;
      height: 166px;
      position: absolute;
      border-radius: 50%;
      border-color: transparent transparent #fff transparent;
      border-width: 0 1px 1px 0;
      animation: circleAn 6s linear infinite;
      animation-direction: reverse;
    }
    .face-one .circle{
      position: absolute;
      width: 50%;
      height: 2px;
      top:86.9%;
      left: 35%;
      background-color: transparent;
      transform: rotate(var(--deg));
      transform-origin: left;
    }
    .face-two{
      width: 144px;
      height: 144px;
      position: absolute;
      border: solid;
      border-color: white transparent transparent transparent;
      border-radius: 50%;
      border-width: 1px 1px 0 0;
    }
    .face-two .circle{
      position: absolute;
      width: 50%;
      height: 2px;
      top:15%;
      left: 34%;
      background-color: transparent;
      transform: rotate(var(--deg));
      transform-origin: left;
    }
    .face-four{
      width: 96px;
      height: 96px;
      position: absolute;
      border-color: white white transparent transparent;
      border-width: 1px 0 0 1px;
      animation: circleAn 4s linear infinite;
      animation-direction: reverse;
    }
    .face-four .circle{
      position: absolute;
      width: 50%;
      height: 2px;
      top:15%;
      left: -36%;
      background-color: transparent;
      transform: rotate(var(--deg));
      transform-origin: left;
    }
      
    .face .circle::before{
      position: absolute;
      top:-4px;
      right: -4px;
      content:'';
      width: 5px;
      height: 5px;
      background-color: #fff;
      border-radius: 50%;
    }
    @keyframes circleAn{
      to{
        transform: rotate(1turn);
      }
    }

    .tabs {
      flex: 0.3;
      padding: 16px 32px;
      display: flex;
      flex-wrap: wrap;
      .row-tabs{
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
      .item-tab{
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        > span {
            margin-top: 4px;
            font-size: 14px;
            position: relative;
            color: #565958;
          }
      }
      .tab-icon{
        width: 26px;
        height: 26px;
        &.account{
          background: url('../assets/img/video/account_icon.svg') no-repeat center;
        }
        &.order{
          background: url('../assets/img/video/order_icon.svg') no-repeat center;
          position: relative;
          .dot{
            position: absolute;
            padding: 0 4px;
            height: 18px;
            line-height: 18px;
            text-align: center;
            border-radius: 9px;
            border-bottom-left-radius: 0;
            background-color: #f96268;
            color: #fff;
            right: -10px;
            top: -10px;
            font-size: 12px;
            transform: scale(0.8);
          }
        }
        &.cash{
          background: url('../assets/img/video/cash_icon.svg') no-repeat center;
        }
        &.help{
          background: url('../assets/img/video/help_icon.svg') no-repeat center;
        }
      }
    }
  }

  .foot{
    padding: 16px 0 32px;
    color: #ccc;
    text-align: center;
    letter-spacing: 1px;
    font-size: 14px;
  }
}

</style>
