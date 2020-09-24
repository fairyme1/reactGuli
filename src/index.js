//暴露三种方式： 分别，统一，默认
import {sum} from './js/module1'
import {sub} from './js/module2'
import module3 from './js/module3'

console.log(sum(1,3))
console.log(sub(8,3))
console.log(module3.div(9,3))