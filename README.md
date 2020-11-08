# ddd-bitfield
A simple typed bitfield class utilizing the template literal support coming in Typescript 4.1.

### Example
```typescript
const flags = new BitField<3>('010');
console.log(flags.get()); // 010
flags.setBit(0, 1);
console.log(flags.get()); // 110

// Implements the iterator protocol
const [one, two, three] = flags;
console.log(one, two, three); // 1 1 0
console.log(flags.toArray(),'-', [...flags]); // [ 1, 1, 0 ] - [ 1, 1, 0 ]
```
