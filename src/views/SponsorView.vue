<template>
    <div class="sponsorView" id="sponsorView">
        <div class="title">
            <!-- SPECIAL THANKS TO OUR SPONSORS -->
            特别鸣谢
        </div>
        <div class="sponsorBox" id="sponsorBox">
            <div class="list" v-show="!isSmallScreen">
                <div v-for="(card, index) in sponsorInfo.getAll()" :key="index" class="card" @click="linkTo(index)">
                    <div class="contentBox">
                        <div class="textBox">
                            <!-- 公司介绍 -->
                            <div class="name">{{ card.name }}</div>
                            <div class="intro">{{ card.intro }}</div>
                        </div>
                    </div>
                    <div class="imgBox">
                        <img :src="getAssetsImg(card.imgName)" alt="">
                    </div>
                </div>
            </div>
            <div class="smallList" v-show="isSmallScreen">
                <div class="smallCard" v-for="(card, index) in sponsorInfo.getAll()" :key="index"
                    @click="linkTo(index)">
                    <div class="logo">
                        <img :src="getAssetsImg(card.logo)" alt="">
                    </div>
                    <!-- <div class="name">{{ card.name }}</div> -->
                    <div class="text">
                        {{ card.name }}
                    </div>
                </div>
            </div>
        </div>
        <div class="beian">
            <span>Copyright &copy; 2002-2024 ITSTUDIO</span>
            <a href="https://beian.miit.gov.cn/">
                桂ICP备2022004639号
            </a>
        </div>

    </div>
</template>
<script setup>
import { ref, onMounted } from "vue"
import { getAssetsImg } from "@/util/getAssets.js"
import { useSponsorInfo } from "@/store"

const sponsorInfo = useSponsorInfo();
const isSmallScreen = ref(false);

const linkTo = (i) => {
    window.open(sponsorInfo.getAll()[i].link, '_blank')
}
onMounted(() => {
    isSmallScreen.value = window.innerWidth < 768
})

</script>
<style lang="scss" scoped>
$cardW: 400px;
$cardH: 300px;
$padding: 30px;

.sponsorView {

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: calc(100vh - 2 * $padding);
    padding: $padding 0;
    width: 100vw;

    .title {
        // font-family: 'Algerian';
        font-size: 60px;
        color: #FFFFFF;
    }

    .sponsorBox {
        position: relative;
        z-index: 999;
        height: 70vh;
        width: 85vw;

        .list {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: space-around;
            // margin-top: 15vw;
            align-items: center;
        }

        .smallList {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 50px 0;
            height: 100%;
        }


        .smallCard {
            @include flex-center();
            width: 100vw;
            background-color: #FFFFFF50;
            backdrop-filter: blur(8px);
            box-shadow: 0px 1px 3px #ffffff70;
            cursor: pointer;

            .logo {
                @include flex-center();
                width: 180px;
                height: 100px;
                border-radius: 60px;

                img {
                    width: 80%;
                    height: 80%;
                    object-fit: contain;
                }

            }

            .text {
                font-size: 30px;
            }

        }

        .card {
            position: relative;
            width: $cardW;
            height: $cardH;

            .contentBox {

                background-color: #FFFFFF30;
                backdrop-filter: blur(8px);
                width: 100%;
                height: 100%;
                border-radius: 10px;
                cursor: pointer;
                transition: 0.3s;
                box-shadow: 0px 1px 7px #ffffff70;
                overflow: hidden;

                .textBox {
                    @include flex-center(true);
                    margin: calc($cardH - 40px) 10px 15px 15px;
                    transition: 0.3s;

                    .name {
                        font-size: 20px;
                        font-weight: 700
                    }

                    .intro {
                        display: none;
                        font-size: 16px;
                        line-height: 26px;
                        margin-top: 20px;
                        text-indent: 30px;
                        animation: fade-down-in 0.8s;

                    }
                }
            }

            .imgBox {
                position: absolute;
                top: -60px;
                left: 50%;
                transform: translateX(-50%);
                width: calc($cardW - 50px);
                height: calc($cardH);
                overflow: hidden;
                @include flex-center();
                border-radius: 10px;
                cursor: pointer;
                transition: 0.3s;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: 0.3s;
                }
            }

            &:hover {
                .contentBox {
                    height: 180%;
                    margin-top: -110px;
                    box-shadow: 0px 2px 20px #ffffff70;

                    .textBox {
                        margin-top: calc($cardH - 100px);

                        .intro {
                            display: inline-block;
                        }
                    }
                }

                .imgBox {
                    margin-top: -130px;

                    img {
                        height: 65%;
                        border-radius: 20px;
                    }
                }
            }
        }


    }

    .beian {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;

        a {

            color: #FFFFFF;
            transition: 0.2s;

            &:hover {
                color: rgb(151, 151, 255);
            }
        }

    }


}

@keyframes fade-down-in {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@media screen and (max-width:1500px) {
    #sponsorBox {
        width: 100vw;

        .list {
            transform: scale(0.9);
        }
    }
}

@media screen and (max-width:1300px) {
    #sponsorBox {
        .list {
            width: 100vw;

            .card {
                width: $cardW*0.8;
                height: $cardH*0.8;

                .textBox {
                    margin-top: 200px;
                }

                .imgBox {
                    width: calc($cardW*0.8 - 50px);
                    height: calc($cardH*0.8);
                }

                &:hover {
                    .contentBox {
                        height: 200%;

                        .textBox {
                            margin-top: calc($cardH - 160px);

                            .intro {
                                line-height: 22px;
                            }
                        }
                    }

                    .imgBox {
                        margin-top: -130px;
                    }
                }
            }
        }
    }

    #sponsorView {
        .title {
            font-size: 45px;
        }
    }
}

@media screen and (max-width:1000px) {
    #sponsorView {
        justify-content: start;
    }

    #sponsorBox {
        .list {
            width: 100vw;
            justify-content: space-between;

            .card {
                width: $cardW*0.6;
                height: $cardH*0.6;

                .textBox {
                    margin-top: 135px;

                    .name {
                        font-size: 18px;
                    }
                }

                .imgBox {
                    width: calc($cardW*0.6 - 40px);
                    height: calc($cardH*0.6);
                    border-radius: 15px;

                }

                &:hover {
                    .contentBox {
                        height: 250%;

                        .textBox {
                            margin-top: calc($cardH - 220px);

                            .intro {
                                line-height: 22px;
                                margin-top: 10px;
                                font-size: 14px;
                            }
                        }
                    }

                    .imgBox {
                        margin-top: -130px;
                    }
                }
            }
        }
    }
}

@media screen and (max-width:768px) {

    #sponsorView {
        padding: 50px 0;
        height: calc(100vh - 100px);
    }

    .beian {

        span,
        a {
            font-size: 12px;
        }

    }
}
</style>