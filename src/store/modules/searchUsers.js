import axios from 'axios'

export default {
    namespaced: true,
    state() {
        return {
            users: [],
            isLoadingUsers: false,
            error: '',
            userName: {
                value: 'Пользователь'
            }
        }
    },
    mutations: {
        SET_USERS(state, usersResponse) {
            state.users = usersResponse
        },

        SET_USER_NAME(state, payload) {
            state.userName = payload
        },
        TOGGLE_IS_LOADING_USERS(state, payload) {
            state.isLoadingUsers = payload
        },

        SET_ERROR(state, payload) {
            state.error = payload
        }
    },
    actions: {
        async GET_USERS({ commit }, payload) {
            commit({
                type: 'TOGGLE_IS_LOADING_USERS',
                value: true
            })

            const nameUsers = payload.value
                .replaceAll(' ', '')
                .split(',')
                .join('&username=')

            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users?username=${nameUsers}`)
                if (response.data.length) {
                    commit({
                        type: 'SET_USERS',
                        value: response.data
                    })
                } else {
                    commit({
                        type: 'SET_USERS',
                        value: ''
                    })
                    throw new Error('Пользователи не найдены')
                }
            } catch (error) {
                commit({
                    type: 'SET_ERROR',
                    value: error.message
                })
            }

            commit({
                type: 'TOGGLE_IS_LOADING_USERS',
                value: false
            })
        }
    },
    getters: {
        users(state) {
            return state.users
        },
        userName(state) {
            return state.userName
        },
        isLoadingUsers(state) {
            return state.isLoadingUsers
        },
        error(state) {
            return state.error
        }
    }
}