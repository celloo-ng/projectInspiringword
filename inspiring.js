

 let topics = ['self', 'life']
 let selfMessage = ["It is never too late to be what you might have been.",
    "Love yourself first and everything falls in line.",
    "Keep your face toward sunshine and shadows will fall behind you.",]
 let lifeMessage = [
    "If you risk nothing, then you risk everything.",
    "Hard things happen to us. We will recover, learn from it and grow more resilient.",
    "Give light and people will find the way." ]

 const randomNum = Math.floor(Math.random()*3);

 let finalMessage = [];

 console.log(randomNum);
//  console.log(presetMessage[randomNum]);

 const inspiringMessage = (topics) => {
    switch(topics) {
        case ("self" ): finalMessage.push("self: " + selfMessage[randomNum]); break;
        case ("life"): finalMessage.push("life: " + lifeMessage[randomNum]); break;
        default: console.log('dial self or life again');       
       }
        return finalMessage;
}
console.log(inspiringMessage('self'));