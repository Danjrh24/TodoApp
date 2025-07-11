(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function u(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=u(n);fetch(n.href,s)}})();const h=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
    \r
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
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`,m=e=>{(()=>{const t=document.createElement("div");t.innerHTML=h,document.querySelector(e).append(t)})()},o=[];for(let e=0;e<256;++e)o.push((e+256).toString(16).slice(1));function f(e,t=0){return(o[e[t+0]]+o[e[t+1]]+o[e[t+2]]+o[e[t+3]]+"-"+o[e[t+4]]+o[e[t+5]]+"-"+o[e[t+6]]+o[e[t+7]]+"-"+o[e[t+8]]+o[e[t+9]]+"-"+o[e[t+10]]+o[e[t+11]]+o[e[t+12]]+o[e[t+13]]+o[e[t+14]]+o[e[t+15]]).toLowerCase()}let a;const g=new Uint8Array(16);function w(){if(!a){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");a=crypto.getRandomValues.bind(crypto)}return a(g)}const y=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),p={randomUUID:y};function b(e,t,u){if(p.randomUUID&&!e)return p.randomUUID();e=e||{};const l=e.random??e.rng?.()??w();if(l.length<16)throw new Error("Random bytes length must be >= 16");return l[6]=l[6]&15|64,l[8]=l[8]&63|128,f(l)}class i{constructor(t){if(!t)throw new Error("La descripcion de to-do es necesaria");this.id=b(),this.description=t,this.done=!1,this.createdAt=new Date}}const d={All:"all",Completed:"Completed",Pending:"Pending"},r={todos:[new i("Piedra del alma"),new i("Piedra del infinito"),new i("Piedra del tiempo"),new i("Piedra del poder"),new i("Piedra de la mente")],filter:d.All},v=()=>{console.log(r),console.log("InitStore")},T=()=>{throw new Error("Not implemented")},P=(e=d.All)=>{switch(e){case d.All:return[...r.todos];case d.Completed:return r.todos.filter(todo>=todo.done);case d.Pending:return r.todos.filter(todo>=!todo.done);default:throw new Error(`Option ${e} is not valid.`)}},C=e=>{if(!e)throw new Error("Description is required");r.todos.push(new i(e))},S=e=>{r.todos=r.todos.map(t=>(t.id===e&&(t.done=!t.done),t))},U=e=>{r.todos=r.todos.filter(t=>e!==e)},x=()=>{r.todos=r.todos.filter(e=>e.done)},A=(e=d.All)=>{r.filter=e},L=()=>r.filter,E={addTodo:C,deleteCompleted:x,deleteTodo:U,getCurrentFilter:L,getTodos:P,initStore:v,loadStore:T,setFilter:A,toggleTodo:S};E.initStore();m("#app");
