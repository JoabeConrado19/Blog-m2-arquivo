class RenderizarRequest {
    static {
        let removeBtn = document.querySelector(".remove-btn")
        removeBtn.addEventListener("click", () => { RenderizarRequest.deletePost() })
    }
    static postID = 0
    static baseUrl = "https://blog-m2.herokuapp.com"
    static token = localStorage.getItem("@kenzieBlog:token")
    static id = localStorage.getItem("@kenzieBlog:User_id")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }
    static Redirecionando() {
        if (localStorage.getItem("@kenzieBlog:token") != this.token || localStorage.getItem("@kenzieBlog:token") == undefined) {
            localStorage.clear();
            window.location.assign("/index.html");

        }
    }
    static async Apirequest() {
        const posts = await fetch(`${this.baseUrl}/posts?page=1`, {
            method: "GET",
            headers: this.headers,

        })
            .then(res => res.json())
            .then(res => {
                let postagens = res.data
                let ul = document.querySelector(".post-container-ul")
                ul.innerHTML = ""

                postagens.forEach(element => {

                    let Postuser = element.user

                    let li = document.createElement("li")
                    li.classList.add("post-card")
                    let div = document.createElement("div")
                    div.classList.add("icons-image")
                    let div2 = document.createElement("div")
                    div2.classList.add("image-container")
                    let img = document.createElement("img")
                    img.src = `${Postuser.avatarUrl}`
                    let div3 = document.createElement("div")
                    div3.classList.add("icons")
                    let a1 = document.createElement("a")
                    a1.id = element.id


                    let editButton = document.querySelector(".edit-box")

                    a1.addEventListener("click", () => {

                        editButton.classList.toggle("displayNone")
                        this.postID = a2.id
                    })
                    a1.classList.add("edit-ico")
                    let a2 = document.createElement("a")
                    let removeButton = document.querySelector(".remove-box")

                    a2.addEventListener("click", () => {

                        removeButton.classList.toggle("displayNone")
                        this.postID = a2.id

                    })
                    a2.id = element.id
                    a2.classList.add("trash-ico")
                    let ico1 = document.createElement("img")
                    ico1.src = "../assets/img/edit 1.png"
                    ico1.classList.add('update-img')
                    let ico2 = document.createElement("img")
                    ico2.src = "../assets/img/trash-bin 1.png"
                    ico2.classList.add('delete-img')
                    let div4 = document.createElement("div")
                    div4.classList.add("post-text")
                    let h2 = document.createElement("h2")
                    h2.innerText = element.user.username
                    let p = document.createElement("p")
                    p.innerText = element.content
                    let div5 = document.createElement("div")
                    div5.classList.add("post-date")
                    let date = document.createElement("p")
                    date.innerText = element.createdAt

                    li.appendChild(div)
                    div.appendChild(div2)
                    div2.appendChild(img)
                    div.appendChild(div3)
                    if (Postuser.id == this.id) {
                        div3.appendChild(a1)
                        a1.appendChild(ico1)
                        div3.appendChild(a2)
                        a2.appendChild(ico2)
                    }
                    li.appendChild(div4)
                    div4.appendChild(h2)
                    div4.appendChild(p)
                    li.appendChild(div5)
                    div5.appendChild(date)


                    ul.appendChild(li)






                });




            })


        return posts

    }

    static async createNewPost(data) {
        const poster = await fetch(`${this.baseUrl}/posts`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {

                return res
            })


        return poster
    }

    static async updatePost(data) {
        const poster = await fetch(`${this.baseUrl}/posts/${this.postID}`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {

                let removeButton = document.querySelector(".edit-box")
                removeButton.classList.toggle("displayNone")
                return res
            })

        return poster
    }

    static async deletePost() {
        const poster = await fetch(`https://blog-m2.herokuapp.com/posts/${this.postID}`, {
            method: 'DELETE',
            headers: this.headers
        })
            .then(res => {

                let removeButton = document.querySelector(".remove-box")
                removeButton.classList.toggle("displayNone")
                return res
            })


        return poster
    }

    static create() {
        const inputText = document.querySelector('input')
        const btnSend = document.querySelector('.post-button')


        btnSend.addEventListener('click', async (event) => {
            event.preventDefault()

            const data = {
                content: inputText.value
            }

            await this.createNewPost(data)
        })
    }

    static update() {
        const btnSend = document.querySelector('.edit-button')

        btnSend.addEventListener('click', async (event) => {
            event.preventDefault()
            const inputText = document.querySelector('#edit-input')
            const data = {
                content: inputText.value
            }
            await this.updatePost(data)
        })
    }

    static delete() {
        const btnDelete = document.querySelector('.delete-img')

        btnDelete.addEventListener('click', async (event) => {
            event.preventDefault()

            // const id = localStorage.setItem('@kenzieBlog:User_id')

            await this.deletePost()
        })


    }
    static AtribuirEventRemove() {

    }




}




setInterval(() => { RenderizarRequest.Apirequest() }, 3000)

RenderizarRequest.AtribuirEventRemove()
RenderizarRequest.create()
RenderizarRequest.update()
RenderizarRequest.delete()





