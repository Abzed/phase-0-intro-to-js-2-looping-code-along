let myArr = ["Guadalupe", "Ollie", "Aki"]

function writeCards(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push("Thank you, " + arr[i] + ", for the wonderful surprise gift!")       
    }
    return newArr; 
}
console.log(writeCards(myArr));


function countDown(num){
    for (let i = 0; i <= num; i++) {
        console.log(i);
        
    }
}
countDown(10)



