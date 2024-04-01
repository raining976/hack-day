<template>
    <div class="contentBlock" id="contentBlock">
        <div class="leftBar">
            <div class="list">
                <div @click="tabClicked(index)" class="item" :class="{ active: status.getCurInfoIndex() == index }"
                    v-for="(text, index) in hackDayInfo.getTitles()" :key="index">
                    {{ text }}
                </div>
            </div>
        </div>
        <contents :infoItem="hackDayInfo.getInfo(status.getCurInfoIndex())"></contents>
    </div>

</template>
<script setup>
import { ref } from 'vue'
import { useStatusStore, useHackDayInfo } from "@/store"

const status = useStatusStore()
const hackDayInfo = useHackDayInfo()


const tabClicked = (i) => {
    status.setCurInfoIndex(i)
}


</script>
<style lang="scss" scoped>
.contentBlock {
    position: relative;
    @include flex-between();
    // display: flex;
    // justify-content: space-between;
    $paddingLeft: 3.6vw;
    // $paddingTop: 14vh;
    background-color: $theme-light-color;
    // width: calc(100vw - $paddingLeft);
    // height: calc(100vh - $paddingTop);;
    width: calc(100vw - 2 * $paddingLeft);
    height: 100vh;
    // padding-top: $paddingTop;
    padding: 0 $paddingLeft;

    overflow: hidden;

    .leftBar {
        width: 120px;
        height: 80vh;
        background: #151515;
        box-shadow: -1vw 0.3vw 1.6vw 0.1vw rgba(0, 0, 0, 0.17);
        border-radius: 0.8vw;

        .list {
            $padding: 5.2vw;
            padding: $padding 0;
            width: 100%;
            height: calc(100% - 2 * $padding);
            @include flex-between(true);

            .item {
                position: relative;
                font-family: lattice;
                font-weight: 400;
                font-size: 28px;
                color: #FFFFFF47;
                cursor: pointer;

                &.active {
                    color: #fff;

                    &::after {
                        content: "";
                        position: absolute;
                        bottom: -5px;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 17px;
                        height: 4px;
                        background-color: #fff;
                    }
                }
            }
        }
    }

}

@media screen and (max-width: 768px) {
    #contentBlock {
        padding: 0;
        width: 100vw;
        @include flex-center(true);
        .leftBar {
            width: 500px;
            padding: 0 20px;
            height: 60px;
            margin-bottom: 20px;
        }
        .leftBar .list {
            padding: 0;
            flex-direction: row;
            align-items: center;
            width: 100%;
            height: 100%;
            .item{
                font-size: 20px;
            }
        }
    }
}

@media screen and (max-width: 500px) {
    #contentBlock {
        padding: 0;
        width: 100vw;
        @include flex-center(true);
        .leftBar {
            width: 300px;
        }
        .leftBar .list {
            .item{
                font-size: 18px;
            }
        }
    }
}
</style>