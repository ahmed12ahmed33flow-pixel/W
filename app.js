const app = document.getElementById("app");

showLogin();

function showLogin() {

    app.innerHTML = `

    <div class="screen">

        <h1 style="
        font-size:70px;
        color:#E50914;
        margin-bottom:0;
        ">
        W
        </h1>

        <h2 style="margin-top:10px;">
        مرحبًا بعودتك
        </h2>

        <input
        type="email"
        placeholder="البريد الإلكتروني"
        style="
        width:85%;
        max-width:350px;
        padding:15px;
        border:none;
        border-radius:20px;
        margin:10px;
        font-size:18px;
        ">

        <input
        type="password"
        placeholder="كلمة المرور"
        style="
        width:85%;
        max-width:350px;
        padding:15px;
        border:none;
        border-radius:20px;
        margin:10px;
        font-size:18px;
        ">

        <button
        onclick="showHome()"
        style="
        width:85%;
        max-width:350px;
        padding:15px;
        margin-top:20px;
        border:none;
        border-radius:20px;
        background:#E50914;
        color:white;
        font-size:22px;
        box-shadow:0 0 20px rgba(229,9,20,0.4);
        ">
        تسجيل الدخول
        </button>

        <p style="
        color:white;
        margin-top:30px;
        ">
        إنشاء حساب
        </p>

    </div>

    `;
}

function showHome() {

    app.innerHTML = `

    <div class="screen">

        <h1 style="
        font-size:70px;
        color:#E50914;
        ">
        W
        </h1>

        <h2>
        Welcome to W
        </h2>

        <p style="color:#aaa;">
        Unlimited Movies & Series
        </p>

        <div style="
        width:90%;
        max-width:350px;
        background:#111;
        padding:15px;
        border-radius:20px;
        margin-top:30px;
        ">

            <img
            src="https://picsum.photos/350/180"
            style="
            width:100%;
            border-radius:15px;
            ">

            <h3>
            The First Movie
            </h3>

            <p>
            Coming Soon...
            </p>

        </div>

    </div>

    `;
}
