
let a = ["ant", "bat", "cat", 42];
a.forEach( element => {
  console.log(element);
});

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character){
  console.log(character);
});

// sorting array anonymous way
let aa = [99,17,12,5];
aa.sort(function(a,b) { return a-b; });
aa.forEach(function(num){
  console.log(num);
});