document.getElementById("app").innerHTML =
"<h1 style='color:red;font-size:70px;'>W</h1>" +
"<h2>Welcome to W</h2>" +
"<button id='btn'>تسجيل الدخول</button>";

document.getElementById("btn").onclick = function () {
    document.getElementById("app").innerHTML =
    "<h1>الصفحة الرئيسية</h1>" +
    "<p>Unlimited Movies & Series</p>";
};

alert("1");

document.getElementById("app").innerHTML =
"<h1>W</h1>";

alert("2");
