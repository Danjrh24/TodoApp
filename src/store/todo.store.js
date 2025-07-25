import { Todo } from "../todos/models/todo.model";

export const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [],
    filter: Filters.All,
    pendingCount: 0,
}

const initStore = () => {
    loadStore()
    console.log('InitStore');
}

const loadStore = () => {
    if( !localStorage.getItem('state') ) return;
    const { todos = [], filter = Filters.All, pendingCount = 0 } = JSON.parse( localStorage.getItem('state') );
    state.todos = todos;
    state.filter= filter;
    state.pendingCount = pendingCount;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state) );
}

/**
 * 
 * @param {Object} filter Ejemplo: Filters.All
 * @returns 
 */

const getTodos = ( filter = Filters.All ) => {
    switch( filter ) {
        case Filters.All:
            return [...state.todos];
        
        case Filters.Completed:
            return state.todos.filter( todo => todo.done );

        case Filters.Pending:
            return state.todos.filter( todo => !todo.done );

        default:
            throw new Error(`Option ${ filter } is not valid.`);
    }
}
/**
 * 
 * @param {String} description 
 */

export const addTodo = ( description ) => {
    if ( !description ) throw new Error('Description is required');
    state.todos.push ( new Todo(description) );
}

/**
 * 
 * @param {String} todoId 
 */

const toggleTodo = ( todoId ) => {
    state.todos = state.todos.map( todo => {
        if( todo.id === todoId ) {
            todo.done = !todo.done;
        }
        return todo;
    });
}

/**
 * 
 * @param {String} todoId  
 */

const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter ( todo => todo.id !== todoId )
}

const deleteCompleted = () => {
    state.todos = state.todos.filter ( todo => !todo.done)
}
/**
 * 
 * @param {Filters} newFilter 
 */

const setFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
}

const getCurrentFilter = () =>{
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    Filters,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    saveStateToLocalStorage,
    setFilter,
    state,
    toggleTodo,
}