<template>
  <transition name="fade">
    <div class="toc" v-show="status.isShowCover">
      <!-- <div class="leftLogoText">
      HACKDAY
    </div> -->
      <div class="rightContent" id="rightContent">
        <div class="titleBox">
          <div class="title">
            TOC
          </div>
        </div>
        <div class="tocContent" id="tocContent">
          <div class="list">
            <div id="tocItem" class="tocItem" v-for="(item, index) in hackDayInfo.tocs" :key="index"
              @click="tocClicked(index)">
              <span class="textBox">
                <span class="line"></span>
                {{ item.title }}
                <span id="enTitle">
                  /
                  {{ item.title_en }}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useStatusStore, useHackDayInfo } from "@/store"

const status = useStatusStore()
const hackDayInfo = useHackDayInfo();

const tocClicked = (i) => {
  status.setIsShowCover(false)
  switch (i) {
    case 0:
      scrollTo(0);
      break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      scrollTo(window.innerHeight)
      status.setCurInfoIndex(i - 1);
      break;
    default:
      break;
  }
}

const scrollTo = (h) => {
  window.scrollTo({
    top: h, // 滚动到距离顶部100vh的位置
    behavior: 'smooth' // 平滑滚动效果
  });
}

</script>

<style lang="scss" scoped>
.toc {
  $padding-left: 10px;
  position: absolute;
  z-index: 999;
  bottom: 30px;
  @include flex-center();
  height: calc(100vh - $barHeight);
  width: calc(100vw - $padding-left);
  background-color: transparent;
  animation: fade-blur-in 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  padding-left: $padding-left;

  .leftLogoText {
    font-family: 'trick-shot';
    font-weight: bold;
    font-size: 11vh;
    color: #FFFFFF;
    writing-mode: vertical-rl;
    transform: rotateZ(180deg);
    text-shadow: 6px 8px 0px #CDCDCD;
    border-left: 5px solid #ffffff;
    padding-left: 30px;
  }

  .rightContent {
    // align-self: flex-end;
    width: 85vw;
    height: 77vh;
    background: #FFFFFF;
    border-radius: 15px;
    border: 2px solid #000000;
    margin-right: -2px;

    .title {
      position: relative;
      margin-left: 4.5vw;
      margin-top: 3.1vw;
      font-family: 'trick-shot';
      font-weight: bold;
      font-size: 4.2vw;
      color: #151515;
      font-style: normal;
      z-index: 1;

      &::after {
        content: "";
        position: absolute;
        bottom: -1vw;
        left: 2.1vw;
        z-index: -2;
        width: 13.5vw;
        height: 4.5vw;
        background: #EAEAEA;
      }

      &::before {
        content: "";
        position: absolute;
        bottom: -2.1vw;
        z-index: -1;
        left: 0.5vw;
        width: 9.3vw;
        height: 3.5vw;
        background: #CDCDCD;
      }
    }

    .tocContent {
      padding: 50px 220px;

      .list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 50vh;

        .tocItem {
          // padding: 12px 0;
          cursor: pointer;

          .textBox,
          .textBox span {
            display: inline-block;
            color: #000000;
            font-family: 'lattice';
            font-weight: 400;
            font-size: 26px;
            text-align: left;
            cursor: pointer;
            transform-origin: center;
            transition: 0.3s;


          }

          .line {
            display: inline-block;
            width: 10px;
            height: 25px;
            background-color: #000000;
            transform: skewX(-20deg);
            margin-right: 30px;
          }

          &:hover {
            .textBox {
              transform: scale(1.05);

              // transform: rotateZ(2deg);
              &::after {
                content: "";
                position: absolute;
                bottom: -10px;
                left: 20px;
                width: 100%;
                height: 4px;
                border-radius: 50%;
                background: rgb(26, 26, 26);
                z-index: -1;
              }
            }
          }
        }
      }
    }
  }

}

@keyframes fade-blur-in {
  from {
    opacity: 0;
    filter: blur (10px) brightness(0.4);
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    filter: blur(0) brightness(1);
    transform: scale(1);
  }
}





.fade-leave-active {
  transition: all 0.3s;
}

.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}


@media screen and (max-width: 1200px) {
  #tocContent {
    padding: 60px 70px;
  }

  #tocItem {
    transform: scale(0.9);
  }
}

@media screen and (max-width: 720px) {
  #rightContent .titleBox {
    display: flex;
    justify-content: center;

    .title {
      transform: scale(1.5);
      margin: 0;
      margin-top: 50px;
      
    }
  }

  #tocContent {
    padding: 70px 20px;
  }

  #tocItem {
    transform: scale(0.8);
  }

}

@media screen and (max-width: 500px) {
  #rightContent .titleBox {
    .title {
      transform: scale(2);
      margin-top: 50px;
    }
  }

  #enTitle {
    display: none;
  }
  #tocContent {
    padding: 70px 50px;
  }
}
</style>