<template>
    <div class="contentContainer">
        <div class="leftLogo">
            HACKDAY
        </div>
        <div class="infoContainer">
            <div class="title">
                {{ infoItem.index }}
                <span class="line"></span>
                {{ infoItem.title }}
                <span class="bias">
                    /
                </span>
                <span class="title_en">
                    {{ infoItem.title_en }}
                </span>
            </div>
            <div class="infoContent" :class="{ awardsClass: infoItem.index == '03' }">
                <div class="textItem" v-for="(text, index) in infoItem.texts" :key="index">
                    <div class="subtitleBox">
                        <div class="subtitle" v-show="text.subtitle != ''">{{ text.subtitle }}</div>
                        <div class="description" v-show="text.des != ''">{{ text.des }}</div>
                    </div>
                    <div class="text" v-show="text.text != ''">{{ text.text }}</div>
                </div>
            </div>
        </div>
        <div class="raining">
            <Raining></Raining>
        </div>
    </div>

</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
    infoItem: {
        title: String,
        index: String,
        title_en: String,
    }
})



</script>



<style lang="scss" scoped>
.contentContainer {
    position: relative;
    @include flex-between();
    // position: absolute;
    // bottom: 0;
    // right: -2px;
    width: 80vw;
    height: 85vh;
    background: #FFFFFF;
    border-radius: 15px;
    border: 2px solid #000000;
    overflow: hidden;

    .leftLogo {
        height: 100%;
        text-align: center;
        font-family: 'trick-shot';
        font-weight: bold;
        font-size: 11vh;
        color: #f5f5f5;
        writing-mode: vertical-rl;
        transform: rotateZ(180deg);
        text-shadow: 6px 8px 0px #CDCDCD;
        border-left: 5px solid #ffffff;
        padding-left: 30px;


    }

    .infoContainer {
        $topHeight: 8vw;
        width: 76.4vw;
        height: 100%;
        display: flex;
        flex-direction: column;

        .title {
            width: 100%;
            height: $topHeight;
            color: #000000;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            font-size: 3.3vw;
            font-family: lattice;

            .line {
                width: 0.8vw;
                height: 3.3vw;
                background: #151515;
                margin: 0 10px;
                margin-right: 20px;
            }

            .bias,
            .title_en {
                font-size: 2.5vw;
                color: #000000;

            }

            .bias {
                margin: 0 10px;
            }
        }

        .infoContent {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: space-between;
            $padding: 30px;
            width: calc(70vw - 3 * $padding);
            height: calc(100% - $topHeight - 1.6vw - 2*$padding);
            padding: $padding;
            padding-right: 2*$padding;
            background: #F9F9F9;
            border-radius: 15px;
            border: 2px solid #000000;

            .textItem {
                .subtitleBox {
                    display: flex;

                    .subtitle {
                        font-weight: 700;
                    }

                    .description {
                        color: #5C5C5C;
                        font-family: 'lattice';
                        margin-left: 30px;
                        font-size: 1vw;
                    }
                }

                .subtitleBox .subtitle,
                .text {
                    color: #000000;
                    font-family: 'lattice';
                    font-size: 1.3vw;
                }


                .text {
                    margin-top: 10px;
                    text-indent: 30px;
                    font-weight: 500;
                    font-size: 1.1vw;
                    color: #5C5C5C;
                }
            }

            &.awardsClass {
                justify-content: space-around;
                .textItem .subtitleBox{
                    margin-bottom: 20px;
                }
                .textItem .text{
                    font-size: 1.3vw;
                }
                
            }
        }
    }

    .raining {
        position: absolute;
        top: 50px;
        right: 150px;
    }
}
</style>