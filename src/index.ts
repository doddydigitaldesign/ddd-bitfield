import { BitFieldType, Word, WordLength } from './types';

class BitField<T extends WordLength> {
    protected value: BitFieldType<T>;
    private bits: Uint8Array;
    constructor(initialValue: BitFieldType<T>)
    {
        this.value = initialValue;
        this.bits = new Uint8Array(initialValue.split('').map(x => +x));

    }

    public getBit = (bit: number) => {
        if (bit >= 0 && bit < this.bits.length) {
            return this.bits[bit];
        } else {
            return null;
        }
    }

    public setBit = (bit: number, value: 0|1|boolean = 1) => {
        if (bit >= 0 && bit < this.bits.length) {
            // this.bits.set([+value], bit);
            this.bits[bit] = +value;
            this.value = this.bits.join('') as Word<T>;
            return (this.bits[bit] << bit).toString(2);
        } else {
            return null;
        }
    }

    public get = () => {
        return this.value;
    }

    public toArray = () => {
        return [...this];
    }

    *[Symbol.iterator] () {
        for (const bit of this.bits) {
            yield bit;
        }
    }

}

export default BitField;