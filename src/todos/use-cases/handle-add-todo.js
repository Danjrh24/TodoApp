import todoStore, { addTodo } from "../../store/todo.store";

/**
 * 
 * @param {Event<HTMLInputElement>} evento 
 */


export const handleAddToDo = ( evento, callBack ) =>{
        console.log(evento);
        if( evento.key === 'Enter' ) {
            console.log(evento.target.value);
            const inputValue = evento.target.value;
            addTodo(inputValue);
            callBack()
            console.log(todoStore.state);
        }
}