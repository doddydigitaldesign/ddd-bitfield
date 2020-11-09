
class BitField {
    value: number;
    constructor(initialValue: number)
    {
        this.value = initialValue
    }

    get = (bit?: number) => {
        if (typeof bit === 'number') {
            return this.value & (1 << bit);
        }
        return this.value;
        
    }

    set = (bit: number) => {
            this.value = (1 << bit) ^ this.value;
            return this.value;
    }
}

const flags = new BitField(0b10);
console.log(flags.get()); // 2
flags.set(0);
console.log(flags.get()); // 3
flags.set(1);
console.log(flags.get()); // 1

export default BitField;