// 题目
// 使用js实现一个深拷贝操作，请不要使用JSON.stringify
// const obj = {
//    arr: [
//            key1: {
//          name1: 1,
//          name2: 2,
//       },
//       key2: 'value',
//    ],
//    string: 'value',
// }

const obj = {
   arr: [
     key1: {
         name1: 1,
         name2: 2,
      },
      key2: 'value',
   ],
   string: 'value',
}

const deepClone = (item) => {
  // do sth...
 /   实现深拷贝
   let obj = {};
   for (let i in item) {
      if (typeof item[i] === 'object') {
         obj[i] = deepClone(item[i]);
      } else {
         obj[i] = item[i];
      }
   }
  
  return item;
}

const cloneObj = deepClone(obj)