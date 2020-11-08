export type Bit = `${0 | 1}`;
export type WordLength = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Word<L extends WordLength> =
    L extends 0 ? `0b0` :
    L extends 1 ? `0b${Bit}` :
    L extends 2 ? `0b${Bit}${Bit}` :
    L extends 3 ? `0b${Bit}${Bit}${Bit}` :
    L extends 4 ? `0b${Bit}${Bit}${Bit}${Bit}` :
    L extends 5 ? `0b${Bit}${Bit}${Bit}${Bit}${Bit}` :
    L extends 6 ? `0b${Bit}${Bit}${Bit}${Bit}${Bit}${Bit}` :
    L extends 7 ? `0b${Bit}${Bit}${Bit}${Bit}${Bit}${Bit}${Bit}` :
    L extends 8 ? `0b${Bit}${Bit}${Bit}${Bit}${Bit}${Bit}${Bit}${Bit}` : never;

export type BitFieldType<L extends WordLength> = Word<L>;

function getByteSize(num: number): number {
    let out = num >> 3;
    if (num % 8 !== 0) out++;
    return out;
}

class BitField<T extends WordLength> {
    protected value: BitFieldType<T>;
    private bits: Uint8Array;
    constructor(initialValue: BitFieldType<T>)
    {
        this.value = initialValue;
        const bitString = initialValue.startsWith('0b') ? initialValue.split('0b')[1] : initialValue;
        this.bits = new Uint8Array(bitString.split('').map(x => +x));

    }

    public getBit = (bit: number) => {
        if (bit > 0 && bit < this.bits.length) {
            return this.bits[bit];
        } else {
            return null;
        }
    }

    public setBit = (bit: number, value: 0|1|boolean = 1) => {
        if (bit > 0 && bit < this.bits.length) {
            this.bits.set([+value], bit);
            this.value = '0b'+this.bits.join('') as Word<T>;
            return this.getBit(bit);
        } else {
            return null;
        }
    }

    public getAll = () => {
        return this.value;
    }

}

const myBitField = new BitField<3>('0b111');
myBitField.setBit(2, 0);
console.log(myBitField.getAll());

export default BitField;