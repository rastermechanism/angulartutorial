"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Crisis = (function () {
    function Crisis(id, name) {
        this.id = id;
        this.name = name;
    }
    return Crisis;
}());
exports.Crisis = Crisis;
var CRISES = [
    new Crisis(1, 'Dragon Burning Cities'),
    new Crisis(2, 'Sky Rains Great White Sharks'),
    new Crisis(3, 'Giant Asteroid Heading For Earth'),
    new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];
var FETCH_LATENCY = 500;
var CrisisService = (function () {
    function CrisisService() {
    }
    CrisisService.prototype.getCrises = function () {
        return new Promise(function (resolve) {
            setTimeout(function () { resolve(CRISES); }, FETCH_LATENCY);
        });
    };
    CrisisService.prototype.getCrisis = function (id) {
        return this.getCrises()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === +id; }); });
    };
    return CrisisService;
}());
CrisisService = __decorate([
    core_1.Injectable()
], CrisisService);
exports.CrisisService = CrisisService;
//# sourceMappingURL=crisis.service.js.map