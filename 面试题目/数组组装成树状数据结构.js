// 题目
// 将输入的数组组装成一颗树状的数据结构，注意边界异常值处理
// 详细功能的示例代码请切换到 JavaScript 部分查看
// 输入数据结构类似如下:
// 每一个节点都有唯一 id，子节点的 parentId 指向父节点的 id
// 输入中最多只有一个没有 parentId 的节点，即为树的顶级节点，即一个输入只需要输出一棵树即可
// 输入中 parentId 如果指向错误，则为非法节点，忽略即可
// [
//   { id: 1, name: 'i1' },
//   { id: 2, name: 'i2', parentId: 1 },
//   { id: 4, name: 'i4', parentId: 3 },
//   { id: 3, name: 'i3', parentId: 2 },
// ]
// 注意：
// 请同时兼顾执行性能与代码维护性

// 解决:
function transform(input) {
  const output = {};
  // TODO
 
  console.log(output);
  return output;
}

// 输入 1
transform([
  { id: 1, name: 'i1' },
  { id: 2, name: 'i2', parentId: 1 },
  { id: 4, name: 'i4', parentId: 3 },
  { id: 3, name: 'i3', parentId: 2 },
]);

// 输出 1
/**
 {
    "id": 1,
    "name": "i1",
    "children": [
        {
            "id": 2,
            "name": "i2",
            "parentId": 1,
            "children": [
                {
                    "id": 3,
                    "name": "i3",
                    "parentId": 2,
                    "children": [
                        {
                            "id": 4,
                            "name": "i4",
                            "parentId": 3,
                            "children": []
                        }
                    ]
                }
            ]
        }
    ]
}
 */

// 输入 2
transform([
  { id: 1, name: 'i1' },
  { id: 2, name: 'i2', parentId: 1 },
  { id: 4, name: 'i4', parentId: 3 },
  { id: 3, name: 'i3', parentId: 2 },
  { id: 11, name: 'i11', parentId: 'UFO' },
]);

// 输出 2
/**
{
    "id": 1,
    "name": "i1",
    "children": [
        {
            "id": 2,
            "name": "i2",
            "parentId": 1,
            "children": [
                {
                    "id": 3,
                    "name": "i3",
                    "parentId": 2,
                    "children": [
                        {
                            "id": 4,
                            "name": "i4",
                            "parentId": 3,
                            "children"：
                            [
                                {
                                    "id": 11,
                                    "name": "i11",
                                    "parentId": "UFO",
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
  */
                            
                        