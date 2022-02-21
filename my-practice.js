// templat litert 
const templatString = ['I wonaa buy ', 'so i im happy', 'this car name is ', 'this car price is '];
const product = {
 allProduct:{
    price: 40,
    phon:585858,
    bas: 4949,
    car: 'tata',
 },
};
const showfile = `  ${templatString[0]} ${templatString[2]} ${product.car} ${templatString[3]} ${product?.allProduct?.price}`;
// console.log(showfile);



// console.log(value);
const numers = [1000, 20, 10, 100, 300];

const outPut = [];

const doubleIt = numer => numer / 5


for (const numer of numers) {


    const result = doubleIt(numer);
    //   console.log(doubleIt);
    outPut.push(result);

}
// console.log(outPut);

// console.log(outPut);

// const numbar = 1000;
// const resultValue = [];

// const divided = num => num /5
// const 

// simpole array function

const arrowFunction = (a, b) => a + b
const result = arrowFunction(10, 10);

// console.log(result);

// array destructuring 
let mycar = ['Toyta ', ' yamaga bike', 'nada fivestar', 'bmw']

const declar = [first, second, thard, fors] = mycar;
// console.log(second);

// spread operator 

const arr1 = [1, 3, 5, 56, 6, 6, ]
const arr2 = [5, 6, 7, 56, 67, ]
const arry4 = [...arr1, ...arr2];
// console.log(arry4);


const numbar = [1, 2, 3, 4, 5, 56, ];
// for (let i = 0; i < numbar.length; i++) {
//     text = numbar[i] ;
//     console.log(text);
//   }
for (const numbars of numbar) {
    // console.log(numbars);
}


// defaulit parametor value
function getingValue(num1, num2 = 10, ) {
    const totalSum = num1 + num2;
    console.log(totalSum);
}
//  getingValue(10,5);

function defaulit(adding = true) {
    if (adding == true) {
        console.log('true');
    } else {
        console.log('false');
    }
}
// defaulit(true);
// default parameter value
function defaulitPramitar(name = 'my dear') {
    const pragraph = `Hay ${name} welcome to our website `;
    console.log(pragraph);
}
// defaulitPramitar('Sokinarma');



// just normar 
const justTAst = [2, 3, 5, 56, 6, 4, 6];
const totaltest = [];

for (let numbar of justTAst) {
    const arrRajual = numbar * 5;
    totaltest.push(arrRajual);


}

//  map use this way 

const arrNumbar = [2, 3, 5, 56, 6, 4, 6];
const totalArry = [];
const WithMap = arrNumbar.map(shariful => shariful * 5);
totalArry.push(WithMap);

// console.log(totalArry)


const frindsName = ['Rakib', 'Rohoman', 'Asif', 'Mokbul', 'hossain'];
const allFrinds = [];

const MapFrinds = frindsName.map(ferind => `HI ${ferind} welcome our website`);
allFrinds.push(MapFrinds);

// console.log(allFrinds);
// get odd numbar

const oddNmabar = [2, 3, 4, 6, 4, 5, 55, 59, 9, 9, 7, 3, , 5, 56, 6, 4, 6];

const filterout = [];
for (let numbar of oddNmabar) {
    if (numbar % 2 == 1) {

        filterout.push(numbar);
    }
}

// console.log( filterout);

// filter use start 

const doingFilter = [2, 3, 4, 6, 4, 5, 55, 59, 9, 9, 7, 3, , 5, 56, 6, 4, 33, 54, 56, 55, 57, 6];

const callcet = doingFilter.filter(numbar => numbar % 2 === 0);
// console.log(callcet);

const arryFind = [2, 3, 4, 6, 4, 5, 55, 59, 9, 9, 7, 3, , 5, 56, 6, 4, 96];
const findFrindName = ['Rakib', 'Rohoman', 'Asif', 'Mokbul', 'hossain'];
const FindArryNumbar = findFrindName.find(numbar => numbar.length % 2 != 0);
// console.log(FindArryNumbar);


const 
Frinds1Name = {
    name: 'rakib',
    age : 25,
    from: 'Bangladesh',
    phon:'66815251',
}
const 
products = {
    mobail: 'Iphon',
    price : 25000,
    from: 'japan',
    ofer:'668',
}
const results = {...Frinds1Name, ...products }

const boxProduct = [];
boxProduct.push(results);
// console.log(boxProduct);

// Array function

const addedNumnar = (a,b,c=10) => a+b*c;
console.log(addedNumnar(10,30,));