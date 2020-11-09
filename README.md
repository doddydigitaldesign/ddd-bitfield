# ddd-bitfield
A simple typed bitfield class utilizing the template literal support coming in Typescript 4.1.

### Example
```typescript
const flags = new BitField(0b010);
console.log(flags.get()); // 2
flags.set(0);
console.log(flags.get()); // 3
```
