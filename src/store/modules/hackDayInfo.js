// @/store/modules/counter.js
import { defineStore } from "pinia";

export const useHackDayInfo = defineStore({
    id: "info",
    state: () => ({
        titles: ['介绍', '流程', '奖项', '问题', '报名'],
        info: [
            {
                title: "介绍",
                index: "01",
                title_en: "Introduction",
                texts: [
                    {
                        subtitle: "比赛时间：",
                        des: "",
                        text: "2024年4月15日—4月21日",
                    },
                    {
                        subtitle: "比赛地点：",
                        des: "",
                        text: "中国海洋大学信息南楼五八工坊",
                    },
                    {
                        subtitle: "参赛人群：",
                        des: "",
                        text: "中国海洋大学在校本科生或研究生",
                    },
                    {
                        subtitle: "比赛主题：",
                        des: "",
                        text: "比赛当天于参赛地点现场揭晓"
                    },
                    {
                        subtitle: "组织机构：",
                        des: "",
                        text: "中国海洋大学爱特工作室（ITStudio）"
                    },
                    {
                        subtitle: "评委组织：",
                        des: "",
                        text: "青岛海研电子有限公司创始人 温琦，青岛图灵科技有限公司创始人 冯栋，青岛算能科技有限公司销售总监 赵浩森，中国海洋大学高峰老师，中国海洋大学杨永全老师",
                    }

                ]
            },
            {
                title: "流程",
                index: "02",
                title_en: "Schedule",
                texts: [
                    {
                        subtitle: "1.线上报名",
                        des: "3月20日—4月14日",
                        text: "加入QQ群聊报名\n填写线上表格报名",
                    },
                    {
                        subtitle: "2.开幕式宣布比赛主题",
                        des: "4月15日 9:30—10:30",
                        text: "比赛主办方于五八工坊举办开幕式，并在开幕式当日宣布正式的比赛章程、主题，选手们的具体竞赛规则以开幕式当日宣布后的规则为基准。",
                    },
                    {
                        subtitle: "3.自由组队",
                        des: "",
                        text: "无队伍选手在开幕式之后开始自由组队，每个队伍不超过5人，最晚队伍上报时间为4月15日12:00。",
                    },
                    {
                        subtitle: "4.正式比赛",
                        des: "4月15日 12:00—4月20日 12:00",
                        text: "比赛地点：中国海洋大学五八工坊，周四周五周六三天需要每个小组有成员在五八工坊。选手根据主题自由发挥，但不得违背比赛规则，危害社会公序良俗。我们提供水果饮料，零食等食品，这是一大特色。",
                    },
                    {
                        subtitle: "5.提交演示作品",
                        des: "时间：4月20日12：00",
                        text: "提交作品演示方式：发送到邮箱luxiuzhe@stu.ouc.edu.cn",
                    },
                    {
                        subtitle: "6.答辩",
                        des: "答辩时间：4月21日 14:00",
                        text: "答辩地点：中国海洋大学五八工坊,每队派代表展示作品，回答嘉宾问题。嘉宾评分，工作人员统分，确定奖项",
                    },
                    {
                        subtitle: "7.颁奖、闭幕式",
                        des: "4月21日 17:30—18:30",
                        text: "中国海洋大学五八工坊,颁布奖项，闭幕式，拍照留念",
                    }

                ]

            },
            {
                title: "奖项",
                index: "03",
                title_en: "Awards",
                texts: [
                    {
                        subtitle: "冠军 / Champion",
                        des: "",
                        text: "2000元奖金+算能科技产品",
                    },
                    {
                        subtitle: "亚军 / Sliver",
                        des: "",
                        text: "500元奖金+算能科技产品",
                    },
                    {
                        subtitle: "季军 / Bronze",
                        des: "",
                        text: "300元奖金",
                    },
                    {
                        subtitle: "最佳创意奖 / Best of Innovation",
                        des: "",
                        text: "200元奖金",
                    },
                    {
                        subtitle: "企业特色奖 / Corporate",
                        des: "",
                        text: "200元奖金",
                    },
                ]
            },
            {
                title: "问题",
                index: "04",
                title_en: "FAQ",
                texts: [
                    {
                        subtitle: "谁可以参加？",
                        des: "",
                        text: "不限制参加人群，但我们建议您有一定的编程基础，能够在项目中实现自己的价值。",

                    },
                    {
                        subtitle: "不在场的非海洋大学的学生可以参加吗？",
                        des: "",
                        text: "欢迎外校学生参加，不过需要和我们报备核实学生身份。",

                    },
                    {
                        subtitle: "参加OUC Hackday，我需要付出什么？",
                        des: "",
                        text: "您无需缴纳任何费用，只需要付出您五天的时间和精力，和您的团队共同完成比赛项目。",

                    },
                    {
                        subtitle: "参加比赛需要准备什么？",
                        des: "",
                        text: "建议携带：笔记本电脑和充电器，手机和充电器，睡袋，洗漱用品，几件衣服。可以准备好：一个预先组好的队伍，一个好的想法或者思路。请勿携带：有威胁其他人安全的物品，如酒精，动物（无论多么可爱）等。",
                    },
                    {
                        subtitle: "队伍有限制吗？",
                        des: "",
                        text: "您可以组成最多5人的队伍。对队伍成员没有限制，所以你可以与任何学校，国家或经验水平的参赛者合作！",
                    },
                    {
                        subtitle: "评分看什么？",
                        des: "",
                        text: "评分细则将会在开幕式由黑客松技术指导现场公布",
                    },
                    {
                        subtitle: "参加比赛有硬件提供吗？",
                        des: "",
                        text: "我们考核以软件为主，如果您有特定的硬件，请随身携带，同时我们也将在比赛中尽可能地提供您需要的硬件。更多详情请进选手群咨询。",
                    },
                    {
                        subtitle: "可以找研究生参赛么？",
                        des: "",
                        text: "欢迎研究生参赛，但是一个队伍最多有一名研究生",
                    },
                ]
            },
            {
                title: "报名",
                index: "05",
                title_en: "Contact",
                texts: [
                    {
                        subtitle: "QQ群二维码",
                        des: "",
                        text: ""
                    },
                    {
                        subtitle: "QQ群号：",
                        des: "523828089",
                        text: ""
                    },
                    {
                        subtitle: "一键入群",
                        des: "",
                        text: ""
                    },

                ]
            }
        ],
        tocs: [
            {
                title: "首页",
                title_en: "Top",
            },
            {
                title: "比赛介绍",
                title_en: "Introduction",
            }
            ,
            {
                title: "流程安排",
                title_en: "Schedule",
            }
            , {
                title: "奖项设置",
                title_en: "Awards",
            },
            {
                title: "常见问题",
                title_en: "FAQ",
            },
            {
                title: "报名参加",
                title_en: "Contact",
            },
            {
                title: "特别鸣谢",
                title_en: "Sponsor",
            }
        ]
    }),
    actions: {

        getInfo(index) {
            return this.info[index]
        },

        getTitles() {
            return this.titles;
        }
    }
});