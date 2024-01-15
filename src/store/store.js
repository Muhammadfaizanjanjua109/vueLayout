import { createStore } from "vuex";
import { regestration } from "./regestration.module";
// const regestration
const store = createStore({
    modules:{
        regestration
    }
})

export default store