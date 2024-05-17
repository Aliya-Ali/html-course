let car1 = "BMW"
let car2 = "Mehran"
let car3 = "Ferrari"
let cars = ["BMW", "Mehran", "Ferrari"]

console.log(cars[2])

for (let i=0; i<cars.length; i++){
    console.log(cars[i])
}
let person = {
    firstName :"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
}
console.log(person["firstName"])
console.log(person.firstName)

//Function
function print_four_times(){
    for (let i=0; i<4; i++){
        console.log("Hello World")
    }
}
print_four_times()

function add_two_numbers(num1, num2){
    let sum = num1+num2
    console.log(sum)
}
add_two_numbers(10,20)
add_two_numbers(50, 20)
add_two_numbers(70, 20)

function greet_function(name){
    console.log("Hello", name)
}
let name =["John","Deo","Ali","Hadi"]
for (let i of name){
    greet_function(i)
}

