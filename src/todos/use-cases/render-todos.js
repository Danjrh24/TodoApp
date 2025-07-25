import { createTodoHtml } from "./create-todos-html";

let element;

/**
 * 
 * @param { String } elementId Elemento padre en donde se renderizan los todos
 * @param { Todo } todos 
 */

export const renderTodos = ( elementId, todos = [] ) => {

    if( !element )
        element = document.querySelector( elementId );

    if( !element ) throw new Error(`Element ${ elementId } not found`);

    element.innerHTML = '';

    todos.forEach( todo => {
        element.append( createTodoHtml( todo ) );
    });

}