export class ApiRequests {
    static baseUrl = "https://blog-m2.herokuapp.com"
    static token = localStorage.getItem("@kenzieBlog:token")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async Login(body) {
        const userLogin = await fetch(`${this.baseUrl}/users/login`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                if (res.token != undefined) {
                    localStorage.setItem("@kenzieBlog:token", res.token)
                    localStorage.setItem("@kenzieBlog:User_id", res.userId)
                    window.location.assign("src/pages/homepage.html")
                }
                else {
                    let error = document.querySelector(".error")
                    error.classList.toggle("d-block")
                }   
            })

        return userLogin

    }
}
