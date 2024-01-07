for (let i=1; i<=5; i++){
    for (let p=1; p<=5; p++) {
        console.log(i*p);
    }
}

let niz = [ 1, 2, 3, 4, 5, 6, 7];
niz.forEach(function(broj){
    if(broj%2 == 0){
        console.log("par");
    }else {
        console.log("ne")
    }
})