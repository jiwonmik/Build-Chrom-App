
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNMAE_KEY = "username";

function onLoginSubmit(event) {
    // user 가 입력하는 값은 항상 유효성 검사를 해야 한다!
    // HTML의 도움을 활용하려면 <form> 사용해야 함
    // 아래 두 개는 동일
    // <input type="submit" value="Log In" />
    // <button>Log In</button>   
    // input을 form 안에 넣었을 경우에는 Enter 누를 때마다 form은 자동적으로 submit된다. 
    // submit 될 때마다 사이트는 새로고침 된다. 
    
    // form 이 자동으로 submit 되는 것을 어떻게 막을 수 있는가?
    event.preventDefault(); // 브라우저의 기본 동작을 막아줌
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNMAE_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText= `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNMAE_KEY)
if (savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);   
}else{
    paintGreeting(savedUsername);
}