import { ApiRequests } from './requestLogin.js'

class LoginPage {
    static renderLoginPage() {
        const token = localStorage.getItem("@kenzieBlog:token")

        if (token) {
            window.location.assign("src/pages/homepage.html")
        }

        const emailInput = document.getElementById("loginEmailInput")
        const passwordInput = document.getElementById("loginPasswordInput")
        const btnLogin = document.getElementById("loginButtonInput")

        btnLogin.addEventListener("click", (event) => {
            event.preventDefault()

            const data = {
                email: emailInput.value,
                password: passwordInput.value
            }

            ApiRequests.Login(data)
        })

    }
}

LoginPage.renderLoginPage()

