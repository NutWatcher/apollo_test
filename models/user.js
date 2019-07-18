let data = [
    { id: 1, name: "haha" },
    { id: 2, name: "hadi" },
    { id: 3, name: "titi" },
];
let index = 4;
class M_User {
    static getAll() {
        return data;
    }
    static getUser(id) {
        return data.find(item => item.id === id);
    }
    static addUser(name) {
        let temp = { id: index++, name }
        data.push(temp);
        return temp;
    }
    static deleteUser(id) {
        let flag = -1;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                flag = i;
                break;
            }
        }
        if (flag != -1) {
            data.splice(flag, 1);
            return true;
        }
        return false;
    }
    static updateUser(id, name) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data[i].name = name;
                return data[i];
            }
        }
        return {};
    }
}
module.exports = M_User;
// let user = new User();
// console.log(user.getUser(2));