function multiplication(num, til){
    for (let i=0; i<=til; i++){
        console.log(num + " X " + i + " = "+ num * i)
    }
}
const num = prompt("write the table:");
const til = prompt("till which table you wanna print:");
    
multiplication(num, til)