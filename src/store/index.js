import Vue from 'vue'
import Vuex from 'vuex'

import TaskStore from '@/store/modules/TaskStore'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        TaskStore
    }
})