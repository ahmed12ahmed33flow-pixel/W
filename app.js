const app = document.getElementById("app");

showSplash();

function showSplash(){

app.innerHTML=`

<div class="screen">

<div class="logo">

W

</div>

<div class="subtitle">

Unlimited Movies & Series

</div>

<div class="loader"></div>

</div>

`;

setTimeout(showLogin,2500);

}

function showLogin(){

app.innerHTML=`

<div class="screen">

<h1 style="margin-bottom:15px">

Welcome Back

</h1>

<input
type="email"
placeholder="Email"
style="
width:320px;
padding:14px;
margin:10px;
border-radius:10px;
border:none;
font-size:16px;
">

<input
type="password"
placeholder="Password"
style="
width:320px;
padding:14px;
margin:10px;
border-radius:10px;
border:none;
font-size:16px;
">

<button
style="
width:320px;
padding:14px;
margin-top:15px;
background:#E50914;
color:white;
border:none;
border-radius:10px;
font-size:18px;
cursor:pointer;
">

Login

</button>

<p style="margin-top:20px;color:#999">

Create Account

</p>

</div>

`;

}
