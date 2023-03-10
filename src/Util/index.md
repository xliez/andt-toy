# Util

这里是一些工具方法

## enumTool

管理枚举值的工具

### 动机

在业务中，我们经常需要维护一些枚举值，比如状态、类型，这些枚举值主要有以下这些使用场景：

1. select 组件
2. 根据 key 获取 value
3. 根据 value 获取 key

2、3 两点可以直接使用 TS 中的 enum 类型去处理，但是因为 enum 的 [反向映射](https://www.typescriptlang.org/docs/handbook/enums.html#reverse-mappings) 特性，使用 `Object.keys` 这样的方式去获取 key 时，会把反向映射的 value 也获取到，无法直接生成 `{ label: string; value: string | number }[]` 这样的数组，所以需要一个工具类去处理这些问题。

### 使用方式

```ts
import { Select } from 'antd';
import { enumTool } from '@xliez/antd-toy';

const Options = {
  A: 'a',
  B: 'b',
  C: 'c',
};

const { genOptions, keyToVal, valToKey } = enumTool(Options);

const App = () => {
  return (
    <>
      <Select label="select" name="select" options={genOptions()} />
      <div>从 key A 取 value: {keyToVal('A')}</div>
      <div>从 value b 取 key: {valToKey('b')}</div>
    </>
  );
};

export default App;
```

### 定义

```ts
function enumTool(origin: Record<string, EnumValue>): {
  // 获取原始对象
  origin: Record<string, EnumValue>;
  // 根据 key 获取 value
  keyToVal: (key: string) => EnumValue;
  // 根据 value 获取 key
  valToKey: (value: EnumValue) => EnumValue;
  /* 生成 Select 组件的 options
   * names 为生成options数组中代表 label 和 value 的名称，默认为 ['label', 'value']
   * 如 genOptions(['name', 'id']) => 生成 [{ name: 'A', id: 'a' }, { name: 'B', id: 'b' }, { name: 'C', id: 'c' }]
   */
  genOptions: (names?: [string, string]) => {
    [labelName: string]: EnumValue;
  }[];
};
```
