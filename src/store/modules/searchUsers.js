import axios from 'axios'

export default {
    namespaced: true,
    state() {
        return {
            users: [],
            // user: {},
            isLoadingUsers: false,
            // isLoadingUser: false,
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

        // SET_USER(state, userResponse) {
        //     console.log(userResponse.value[0].id)
        //     state.user[userResponse.value[0].id] = userResponse
        // },

        TOGGLE_IS_LOADING_USERS(state, payload) {
            state.isLoadingUsers = payload
        },

        // TOGGLE_IS_LOADING_USER(state, payload) {
        //     state.isLoadingUser = payload
        // },

        SET_ERROR(state, payload) {
            state.error = payload
        }
    },
    actions: {
        // async GET_USER({ commit, getters }, payload) {
        //     if (getters['user'][payload.id]) return

        //     commit({
        //         type: 'TOGGLE_IS_LOADING_USER',
        //         value: true
        //     })

        //     try {
        //         const response = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${payload.id}`)
        //         if (response.data.length) {
        //             console.log(response.data)
        //             commit({
        //                 type: 'SET_USER',
        //                 value: response.data
        //             })
        //         } else {
        //             commit({
        //                 type: 'SET_USER',
        //                 value: ''
        //             })
        //             throw new Error('Пользователь не найден')
        //         }
        //     } catch (error) {
        //         commit({
        //             type: 'SET_ERROR',
        //             value: error.message
        //         })
        //     }

        //     commit({
        //         type: 'TOGGLE_IS_LOADING_USER',
        //         value: false
        //     })
        // },
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
        // user(state) {
        //     return state.user
        // },
        userName(state) {
            return state.userName
        },
        isLoadingUsers(state) {
            return state.isLoadingUsers
        },
        // isLoadingUser(state) {
        //     return state.isLoadingUser
        // },
        error(state) {
            return state.error
        }
    }
}