/**
 * unit 2.3 scope of global & local var
 */
var car = "BMW"; //global scope
function showCar(){
    console.log(car); //car is accessible bec it's global var
}

showCar(); //BMW

// function localScope(){
//     var car1 = 'Toyota'; //local var
//     console.log(car1);
// }

// localScope(); //BMW
// console.log(car1); //ReferenceError: car1 is not defined

function blockScope(){
    if (true){
        var car2 = "Audi"; //old syntax in function scope
        let car3 = "Ferrari"; //modern syntax in block scope
    }
    console.log(car2);//Audi
    console.log(car3);//ReferenceError: car2 is not defined
}
blockScope();

/**
 * unit 2.2 data types
 */
// var car; //undefined primitive type -->empty var
// console.log(car); //undefined
// console.log(typeof car); //undefined
// var weightKg = 10; //num primitive type
// console.log(typeof weightKg);
// var dogsName = "Spot"; //string primitive type
// console.log(typeof dogsName);
// var isTaskComplete = false; //boolean primitive type
// console.log(typeof isTaskComplete);
// var numArray = [1,2,3,4,5]; //object structural type
// console.log(typeof numArray);
// var object = { firstName: "John", lastName: "Smith"}; //structural type
// console.log(typeof object);
// var fruit = 42 + 8 + "apple";
// console.log(fruit); // 50apple

/**
 * unit 1 variables and data types
 */
// var a = 10;
// var b = 12;
// var c = a + b;
// console.log("a = "+a); //like concatenate; treats as string
// console.log("b = "+b);
// console.log("a + b = "+c);
// console.log("9"+1+7); //output=917; all treated as string
// console.log(1+8+"4"); //output=94;
// /*1st command 1+8 treated as num; 
// then concats because 4 is treated as string
// */
// var firstName;
// console.log(firstName); //undefined
// firstName = 'Shie';
// console.log(firstName);