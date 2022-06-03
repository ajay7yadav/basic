// class hash {
//     constructor(size = 10){
//         this.hashTable = new Array(size);
//         this.currSize = 0;
//     }
//     hash(key){

//         let sum = 0;
//         for(let i=0; i<key.length; i++){
//             sum += key.charChodAt(i);
//         }
//         return sum%this.hashTable.length;

//     }
//     set(key,value){

//         const index = this.hash(key);

//         if(this.hashTable[index] == undefined){
//             this.hashTable[index] = new Array();
//         }

//         this.hashTable[index].push([key, value]);
//         this.currSize ++;
//     }


// }
let m = new Map();


// add value to hash Map
// value store in ( Key : value ) pairs

m.set(10,100);
m.set(12,true);
m.set('apple',34);
m.set(10.2,false);
m.set(10,'app')
//console.log(m)
//console.log(m.get('apple'));
//console.log(m.size);
// for( t of m){
//     console.log(t[0]);
// }
// for( t of m.keys()){
//     console.log(t);
// }

m.delete('apple');
console.log(m)
m.clear();
console.log(m)