export type BitValue = 0|1;
export type WordLength = 0 |1|2|3|4|5|6|7|8;
export type Word<L extends WordLength> = L extends 1 ? `0b${BitValue}` : L extends 2 ? `0b${BitValue}${BitValue}` : L extends 3 ? `${BitValue}${BitValue}${BitValue}` : L extends 4 ? `${BitValue}${BitValue}${BitValue}${BitValue}` : never;
export type BitField<L extends WordLength> = Word<L>;
