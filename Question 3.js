let array = [1,1,2,3,4,5]

let map = {}

for (i = 0; i < array.length; i++){
  if (map[array[i]]){
    map[array[i]] += 1
  }
  else
    map[array[i]] = 1
  
}

for (let key in map) {
  if (map[key] > 1){
    console.log(key)
    break
  }
}