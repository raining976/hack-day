// @/store/modules/counter.js
import { defineStore } from "pinia";

export const hackDayInfo = defineStore({
    id: "info",
    state: () => ({
        info: [
            {
                title:"", 
            },
            {

            },
            {

            }
            ,
        ]
    }),
    actions:{
        getInfo:(index) => this.info[index],
    }
});