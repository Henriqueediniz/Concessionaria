"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var CarroDao = /** @class */ (function () {
    function CarroDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    CarroDao.prototype.inserir = function (object) {
        console.log('lógica de insert');
        return true;
    };
    CarroDao.prototype.atualizar = function (object) {
        console.log('lógica update');
        return true;
    };
    CarroDao.prototype.remover = function (id) {
        console.log('lógica delete');
        return new Carro_1.default('', 2);
    };
    CarroDao.prototype.selecionar = function (id) {
        console.log('lógica select');
        return new Carro_1.default('', 2);
    };
    CarroDao.prototype.selecionarTodos = function () {
        console.log('lógica getAll');
        return [new Carro_1.default('', 2)];
    };
    return CarroDao;
}());
exports.CarroDao = CarroDao;
