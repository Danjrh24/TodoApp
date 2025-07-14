import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './use-cases';
import { addTodo } from '../store/todo.store';
import { Todo } from './models/todo.model';

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
}
