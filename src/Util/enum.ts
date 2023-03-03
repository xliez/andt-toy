type EnumValue = string | number

export function enumTool(origin: Record<string, EnumValue>) {

    let store: Record<string, EnumValue>

    let options: Array<{ [labelName: string]: EnumValue}>

    const valToKey = (value: EnumValue) => {
        if (!store) {
          store = Object.entries(origin).reduce((acc, [key, value]) => {
                acc[key] = value
                acc[value] = key
                return acc
            }, {} as Record<string, EnumValue>)
        }

        return store[value as string]
    }

    const keyToVal = (key: string) => {
        return origin[key]
    }

    const genOptions = (names?: [string, string]) => {
        const [labelName, valueName] = names ?? ['label', 'value']
        if (!options) {
            options = Object.entries(origin).map(([key, value]) => ({
                [labelName]: key,
                [valueName]:value
            }))
        }

        return options
    }

    return {
        origin,
        keyToVal,
        valToKey,
        genOptions
    }
}