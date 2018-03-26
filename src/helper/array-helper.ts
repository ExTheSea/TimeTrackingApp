export function mergeArraysGraceful(sourceArray: Array<object>, mergeArray: Array<object>, comparator: (instance1, instance2) => boolean) : Array<object> {
    if (sourceArray) {
        sourceArray.forEach((instance1, index, arr) => {
          const instance = mergeArray.find(instance2 => comparator(instance1, instance2))
          if (instance) {
            Object.assign(instance1, instance);
            mergeArray.splice(mergeArray.findIndex(instance2 => comparator(instance1, instance2)), 1);
          } else {
            arr.splice(index, 1);
          }
       });
        return sourceArray.concat(mergeArray);
    } else return mergeArray;
}