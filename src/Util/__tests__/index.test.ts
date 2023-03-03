import {enumTool} from '../enum'

const enumObj = {
    A: 1,
    B: 2,
    C: 3
}

const { keyToVal, valToKey, genOptions } = enumTool(enumObj)

console.log('keyToVal', keyToVal('A'))
console.log('valToKey', valToKey(2))
console.log('getOptions', genOptions())