export class ApiPoster {
    static baseURL = 'https://blog-m2.herokuapp.com'
    static token = localStorage.getItem('@kenzieBlog:token') || ''
    static headers = {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.token}`
    }

    static async getAllposter() {
        const posters = await fetch(`${this.baseURL}/posts?page=1`, {
            method: 'GET',
            headers: this.headers
        })
            .then(res => res.json())
            .then(res => {

                return res
            })


        return posters
    }

    static async createNewPost(data) {
        const poster = await fetch(`${this.baseURL}/posts`, {
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

    static async updatePost(data, id) {
        const poster = await fetch(`${this.baseURL}/posts/${id}`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {

                return res
            })


        return poster
    }

    static async deletePost(id) {
        const poster = await fetch(`${this.baseURL}/posts/${id}`, {
            method: 'DELETE',
            headers: this.headers
        })
            .then(res => res.json())
            .then(res => {

                return res
            })


        return poster
    }
}
