function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}





emotions('hh', function laugh(num){
  let sound = ''
  for (i=0; i< num; i++){
sound = sound + 'ha'
  }
sound = sound + '!'
return sound
})

/*
function laugh(num){
  let sound = ''
  for (i=0; i< num; i++){
sound = sound + 'ha'
  }
sound = sound + '!'
return sound
}
*/
