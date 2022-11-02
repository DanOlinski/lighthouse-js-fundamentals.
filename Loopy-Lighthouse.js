
for (let count = 100; count < 201; count++){
  if (count % 12 === 0){
    console.log('LoopyLighthouse') 
    continue
  } else if (count % 4 === 0){
    console.log('Lighthouse')
    continue
  } else if (count % 3 === 0){
    console.log('Loopy')
    continue
  } else {
    console.log(count)
  }
}




