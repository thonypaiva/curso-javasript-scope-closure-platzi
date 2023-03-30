function fruit (){
    if(true){
        var fruit1 = 'Apple';//funtion scope o Global
        let fruit2 = 'Kiwi';//block scope o local 
        const fruit3 = 'banana'; //block scope o local
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
   
}

fruit()