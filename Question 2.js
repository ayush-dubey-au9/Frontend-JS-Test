let array = [1,0,0,0,0,1,0,0,0,1]
let maxCount = 0
let curCount = 0
for (i = 0; i < array.length; i++){
  if(array[i] === 1){
    curCount += 1
  }else{
    if(curCount > maxCount){
      maxCount = curCount
    }
    curCount = 0
  }
}

console.log(maxCount)