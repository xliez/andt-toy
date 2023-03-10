type EnumValue = string | number;

export function enumTool(origin: Record<string, EnumValue>) {
  let store: Record<string, EnumValue>;

  let options: Array<{ [labelName: string]: EnumValue }>;

  // 根据 value 获取 key
  const valToKey = (value: EnumValue) => {
    if (!store) {
      store = Object.entries(origin).reduce((acc, [key, value]) => {
        acc[key] = value;
        acc[value] = key;
        return acc;
      }, {} as Record<string, EnumValue>);
    }

    return store[value as string];
  };

  // 根据 key 获取 value
  const keyToVal = (key: string) => {
    return origin[key];
  };

  /* 生成 Select 组件的 options
   * names 为生成options数组中代表 label 和 value 的名称，默认为 ['label', 'value']
   * 如 genOptions(['name', 'id']) => 生成 [{ name: 'A', id: 'a' }, { name: 'B', id: 'b' }, { name: 'C', id: 'c' }]
   */
  const genOptions = (names?: [string, string]) => {
    const [labelName, valueName] = names ?? ['label', 'value'];
    if (!options) {
      options = Object.entries(origin).map(([key, value]) => ({
        [labelName]: key,
        [valueName]: value,
      }));
    }

    return options;
  };

  return {
    // 获取原始对象
    origin,
    keyToVal,
    valToKey,
    genOptions,
  };
}
