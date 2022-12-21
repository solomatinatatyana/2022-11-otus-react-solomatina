export type ScalarOperationType = (first: number, second: number) => number;
export type UnaryScalarOperationType = (value: number) => number;

export const mul: ScalarOperationType = (
    first: number,
    second: number
): number => first * second;

export const div: ScalarOperationType = (
    first: number,
    second: number
): number => first / second;

export const add: ScalarOperationType = (
    first: number,
    second: number
): number => first + second;

export const minus: ScalarOperationType = (
    first: number,
    second: number
): number => first - second;

export const square: UnaryScalarOperationType = (
    value: number
): number => value * value;

export const pow: ScalarOperationType = (
    value: number,
    powValue: number
): number => Math.pow(value, powValue);

export const fact: UnaryScalarOperationType = (value: number): number => {
    if (value == 0) return 1;
    return value * fact(value - 1);
};

export const scalarMathOperators: { [key: string]: ScalarOperationType } = {
    "*": mul,
    "/": div,
    "+": add,
    "-": minus,
    "^": pow,
};

export const unaryMathOperators: { [key: string]: UnaryScalarOperationType } = {
    "!": fact,
    "**": square
};

export const mathOperators: {
    [key: string]:
        | ScalarOperationType
        | UnaryScalarOperationType;
} = {
    ...scalarMathOperators,
    ...unaryMathOperators,
};

export const mathPriorities: number[] = [0, 1, 2];

const [ZERO, FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
    "!": ZERO,
    "**": ZERO,
    "^": FIRST,
    "*": FIRST,
    "/": FIRST,
    "+": SECOND,
    "-": SECOND,
};
