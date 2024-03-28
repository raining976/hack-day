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


</script>
<style lang="scss" scoped>
.homeTop {
    @include flex-between(true);
    ;
    width: 100vw;
    height: 100vh;

    .navBar {
        $padding: 3.6vw;
        @include flex-between();
        width: calc(100% - 2*$padding);
        padding: 0 $padding;
        height: 5.4vw;
        background: transparent;
        color: $theme-reverse-color;

        .iconBox {
            @include flex-center();

            .dot {
                width: 1.4vw;
                height: 1.4vw;
                background: $theme-reverse-color;
                border-radius: 50%;
                margin: 1.1vw;
            }

            .text {
                font-family: "line-outside" !important;
                font-size: 2.6vw;
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
                grid-template-columns: repeat(auto-fill, 6px);
            }

            .square {
                transition: 0.2s;
                transform-origin: center;
                width: 9px;
                height: 9px;
                background-color: $theme-reverse-color;

                &.bigSquare {
                    transform: scale(2.3);

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
        height: calc(100vh - 6vw);
        background-color: transparent;

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
    }

}
</style>