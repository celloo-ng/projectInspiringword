 const randomNum = Math.ceil(Math.random()*4);
 
 console.log(randomNum)
 const inspiringMessage = (topics) => {
    switch(true) {
        case (topics === "self" && randomNum === 1): console.log("It is never too late to be what you might have been."); break;
        case (topics === "self" && randomNum === 2): console.log("Love yourself first and everything falls in line."); break;
        case (topics === "self" && randomNum === 3): console.log("Keep your face toward sunshine and shadows will fall behind you."); break;
        case (topics === "life" && randomNum === 1): console.log("If you risk nothing, then you risk everything."); break;
        case (topics === "life" && randomNum === 2): console.log("Hard things happen to us. We will recover, learn from it and grow more resilient."); break;
        case (topics === "life" && randomNum === 3): console.log("Give light and people will find the way."); break;

        default: console.log('dial self or life again');
       }

}
inspiringMessage('self');