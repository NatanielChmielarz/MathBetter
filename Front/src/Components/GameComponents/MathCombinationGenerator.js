import * as math from 'mathjs';

const BasicOperators = ['+', '-', '*', '/'];
const ExpandedOperators = ['!', '^2'];
const SqrtOrBracket = ['sqrt(', '('];

function hasMoreThanTwoDecimalPlaces(number) {
    return (
        Number.isFinite(number) &&
        number >= -5000 &&
        number <= 5000 &&
        Math.abs(number * 100) % 1 === 0
    );
}

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

async function evaluateAction(action) {
    try {
        const result = math.evaluate(action);
        return result;
    } catch (error) {
        return NaN;
    }
}

export async function generateExpression(Number_1, Number_2, Number_3, Range) {
    const AllActions = [
        `${Number_1}${randomElement(BasicOperators)}${Number_2}${randomElement(BasicOperators)}${Number_3}`,
        `(${Number_1}${randomElement(BasicOperators)}${Number_2})${randomElement(BasicOperators)}${Number_3}`,
        `${Number_1}${randomElement(BasicOperators)}(${Number_2}${randomElement(BasicOperators)}${Number_3})`,
        `${Number_1}${randomElement(ExpandedOperators)}${randomElement(BasicOperators)}${Number_2}${randomElement(BasicOperators)}${Number_3}`,
        `${Number_1}${randomElement(BasicOperators)}${Number_2}${randomElement(ExpandedOperators)}${randomElement(BasicOperators)}${Number_3}`,
        `${Number_1}${randomElement(BasicOperators)}${Number_2}${randomElement(BasicOperators)}${Number_3}${randomElement(ExpandedOperators)}`,
        `${randomElement(SqrtOrBracket)}${Number_1}${randomElement(BasicOperators)}${Number_2}${randomElement(BasicOperators)}${Number_3})${randomElement(ExpandedOperators)}`,
        `${randomElement(SqrtOrBracket)}${Number_1}${randomElement(ExpandedOperators)}${randomElement(BasicOperators)}${Number_2})${randomElement(BasicOperators)}${Number_3}`,
        `${randomElement(SqrtOrBracket)}${Number_1}${randomElement(BasicOperators)}${Number_2}${randomElement(ExpandedOperators)})${randomElement(BasicOperators)}${Number_3}`,
        `${randomElement(SqrtOrBracket)}${Number_1}${randomElement(BasicOperators)}${Number_2})${randomElement(ExpandedOperators)}${randomElement(BasicOperators)}${Number_3}`,
        `${randomElement(SqrtOrBracket)}${Number_1}${randomElement(BasicOperators)}${Number_2})${randomElement(BasicOperators)}${Number_3}${randomElement(ExpandedOperators)}`,
        `${Number_1}${randomElement(ExpandedOperators)}${randomElement(BasicOperators)}${randomElement(SqrtOrBracket)}${Number_2}${randomElement(BasicOperators)}${Number_3})`,
        `${Number_1}${randomElement(BasicOperators)}${randomElement(SqrtOrBracket)}${Number_2}${randomElement(ExpandedOperators)}${randomElement(BasicOperators)}${Number_3})`,
        `${Number_1}${randomElement(BasicOperators)}${randomElement(SqrtOrBracket)}${Number_2}${randomElement(BasicOperators)}${Number_3}${randomElement(ExpandedOperators)}`,
        `${Number_1}${randomElement(BasicOperators)}${randomElement(SqrtOrBracket)}${Number_2}${randomElement(BasicOperators)}${Number_3})${randomElement(ExpandedOperators)}`,
    ];

    let Value = NaN;
    let MaxIterations = 0;
    let TMP;

    do {
        let RandomAction = Math.floor(Math.random() * Range);
        let action = AllActions[RandomAction];
        Value = await evaluateAction(action);
        TMP = action;

        MaxIterations++;
    } while (!hasMoreThanTwoDecimalPlaces(Value) && MaxIterations < 100);

    console.log("==============");
    console.log("Liczby z których trzeba ułozyć równanie:" + Number_1 + " , " + Number_2 + " , " + Number_3);
    console.log("Przykładowe wyrażanie na podstawie którego została ustalona wartość do ułożenia: " + TMP);
    console.log("Wartość do ułożenia: " + Value);

    return Value;
}
