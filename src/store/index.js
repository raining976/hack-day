import { createPinia } from "pinia";

const store = createPinia()



export default store

export * from "./modules/status.js"
export * from "./modules/hackDayInfo.js"
export * from "./modules/sponsorInfo.js"