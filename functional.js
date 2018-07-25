let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
// Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// Kansas -> kansas : uppercase to lowercase
// North Dakota -> north-dakota : spaces to hypen

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element){
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map( element => urlify(element) );
}
console.log(functionalUrls(states));

// 6.1 exercise
// Using map, write a function that takes in the states variable and returns 
// an array of URLs of the form https://example.com/<urlified form>. 
function arrayOfUrls(statesArray) {
  return statesArray.map( state => `https://example.com/${urlify(state)}`);
}
console.log(arrayOfUrls(states));


// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(`imperativeSingles: ${imperativeSingles(states)}`);

// singles: Functional version
function functionalSingles(elements) {
 return elements.filter( element => element.split(/\s+/).length === 1);
}
console.log(`functionalSingles: ${functionalSingles(states)}`);

// 6.2 Filter exercise
// Write two filter functions that return the Dakotas: one using String#includes 
// (Section 2.5) to test for the presence of the string “Dakota” and one using a 
// regex that tests for the length of the split array being 2.
function dakotas(statesArray) {
  return statesArray.filter( state => state.includes("Dakota"));
}
console.log(dakotas(states));

function dakotas2(statesArray) {
  return statesArray.filter( state => state.split(/\s+/).length ===2);
}
console.log(dakotas2(states));


let numbers = [1,2,3,4,5,6,7,8,9,10];

// sum: Imperative solution
function imperativeSum(elements){
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements){
  return elements.reduce((total, n) => { return total += n;});
}
console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element){
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
                          lengths[element] = element.length;
                          return lengths;
                        }, {});
}
console.log(functionalLengths(states));

// 6.3 Reduce exercise
// Using reduce, write a function that returns the product of all 
// the elements in an array. Hint: Where += adds, *= multiplies. 
function productReduce(numbers) {
  return numbers.reduce((total, number) => { return total *= number; }, 1);
}
console.log(productReduce(numbers));

// lengths: Functional solution one line
function functionalLengthsOneLine(elements) {
  return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths; }, {});
}
console.log(functionalLengthsOneLine(states));
