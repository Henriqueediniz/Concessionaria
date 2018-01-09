"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { ConcessionariaDao } from './ConcessionariaDao'
var Concessionaria_1 = require("./Concessionaria");
//import { PessoaDAO } from './PessoaDAO'
var Pessoa_1 = require("./Pessoa");
//import { CarroDao } from './CarroDAO'
var Carro_1 = require("./Carro");
//import { MotoDao } from './MotoDAO'
var Moto_1 = require("./Moto");
var Dao_1 = require("./Dao");
//let dao: ConcessionariaDao = new ConcessionariaDao();
var concessionaria = new Concessionaria_1.default('', []);
//dao.inserir(concessionaria); 
//let dao2: PessoaDAO = new PessoaDAO()
var pessoa = new Pessoa_1.default('', '');
//dao2.atualizar(pessoa);
//let daoCarro: CarroDao = new CarroDao()
var carro = new Carro_1.default('', 4);
//daoCarro.selecionar(1)
//let daoMoto: MotoDao = new MotoDao()
var moto = new Moto_1.default();
//daoMoto.remover(1)
// * * * Call generic class * * * //
var dao = new Dao_1.Dao();
dao.atualizar(concessionaria);
