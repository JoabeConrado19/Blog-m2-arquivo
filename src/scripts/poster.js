import { ApiPoster } from "./requestPoster.js"

export class Poster {
    static create() {
        const inputText = document.querySelector('input')
        const btnSend = document.querySelector('.post-button')

        btnSend.addEventListener('click', async (event) => {
            event.preventDefault()

            const data = {
                content: inputText.value
            }

            await ApiPoster.createNewPost(data)
        })
    }

    static update() {
        const inputText = document.querySelector('input')
        const btnUpdate = document.querySelector('.post-button')

        btnUpdate.addEventListener('click', async (event) => {
            event.preventDefault()

            const id = localStorage.setItem('@kenzieBlog:User_id')
            const data = {
                content: inputText.value
            }

            await ApiPoster.updatePost(data, id)
        })
    }

    static delete(selectorBtn) {
        const btnDelete = document.querySelector(selectorBtn)

        btnDelete.addEventListener('click', async (event) => {
            event.preventDefault()

            const id = localStorage.setItem('@kenzieBlog:User_id')

            await ApiPoster.deletePost(id)
        })
    }
}
