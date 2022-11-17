function getCookie(name) {
    function escape(s) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
}

class UsersService {
    async login(user=""){
        document.cookie = `username=${user}`
    }

    getUser() {
        return getCookie("username");
    }
}

const usersService = new UsersService();