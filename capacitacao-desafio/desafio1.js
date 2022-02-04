function media (array){

    let sum = 0;

    for (let k=0; k<array.length; k++){
        sum+=array[k];

    }

    let media1 = sum/array.length;
        console.log(media1);

}

media([2,5])