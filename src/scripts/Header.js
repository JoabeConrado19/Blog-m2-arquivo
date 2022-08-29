let buttonLogout = document.querySelector(".header-button")
let UserHeaderDiv = document.querySelector(".header-user-container")
class LogoutButton {
    static {
        buttonLogout.addEventListener("click", () => {
            localStorage.clear();
            window.location.assign("/index.html");
        })

    }
}

class RequestUser {
    static baseUrl = "https://blog-m2.herokuapp.com"
    static token = localStorage.getItem("@kenzieBlog:token")
    static id = localStorage.getItem("@kenzieBlog:User_id")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }
    static async Apirequest() {
        const posts = await fetch(`${this.baseUrl}/users/${this.id}`, {
            method: "GET",
            headers: this.headers,

        })
            .then(res => res.json())
            .then(res => {

                let div = document.createElement("div")
                div.classList.add("header-pic-container")
                let img = document.createElement("img")
                img.src = `${res.avatarUrl}`
                img.classList.add("header-profile-pic")
                let h2 = document.createElement("h2")
                h2.innerText = `${res.username}`
                div.appendChild(img)
                UserHeaderDiv.appendChild(div)
                UserHeaderDiv.appendChild(h2)

            })


        return posts

    }
}

RequestUser.Apirequest()