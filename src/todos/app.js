import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './use-cases';
import { Filters } from '../store/todo.store';
import { updatePendingCount } from './use-cases/update-count';

//Id del contenedor de los todos (<ul></ul>)
const elementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    footerList: '.footer',
} 

/**
 * 
 * @param {String} elementId Id del elemento padre de la app
 */


export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( elementIDs.TodoList, todos );
        updatePendingCount();
    }

    //Cuando la funcion App() se llama
    (() =>{
        const app = document.createElement( 'div' );
        app.innerHTML = html;
        document.querySelector( elementId ).append( app );
        displayTodos();
    })();

    //Referencias HTML
    const newDescriptionInput = document.querySelector( elementIDs.NewTodoInput );
    const todoListUL = document.querySelector( elementIDs.TodoList );
    const footerList = document.querySelector( elementIDs.footerList );
    const pendingCount = document.querySelector('#pending-count');
    //Listeners 
    newDescriptionInput.addEventListener('keydown', (event)=> {
        if ( event.keyCode !== 13 ) return;
        if ( event.target.value.trim().length === 0 ) return;

        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = '';
    });

    todoListUL.addEventListener( 'click', ( event ) => {
        event.preventDefault();
        event.stopPropagation();
        const elementFather = event.target.closest( '[data-id]' );
        if(event.target.className === "destroy"){
            todoStore.deleteTodo( elementFather.getAttribute( 'data-id' ) );
        }else{
            todoStore.toggleTodo( elementFather.getAttribute( 'data-id' ) );
        }
        displayTodos();
    } );

    footerList.addEventListener( 'click', ( event ) =>{
    event.stopPropagation();
    event.preventDefault();
    console.log({event});
    if( event.target.className === 'clear-completed' ) {
        todoStore.deleteCompleted();
    }else if ( event.target.className === 'filtro completed' ) {
        todoStore.setFilter( Filters.Completed );
    }else if ( event.target.className === 'filtro pending' ) {
        todoStore.setFilter( Filters.Pending );
        console.log(todoStore.setFilter( Filters.Pending ));
    }else {
        todoStore.setFilter( Filters.All );
    }
    displayTodos();
    })

    const pending = () => { 
        let countPending = todoStore.getTodos(todoStore.Filters.Pending);
        console.log(countPending.length);
        pendingCount.innerHTML = countPending.length;
    }
    pending()
}
