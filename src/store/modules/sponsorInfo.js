import { defineStore } from "pinia";

export const useSponsorInfo = defineStore({
    id: "sponsorInfo",
    state: () => ({
        info: [
            {
                name: "青岛海研电子",
                imgName: "haiyan",
                intro: "青岛海研电子有限公司成立于2014年1月，是一家集海洋观监测设备技术研发、生产、服务及海洋大数据于一体的高新技术企业。主要涉及地球物理、物理海洋、海洋地质、海洋环境等多个领域，致力于为用户提供定制化产品、设备实施服务及整体解决方案。公司在海洋传感器、边缘计算、信号处理、海洋物联网通讯、海洋仪器供电及能源管理，海洋大数据应用等领域获取了多项核心技术。",
                link: "http://www.haiyanec.com/",
                logo: "haiyan_logo"
            },
            {
                name: " 青岛算能科技 ",
                imgName: "suanneng",
                intro: "算能致力于成为全球领先的通用算力提供商，专注于RISC-V、TPU处理器等算力产品的研发和推广应用。公司遵循全面开源开放的生态理念，携手行业伙伴推动RISC-V高性能通用计算产业落地；打造覆盖“云、边、端”的全场景产品矩阵，为数据中心、AIGC、城市运营、智能制造、智能终端等多元场景提供算力产品及整体解决方案。自2016年以来，旗下品牌算丰SOPHON系列产品已完成多次迭代，每代产品相较于前代产品均实现了能耗比倍数级提升。",
                link: "https://sophon.cn/about-us/index.html",
                logo: "suanneng_logo"

            },
            {
                name: "青岛图灵科技 ",
                imgName: "tuling",
                intro: "青岛图灵科技有限公司成立于2021年，公司核心技术基础源于北京大学并依托青岛新一代人工智能技术研究院实现产业孵化。图灵专注于视觉感知分析、特征编码计算与模型协同进化技术创新应用，现阶段聚焦智能交通行业领域，基于数字视网膜端边云协同技术架构体系与多模态交通行业大模型，打造全场景、全天候、全时段AI感知能力，面向城市交通、公路管理、交通枢 纽等细分应用领域，提供全链条闭环产品服务。",
                link: "http://www.turingtec.com.cn/#/index",
                logo: "tuling_logo"
            },
            

        ]
    }),
    actions: {
        getAll() {
            return this.info;
        },

        getOne(i) {
            return this.info[i];
        }
    }
})