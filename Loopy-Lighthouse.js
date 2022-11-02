

//---------------runns in vsCode but doesn`t work in the website-------------
let j
for (let counting = 100; counting < 201; counting++) {
  if (counting % 3 === 0) {
    j='Loopy'
  } else if (counting % 4 === 0) {
    j='Lighthouse'
  } else if (j=counting % 12 === 0) {
    j='LoopyLighthouse'
  } else {
    j=counting
  }
  console.log(j);
}

//---------------runns in vsCode but doesn`t work in the website----------------


let counter = 100
let i
while (counter < 201) {
  counter++
  if (counter % 3 === 0) {
    i = 'Loopy'
  } else if (counter % 4 === 0) {
    i = 'Lighthouse'
  } else if (i = counter % 12 === 0) {
    i = 'LoopyLighthouse'
  } else {
    i = counter
  }
  console.log(i)
}




//---------------runns in vsCode but doesn`t work in the website-------------
for (let count = 100; count < 201; count++){
  if (count % 3 === 0){
    console.log('Loopy')
  } else if (count % 4 === 0){
    console.log('Lighthouse')
  } else if (count % 12 === 0){
    console.log('LoopyLighthouse')
  } else {
    console.log(count)
  }
}




