import { createStore } from 'vuex'
import searchUsers from './modules/searchUsers.js'

export default createStore({
    modules: {
        searchUsers
    }
})