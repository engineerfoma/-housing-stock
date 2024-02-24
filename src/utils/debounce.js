import { useStore } from 'vuex'

export default function debounce(func, ms) {
    let timeout;
    const { commit } = useStore()

    return function () {

        commit({
            type: 'searchUsers/SET_ERROR',
            value: ''
        })

        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), ms);
    };
}