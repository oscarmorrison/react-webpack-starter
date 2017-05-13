import { randomInt, randomString } from '../src/js/utilities/Random';

test('expect random to be in range, with max + min', () => {
    const max = 10, min = 5;
    const result= randomInt(max,min);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
});

test('expect random to be in range, with max', () => {
    const max = 1;
    const result= randomInt(max);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(max);
});


test('expect random string with correct length', () => {
    const length = 10;
    const string = randomString(length);
    expect(string.length).toBe(length);
});
