import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './use-cases';
import { addTodo } from '../store/todo.store';
import { handleAddToDo } from './use-cases/handle-add-todo';

//Id del contenedor de los todos (<ul></ul>)
const elementIDs = {
    TodoList: '.todo-list',
} 

/**
 * 
 * @param {String} elementId Id del elemento padre de la app
 */


export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( elementIDs.TodoList, todos )
    }




    //Cuando la funcion App() se llama
    (() =>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector( elementId ).append( app );
        displayTodos();
        const addTodoInput = document.querySelector('#new-todo-input');
        addTodoInput.addEventListener('keydown', (e)=>handleAddToDo(e, displayTodos)  );
    })()

}