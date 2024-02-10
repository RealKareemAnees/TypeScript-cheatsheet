# TypeScript Cheat Sheet

---

## Primitive Types

```typescript
// Any
const anyValue: any = "string" || true || 55;

// String
const stringValue: string = "a string value";

// Number
const numberValue: number = 2;

// Boolean
const booleanValue: boolean = true;

// Undefined and Null
const undefinedValue: undefined = undefined;
const nullValue: null = null;
```

## Object Types

```typescript
// Arrays
const numbersArray: number[] = [1, 2, 3];
const numbersArrayAlternative: Array<number> = [1, 2, 3];
const mixedArray: (string | number)[] = ["string", 1, 0, "string"];
const multiDimensionalArray: number[][] = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const nestedArray: Array<Array<string>> = [
  ["string", "another string"],
  ["string", "another string"],
  ["string", "another string"],
];

// Tuple
const tupleArray: [number, boolean] = [2, true];
const nestedTupleArray: [string, [number, boolean]] = ["string", [1, false]];

// Object
const obj: { prop1: string; prop2: number } = {
  prop1: "string",
  prop2: 3,
};

// Interface
interface SomeInterface {
  prop1: string;
  prop2: number;
}

const obj1: SomeInterface = {
  prop1: "string",
  prop2: 3,
};
```

## Functions

```typescript
// Normal Function
function add(x: number, y: number): number {
  return x + y;
}

// Arrow Function
const addArrow: (x: number, y: number) => number = (
  x: number,
  y: number
): number => x + y;

// Function Interface
interface AddFunction {
  (x: number, y: number): number;
}

const addInterface: AddFunction = (x: number, y: number): number => x + y;

// Optional and Default Parameters
function ourFunction(param1: string = "string", param2?: string): string {
  return param1 + (param2 ?? "");
}

// Rest Parameters
function rest(...numbers: number[]): number[] {
  return numbers;
}

// Callback
function doSomethingAsync(callback: () => void): void {
  // Simulating asynchronous operation
  setTimeout(callback, 1000);
}

// Void Function
function doStuff(): void {
  rest();
}

// Never Function
function throwError(): never {
  throw new Error();
}
```

## Enums and Interfaces

```typescript
// Enums
enum SomeStandards {
  X = 6,
  Y = 7,
}

const enumValues: number[] = [SomeStandards.X, SomeStandards.Y];

// Interfaces
interface SomePath {
  first: string;
  readonly second: number; // Cannot be modified again
  third?: boolean; // Optional
}

// Extending Interfaces
interface MoreStuff extends SomePath {
  forth: number;
}

// Interfaces Usage
const obj: MoreStuff = {
  first: "string",
  second: 7,
  forth: 9,
};
```

---

# this is the end
