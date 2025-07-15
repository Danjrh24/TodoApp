(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function f(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}let h;const y=new Uint8Array(16);function w(){if(!h){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");h=crypto.getRandomValues.bind(crypto)}return h(y)}const b=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),g={randomUUID:b};function T(e,t,i){if(g.randomUUID&&!e)return g.randomUUID();e=e||{};const d=e.random??e.rng?.()??w();if(d.length<16)throw new Error("Random bytes length must be >= 16");return d[6]=d[6]&15|64,d[8]=d[8]&63|128,f(d)}class u{constructor(t){if(!t)throw new Error("La descripcion de to-do es necesaria");this.id=T(),this.description=t,this.done=!1,this.createdAt=new Date}}const a={All:"all",Completed:"Completed",Pending:"Pending"},l={todos:[new u("Piedra del alma"),new u("Piedra del infinito"),new u("Piedra del tiempo"),new u("Piedra del poder"),new u("Piedra de la mente")],filter:a.All,pendingCount:0},L=()=>{console.log(l),console.log("InitStore")},C=()=>{throw new Error("Not implemented")},v=(e=a.All)=>{switch(e){case a.All:return[...l.todos];case a.Completed:return l.todos.filter(t=>t.done);case a.Pending:return l.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid.`)}},P=e=>{if(!e)throw new Error("Description is required");l.todos.push(new u(e))},E=e=>{l.todos=l.todos.map(t=>(t.id===e&&(t.done=!t.done),t))},S=e=>{l.todos=l.todos.filter(t=>t.id!==e)},A=()=>{l.todos=l.todos.filter(e=>!e.done)},D=(e=a.All)=>{l.filter=e},U=()=>l.filter,s={addTodo:P,deleteCompleted:A,deleteTodo:S,Filters:a,getCurrentFilter:U,getTodos:v,initStore:L,loadStore:C,setFilter:D,state:l,toggleTodo:E},x=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class="selected filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro pending" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro completed" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`,F=e=>{if(!e)throw new Error("A TODO object is required");const t=`
        <div class="view">
                <input class="toggle" type="checkbox" ${e.done?"checked":""}>
                <label>${e.description}</label>
                <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `,i=document.createElement("li");return i.innerHTML=t,i.setAttribute("data-id",e.id),e.done&&i.classList.add("completed"),i};let p;const I=(e,t=[])=>{if(p||(p=document.querySelector(e)),!p)throw new Error(`Element ${e} not found`);p.innerHTML="",t.forEach(i=>{p.append(F(i))})},N=()=>{const e=s.getTodos(s.Filters.Pending);s.state.pendingCount=e.length;const t=document.querySelector("#pending-count");t.innerHTML=s.state.pendingCount},m={TodoList:".todo-list",NewTodoInput:"#new-todo-input",footerList:".footer"},q=e=>{const t=()=>{const o=s.getTodos(s.getCurrentFilter());I(m.TodoList,o),N()};(()=>{const o=document.createElement("div");o.innerHTML=x,document.querySelector(e).append(o),t()})();const i=document.querySelector(m.NewTodoInput),d=document.querySelector(m.TodoList),n=document.querySelector(m.footerList);i.addEventListener("keydown",o=>{o.keyCode===13&&o.target.value.trim().length!==0&&(s.addTodo(o.target.value),t(),o.target.value="")}),d.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation();const c=o.target.closest("[data-id]");o.target.className==="destroy"?s.deleteTodo(c.getAttribute("data-id")):(c.classList.add("completed"),console.log(c),s.toggleTodo(c.getAttribute("data-id"))),setTimeout(()=>{t()},500)}),n.addEventListener("click",o=>{o.stopPropagation(),o.preventDefault(),console.log({event:o}),o.target.className==="clear-completed"?s.deleteCompleted():o.target.className==="filtro completed"?s.setFilter(a.Completed):o.target.className==="filtro pending"?s.setFilter(a.Pending):s.setFilter(a.All),t()})};s.initStore();q("#app");
