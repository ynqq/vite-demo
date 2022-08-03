import { createStore } from "vuex"
import type { ActionContext } from "vuex"

export interface StoreInfo {
    count: number
}

export const store = createStore({
    state(): StoreInfo {
        return {
            count: 0,
        }
    },
    mutations: {
        set_state(state: StoreInfo, value: number) {
            state.count = value
        }
    },
    actions: {
        set_state_action({ commit }: ActionContext<StoreInfo, StoreInfo>, value: number) {
            commit("set_state", value)
        },
    }
})
