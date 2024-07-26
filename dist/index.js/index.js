"use strict";
class User {
    constructor(email, age, id) {
        this.email = email;
        this.age = age;
        this.id = id;
        this._count = 2;
        this.email = email;
        this.age = age;
        this.id = id;
    }
    deleteTokens() {
        console.log('Token deleted');
    }
    get getApples() {
        return `${this.id} is buying Apples`;
    }
    get countNum() {
        return this._count;
    }
    set countNum(begin) {
        if (begin <= 1) {
            throw new Error("Hehe");
        }
        this.countNum = begin;
    }
}
const Ak = new User("Md", 25, 101101);
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isfamily = true;
    }
    changeCount() {
        this._count = 4;
    }
}
