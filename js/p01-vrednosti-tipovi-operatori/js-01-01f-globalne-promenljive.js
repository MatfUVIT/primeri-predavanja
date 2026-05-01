prom = 10;

zika = 42;

// prikazuje true
// kad se izvrsava u node.js 
console.log("prom" in global);
console.log("zika" in global);
console.log("mika" in global);

// prikazuje true
// kad se izvrsava u pregledacu
//console.log ("prom" in window ) ;


// prikazuje 10
// kad se izvrsava u node.js 
console.log(global.prom);
console.log(global.zika);

// prikazuje 10
// kad se izvrsava u pregledacu
//console.log ( window.prom ) ;