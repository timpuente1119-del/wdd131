let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesB = names.filter(name => name.charAt(0) === "B");

console.log(namesB);

let namesLength = names.map(name => name.length());



let average = names.reduce((total, name) => total + name.length, 0) / names.length;
console.log(average)
