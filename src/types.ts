export type Bit = `${0 | 1}`;
export type WordLength = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

// Maybe there's a generic way of doing this?
export type Word<L extends WordLength> =
    L extends 0 ? '' :
    L extends 1 ? `${Bit}` :
    L extends 2 ? `${Bit}${Bit}` :
    L extends 3 ? `${Bit}${Bit}${Bit}` :
    L extends 4 ? `${Bit}${Bit}${Bit}${Bit}` :
    L extends 5 ? `${Bit}${Bit}${Bit}${Bit}${Bit}` :
    L extends 6 ? `${Bit}${Bit}${Bit}${Bit}${Bit}${Bit}` :
    L extends 7 ? `${Bit}${Bit}${Bit}${Bit}${Bit}${Bit}${Bit}` :
    L extends 8 ? `${Bit}${Bit}${Bit}${Bit}${Bit}${Bit}${Bit}${Bit}` : never;

export type BitFieldType<L extends WordLength> = Word<L>;