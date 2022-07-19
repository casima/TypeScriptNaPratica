/******************************************************/
/*                                                    */
/*                                                    */
/*                                                    */
/*                                                    */
/* Bruno Alves                                        */
/* TypeScript na Prática                              */
/* Rodando um arquivo ts sem erros                    */
/*                                                    */
/*                                                    */
/*                                                    */
/*                                                    */
/*                                                    */
/*                                                    */
/*                                                    */
/*                                                    */
/*                                                    */
/******************************************************/

/* 1 - Rodar um arquivo .ts sem causar erros */

interface Funcionario {
    nome: string,
    codigo: number;
}

const funcionarioObj: Funcionario = {
    codigo: 10,
    nome: 'João'
}
console.log(funcionarioObj.nome);  //João

console.log(funcionarioObj.codigo);  // 10

// New employee

class Employee {
    name: string;
    code: number;

    constructor(name: string, code: number) {
            this.name = name;
            this.code = code;
    }
}


let employee = new Employee("John", 10);

console.log(employee.name);  //John

console.log(employee.code);  // 10
