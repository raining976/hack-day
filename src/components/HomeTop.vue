<template>
    <div class="homeTop">
        <div class="navBar">
            <div class="iconBox">
                <div class="itStudio text">
                    ITSTUDIO
                </div>
                <div class="dot"></div>
                <div class="time text">{{ time }}</div>
            </div>
            <div class="btnBox" @click="changeShowStatus">
                <span class="square" :class="{ bigSquare: status.isShowCover }"></span>
                <span class="square" :class="{ smallSquare: status.isShowCover }"></span>
                <span class="square" :class="{ bigSquare: status.isShowCover }"></span>
                <span class="square" :class="{ smallSquare: status.isShowCover }"></span>
                <span class="square" :class="{ smallSquare: status.isShowCover }"></span>
                <span class="square" :class="{ smallSquare: status.isShowCover }"></span>
                <span class="square" :class="{ bigSquare: status.isShowCover }"></span>
                <span class="square" :class="{ smallSquare: status.isShowCover }"></span>
                <span class="square" :class="{ bigSquare: status.isShowCover }"></span>
            </div>
        </div>
        <div class="cover">
            <div class="contentBox">
                <div class="logo">
                    {{ title }}
                </div>
                <div class="line"></div>
                <div class="textBox">
                    <div class="text">OUC</div>
                    <div class="dot"></div>
                    <div class="text">2024</div>
                    <div class="dot"></div>
                    <div class="text">04</div>
                    <div class="dot"></div>
                    <div class="text">15</div>
                </div>
            </div>
            <div class="arrowDownBox" @click="rollDown">
                <div class="arrowDown"></div>
                <div class="text">点我向下滚动～</div>
            </div>
        </div>
    </div>

</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useStatusStore } from "@/store"
const time = ref("2024")
const status = useStatusStore();

const title = ref("")
onMounted(() => {
    title.value = import.meta.env.VITE_THEME_TITLE
})

const changeShowStatus = () => {
    status.setIsShowCover(!status.isShowCover)
}


const mouesEntered = () => {
    status.setIsShowCover(true)
}

const mouseLeaved = () => {
    status.setIsShowCover(false)
}

const rollDown = () => {
    window.scrollTo({
        top: window.innerHeight, // 滚动到距离顶部100vh的位置
        behavior: 'smooth' // 平滑滚动效果
    });
}


</script>
<style lang="scss" scoped>
$r: 100px; // 探照灯半径
$hackFontSize: 117px;
.homeTop {
    @include flex-between(true);
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    .navBar {
        $padding: 3.6vw;

        @include flex-between();
        width: calc(100% - 2*$padding);
        padding: 0 $padding;
        height: $barHeight;
        background: transparent;
        color: $theme-reverse-color;

        .iconBox {
            @include flex-center();

            .dot {
                width: 26.9px;
                height: 26.9px;
                background: $theme-reverse-color;
                border-radius: 50%;
                margin: 21.1px;
            }

            .text {
                font-family: "line-outside" !important;
                font-size: 49.9px;
            }
        }

        .btnBox {
            width: 46px;
            height: 46px;
            display: grid;
            grid-template-columns: repeat(auto-fill, 9px);
            grid-gap: 9px;
            cursor: pointer;

            &:hover {
                grid-template-columns: repeat(auto-fill, 9px);
            }

            .square {
                transition: 0.2s;
                transform-origin: center center;
                width: 9px;
                height: 9px;
                background-color: $theme-reverse-color;

                $offset: 2.5px;
                $offsetTop: 2px;

                &.bigSquare:nth-child(1) {
                    transform: scale(2) translateX($offset) translateY($offsetTop);
                }

                &.bigSquare:nth-child(3) {
                    transform: scale(2) translateX(-$offset) translateY($offsetTop);
                }

                &.bigSquare:nth-child(7) {
                    transform: scale(2) translateX($offset) translateY(-$offsetTop);
                }

                &.bigSquare:nth-child(9) {
                    transform: scale(2) translateX(-$offset) translateY(-$offsetTop);
                }

                &.smallSquare {
                    width: 0;
                    height: 0;
                }
            }

        }



    }

    .cover {
        @include flex-center();
        width: 100%;
        height: calc(100vh - $barHeight);
        background-color: transparent;
        position: relative;

        .contentBox {
            @include flex-center(true);
            width: 45vw;

            .logo {
                font-size: $hackFontSize;
                font-family: 'trick-shot';
                font-weight: bold;
                position: relative;
                background-color: #FFFFFF;
                color: transparent;
                z-index: 1;
                background-clip: text;
                -webkit-background-clip: text;
            }

            .logo::after {
                z-index: -1;
                position: absolute;
                content: "HACKDAY";
                font-family: 'trick-shot';
                text-shadow: 6px 8px 0px #CDCDCD;
                font-size: $hackFontSize;
                font-weight: bold;

                left: 50%;
                transform: translateX(-50%);
                top: 0;
                color: transparent;
                /* 半径为40px x为0 y居中的圆 */
                
                clip-path: ellipse(100px 100px at 0% 50%);
                animation: move 5s linear infinite;
                /* 可以将文字颜色改为背景图颜色 操作如下(文字颜色为透明) */
                /* background-image: url("https://w.wallhaven.cc/full/m3/wallhaven-m3zjx1.jpg");
             */
                /* 用渐变背景色 */
                background: linear-gradient(90deg, rgb(193, 0, 0) 0%, rgba(239, 255, 10, 1) 25%, rgba(6, 246, 217, 1) 49%, rgba(6, 118, 255, 1) 75%, rgba(147, 0, 255, 1) 100%);
                background-position: center center;
                background-size: 150%;
                background-clip: text;
                -webkit-background-clip: text;
            }

            .line {
                // 848 × 126
                width: 40vw;
                height: 0.5vw;
                background-color: #fff;
                margin: 2.1vw 0;
            }

            .textBox {
                width: 100%;
                @include flex-center();

                .text {
                    font-family: line-outside;
                    font-size: 2.6vw;
                }

                .dot {
                    width: 0.8vw;
                    height: 0.8vw;
                    border-radius: 8px;
                    background: #FFFFFF;
                    margin: 0 1.9vw;
                }
            }

        }

        .arrowDownBox {
            @include flex-center();
            position: absolute;
            z-index: 999;
            bottom: 30px;
            right: 50%;
            transform: translateX(-50%);
            animation: floatUpDown 2s ease-in-out infinite alternate;
            cursor: pointer;

            .arrowDown {
                width: 0;
                height: 0;
                border-left: 20px solid transparent;
                border-right: 20px solid transparent;
                border-top: 25px solid #fff;
            }

            .text {
                $textWidth: 130px;
                width: $textWidth;
                position: absolute;
                right: -$textWidth - 10px;
                color: #ffffff90;
            }
        }

    }

}

@keyframes floatUpDown {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(10px);
        /* 调整箭头上下浮动的距离 */
    }
}


@keyframes move {
    0% {
        clip-path: ellipse($r $r at 0% 50%);
    }

    50% {
        clip-path: ellipse($r $r at 100% 50%);
    }

    100% {
        clip-path: ellipse($r $r at 0% 50%);
    }
}
</style>