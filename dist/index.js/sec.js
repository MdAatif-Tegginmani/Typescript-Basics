"use strict";
class Insta {
    constructor(cameraMod, filters) {
        this.cameraMod = cameraMod;
        this.filters = filters;
    }
}
class Yt {
    constructor(cameraMod, filters, burst, short) {
        this.cameraMod = cameraMod;
        this.filters = filters;
        this.short = short;
    }
    create() {
        console.log("Strory created");
    }
}
