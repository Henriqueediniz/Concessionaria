//import { ConcessionariaDao } from './ConcessionariaDao'
import Concessionaria from './Concessionaria'
//import { PessoaDAO } from './PessoaDAO'
import Pessoa from './Pessoa';
//import { CarroDao } from './CarroDAO'
import Carro from './Carro';
//import { MotoDao } from './MotoDAO'
import Moto from './Moto';

import { Dao } from './Dao';

//let dao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria   = new Concessionaria('',[]);

//dao.inserir(concessionaria); 

//let dao2: PessoaDAO = new PessoaDAO()
let pessoa = new Pessoa('','')


//dao2.atualizar(pessoa);

//let daoCarro: CarroDao = new CarroDao()
let carro = new Carro('',4)

//daoCarro.selecionar(1)

//let daoMoto: MotoDao = new MotoDao()
let moto = new Moto()

//daoMoto.remover(1)

// * * * Call generic class * * * //
let dao: Dao<Concessionaria> = new Dao<Concessionaria>() 
dao.atualizar(concessionaria)