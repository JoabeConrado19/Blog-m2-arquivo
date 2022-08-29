export class ApiRequisicao {
    static baseURL = 'https://blog-m2.herokuapp.com'
    static headers = {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.token}`
    }

    static async criarUsuario(data) {
        const newUser = await fetch(`${this.baseURL}/users/register`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {

                if(res.username == data.username){window.location.assign("/index.html")}
                else if(res.message == "password must have at least six digits, one capital letter and one number"){
                    let error = document.querySelector(".cadastroError-Senha")
                    error.classList.toggle("d-block")
                }
               
                else{
                    let error2 = document.querySelector(".Error-TodosOsCampos")
                    error2.classList.toggle("d-block")
                }

                return res
            })


        return newUser
    }
}

