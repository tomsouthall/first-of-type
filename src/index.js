export default function firstOfType(collection, type) {
  for(const i in collection) { 
    if(typeof(collection[i]) === type) {
      return collection[i]
    } 
  }
}