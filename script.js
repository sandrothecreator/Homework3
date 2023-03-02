// First

function dadebitiNum(...numbers){
    let sum = 0;
    for (let i of numbers){
        if (i > 0){
            sum += i;
        }
    }
    return sum;
}

let result = dadebitiNum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(result);

// Second

function sum(...number){

        let numsum = 0;
        for (let item of number){
            numsum = numsum + item;  
        }
    return numsum;
    }

sum(10, 50, 6, 7, 8, 11, 6, 3, 9);

let resultsum= sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(resultsum);

// Third

let user = {
    firstname: "გიორგი",
    lastname:"სააკაძე",
    age:32
    }

let result1 = `${user.firstname} ${user.lastname} არის ${user.age} წლის` 
console.log(result1);

// Seventh

let array = [1,2,3,4,5];
   
for(let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
}
