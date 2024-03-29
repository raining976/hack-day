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
            <div class="btnBox" @mouseenter="mouesEntered" @mouseleave="mouseLeaved">
                <span class="square" :class="{ bigSquare: isActive }"></span>
                <span class="square" :class="{ smallSquare: isActive }"></span>
                <span class="square" :class="{ bigSquare: isActive }"></span>
                <span class="square" :class="{ smallSquare: isActive }"></span>
                <span class="square" :class="{ smallSquare: isActive }"></span>
                <span class="square" :class="{ smallSquare: isActive }"></span>
                <span class="square" :class="{ bigSquare: isActive }"></span>
                <span class="square" :class="{ smallSquare: isActive }"></span>
                <span class="square" :class="{ bigSquare: isActive }"></span>
            </div>
        </div>
        <div class="cover">
            <div class="contentBox">
                <div class="logo">
                    <img src="@/assets/icons/logo.png" alt="">
                </div>
                <div class="line"></div>
                <div class="textBox">
                    <div class="text">OUC</div>
                    <div class="dot"></div>
                    <div class="text">2024</div>
                    <div class="dot"></div>
                    <div class="text">04</div>
                    <div class="dot"></div>
                    <div class="text">17</div>
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

const time = ref("2024")


const isActive = ref(false)


onMounted(() => {

})

const mouesEntered = () => {
    isActive.value = true
}

const mouseLeaved = () => {
    isActive.value = false
}

const rollDown = () =>{
    window.scrollTo({
        top: window.innerHeight, // 滚动到距离顶部100vh的位置
        behavior: 'smooth' // 平滑滚动效果
      });
}


</script>
<style lang="scss" scoped>
.homeTop {
    @include flex-between(true);;
    width: 100vw;
    height: 100vh;
    $barHeight: 103.7px;
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
                
                &.bigSquare {
                    transform: scale(2.3);

                }
                $offset: 1.5px;
                &.bigSquare:nth-child(1){
                    transform:  scale(2.3) translateX($offset) translateY($offset);
                }
                &.bigSquare:nth-child(3){
                    transform:  scale(2.3) translateX(-$offset) translateY($offset);
                }
                &.bigSquare:nth-child(7){
                    transform:  scale(2.3) translateX($offset);
                }
                &.bigSquare:nth-child(9){
                    transform:  scale(2.3) translateX(-$offset);
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

            .logo img {
                width: 44.2vw;
                height: 6.6vw;
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
            .text{
                $textWidth:130px;
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
</style>