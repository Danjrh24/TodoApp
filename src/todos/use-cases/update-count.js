import storeState from "../../store/todo.store"


export const updatePendingCount = () => {
    const pendingTodo = storeState.getTodos( storeState.Filters.Pending );
    storeState.state.pendingCount = pendingTodo.length;
    const pendingCountElement = document.querySelector('#pending-count');
    pendingCountElement.innerHTML = storeState.state.pendingCount;
}