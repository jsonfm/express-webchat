class UsersService {
    async login(user=""){
        document.cookie = `username=${user}`
    }
}

const usersService = new UsersService();