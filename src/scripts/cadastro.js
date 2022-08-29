import { ApiRequisicao } from './requisicao.js'

class Cadastro {
    static novoUsuario() {
        const nameInput = document.querySelector('#name')
        const emailInput = document.querySelector('#email')
        const perfilPictureInput = document.querySelector('#perfilPicture')
        const passwordInput = document.querySelector('#password')
        const btnInput = document.querySelector('#btn')

        btnInput.addEventListener('click', async (event) => {
            event.preventDefault()

            const data = {
                username: nameInput.value,
                email: emailInput.value,
                avatarUrl: perfilPictureInput.value,
                password: passwordInput.value
            }

            await ApiRequisicao.criarUsuario(data)
        })
    }
}

Cadastro.novoUsuario()

