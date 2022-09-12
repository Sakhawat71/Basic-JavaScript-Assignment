//https://github.com/Sakhawat71/Basic-JavaScript-Assignment


//                  kilometerToMeter

function kilometerToMeter(kilometer){
    
    if(kilometer < 0){
        return "Not possible with negative numbers.";
    }
    else{
        var meter = kilometer * 1000;
        return meter;
    }
    
}

var result = kilometerToMeter(6);
console.log(result);



//                  budgetCalculator


function budgetCalculator(watch, mobile, laptop){

    if(watch < 0 || mobile < 0 || laptop < 0 ){
        return "Don't use negative number."
    }
    else{
        var watchPrice = 50 * watch;
        var mobilePrice = 100 * mobile;
        var laptopPrice = 500 * laptop;
        var total = watchPrice + mobilePrice + laptopPrice;
    }
    return total;

}
var price = budgetCalculator(15, 10, 5);
console.log(price);


//                  hotelCost


function hotelCost(days){
    let price = 0;

    if(days < 0){
        return "Don't use negative numbers."
    }
    else if(days <= 10){
        price = days * 100;
    }
    else if(days <= 20){
        var first10Days = 10 * 100;
        var remaining = days - 10;
        var second10Days = remaining * 80;
        price = first10Days + second10Days;
    }
    else{
        first10Days = 100 * 10;
        second10Days = 80 * 10;
        remaining = days - 20;
        var after20days = remaining * 50;
        price = first10Days + second10Days + after20days;
    }
    return price;
}

var result = hotelCost(22);
console.log(result);


//                  megaFriend


function megaFriend(array){

    var nameLength = array[0].length;
    var bigName = array[0];
    
    for (var i = 1; i < array.length; i++) {
        var temp = array[i].length;

        if (temp > nameLength) {
            bigName = array[i];
            nameLength = temp;
        }
    }
    return bigName;
}
console.log(megaFriend(["sabbir", "showrav", "sakhawat"]));