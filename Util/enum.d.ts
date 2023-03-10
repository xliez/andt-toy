declare type EnumValue = string | number;
export declare function enumTool(origin: Record<string, EnumValue>): {
    origin: Record<string, EnumValue>;
    keyToVal: (key: string) => EnumValue;
    valToKey: (value: EnumValue) => EnumValue;
    genOptions: (names?: [string, string]) => {
        [labelName: string]: EnumValue;
    }[];
};
export {};
