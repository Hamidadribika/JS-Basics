var birth_year;
var shoe_size;

function birth_shoe(birth_year, shoe_size){
    var result = (shoe_size *2+5)*50-birth_year+1766;
    return result;
}

birth_year=prompt("please enter your birth year: ");
shoe_size=prompt("please enter your shoe size: ");

var result = birth_shoe(birth_year, shoe_size);

alert("The result of this weird operation is :"+result)
