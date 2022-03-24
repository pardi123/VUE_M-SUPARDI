import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";



Vue.use(Vuex);
const persistedstate = createPersistedState({
    path: ["todos"]
});
export default new Vuex.Store({
    plugins: [persistedstate],

    state: {
        todos: [],
    },
    mutations: {
        setTodos(state, payload) {
            state.todos.push({ text: payload, deskripsi: "Belum ada Deskripsi nih" });
        },
        deleteTodos(state, payload) {
            state.todos.splice(payload, 1);
        },
        editTodos(state, id) {

            state.todos.splice(id.sendId, 1, { text: id.sendTodo, deskripsi: id.deskTodos });
        },
        newDeskripsi(state, value) {
            state.todos.splice(value.idTodos, 1, { text: value.textTodos, deskripsi: value.newDeskripsi });
        }
    },
    actions: {
        addNewTodo(store, payload) {
            store.commit("setTodos", payload);
        },
        deleteTodo(store, payload) {
            store.commit("deleteTodos", payload);
        },
        editTodo(store, id) {
            store.commit("editTodos", id);
        },
        editDeksripsi(store, value) {
            store.commit("newDeskripsi", value);
        }
    },
    modules: {},
});