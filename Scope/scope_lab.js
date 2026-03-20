//Global Scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also a global, but scoped with let";
const globalConst = "I'm a global const";


{
    //block scope
    var blockvar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

console.log(blockvar);
console/log(blockLet)

function show(){
    var functionvar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();

console.log(functionvar);
console.log(functionLet);
console.log(functionConst);