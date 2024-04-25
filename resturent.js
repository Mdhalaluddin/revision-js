const age = 15;
const price = 500;

if(age <= 12){
    console.log('you eating free');
}
else if(age >= 60){
    // 50% discount
    const discount = price * 50/100;
    const payAmount = discount - price;
    console.log(payAmount);
}
else{
    console.log(price);
}