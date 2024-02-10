//types
{
  //primitives
  // any
  const any: any = "string" || true || 55;
  // String
  const string: string = "a string value";

  // Number
  const number: number = 2;

  // Boolean
  const boolean: boolean = true;

  // undefined , null
  const Undefined: undefined = undefined;
  const Null: null = null;

  // objects
  // array
  const numbersArray: number[] = [1, 2, 3];
  const numbersArray_butWithDifferentApproach: Array<number> = [1, 2, 3];
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

  //tuple
  const tupleArray: [number, boolean] = [2, true];
  const nestedTupleArray: [string, [number, boolean]] = ["string", [1, false]];

  //object
  const obj: { prop1: string; prop2: number } = {
    prop1: "string",
    prop2: 3,
  };
  // interface
  interface outinter {
    prop1: string;
    prop2: number;
  }
  const obj1: outinter = {
    prop1: "string",
    prop2: 3,
  };
}
// functions
{
  //normal functions
  function add(x: number, y: number): number {
    return x + y;
  }

  // arrow function
  let add1: (x: number, y: number) => number = function (
    x: number,
    y: number
  ): number {
    return x + y;
  };

  // function interface
  interface AddFunction {
    (x: number, y: number): number;
  }

  let add2: AddFunction = function (x: number, y: number): number {
    return x + y;
  };

  // optional and default parameters
  function ourFunction(param1: string = "string", param2?: string): string {
    return param1 + param2;
  }

  //rest parameters
  function rest(...numbers: number[]) {
    return numbers;
  }

  // callback
  function doSomethingAsync(callback: () => void): void {
    // Simulating asynchronous operation
    setTimeout(callback, 1000);
  }

  // void function
  function doStaf(): void {
    rest();
  }

  // never that throws something
  function never(): never {
    throw new Error();
  }
}
// useless staff
{
  // enums
  enum someStandards {
    x = 6,
    y = 7,
  }
  let a: Array<number> = [someStandards.x, someStandards.y];

  // interfaces
  interface somePath {
    first: string;
    readonly second: number; // cannot be modified again
    third?: boolean; // optional
  }
  // extending interfaces
  interface moreStaff extends somePath {
    forth: number;
  }
  // interfaces usage
  const obj: moreStaff = {
    first: "string",
    second: 7,
    forth: 9,
  };
}
{
  // Types
  {
    // Primitives
    // any
    const anyValue: any = "string" || true || 55;
    // String
    const stringValue: string = "a string value";

    // Number
    const numberValue: number = 2;

    // Boolean
    const booleanValue: boolean = true;

    // undefined , null
    const undefinedValue: undefined = undefined;
    const nullValue: null = null;

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
    const nestedTupleArray: [string, [number, boolean]] = [
      "string",
      [1, false],
    ];

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
  }

  // Functions
  {
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
  }

  // Enums and Interfaces
  {
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
  }
}
