map方法作用是：按顺序，映射遍历处理数组里的每个值，并返回新数组

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>练习</title>
</head>
<body>
    <script>
        // // 题目1: 把数组里每个值乘以2并返回一个新数组
        // let arr = [7, 10, 3, 2]
        // // 题目2: 把数组里每个值前面都加一个统一的姓叫'张', 并返回一个新数组
        // let brr = ['小明', '小红', '小刘', '小李', '小赵']
        // // 题目3: 遍历数组里每个对象, 并返回新数组(要求新数组里每个对象有一个新的属性叫iq(值为50-100随机整数)), 重点: 不能影响原数组里对象
        // let crr = [
        //     {
        //         name: "小明",
        //         age: 19
        //     },
        //     {
        //         name: '小红',
        //         age: 10
        //     },
        //     {
        //         name: '小青',
        //         age: 39
        //     },
        //     {
        //         name: '小爱',
        //         age: 15
        //     }
        // ]
        // // 题目4: 遍历数组里每个对象, 并返回新数组, 要求新数组里每个对象只有name属性和值(并且不能影响原来数组里对象的属性和值)
        // let drr = [
        //     {
        //         name: "小明",
        //         age: 19
        //     },
        //     {
        //         name: '小红',
        //         age: 10
        //     },
        //     {
        //         name: '小青',
        //         age: 39
        //     },
        //     {
        //         name: '小爱',
        //         age: 15
        //     }
        // ]

        
        // 题目1: 把数组里每个值乘以2并返回一个新数组
        let arr = [7, 10, 3, 2]
        let newArr = arr.map(val => {
            return val * 2
        })
        console.log(newArr);


        // 题目2: 把数组里每个值前面都加一个统一的姓叫'张', 并返回一个新数组
        let brr = ['小明', '小红', '小刘', '小李', '小赵']
        let newBrr = brr.map(val => {
            return '张' + val
        })
        console.log(newBrr)

        // 题目3: 遍历数组里每个对象, 并返回新数组(要求新数组里每个对象有一个新的属性叫iq(值为50-100随机整数)), 重点: 不能影响原数组里对象
        let crr = [
            {
                name: "小明",
                age: 19
            },
            {
                name: '小红',
                age: 10
            },
            {
                name: '小青',
                age: 39
            },
            {
                name: '小爱',
                age: 15
            }
        ]
        let newCrr = crr.map(obj => {
            return {
                name: obj.name,
                age: obj.age,
                iq: Math.floor(Math.random() * (100 - 50 + 1) + 50)
            }
        })
        console.log(crr)
        console.log(newCrr)


        // 题目4: 遍历数组里每个对象, 并返回新数组, 要求新数组里每个对象只有name属性和值(并且不能影响原来数组里对象的属性和值)
        let drr = [
            {
                name: "小明",
                age: 19
            },
            {
                name: '小红',
                age: 10
            },
            {
                name: '小青',
                age: 39
            },
            {
                name: '小爱',
                age: 15
            }
        ]
        let newDrr = drr.map(obj => {
            return {
                name: obj.name
            }
        })
        console.log(newDrr)

        // 数据每个映射成标签装载返回全新数组
    </script>
</body>
</html>
```