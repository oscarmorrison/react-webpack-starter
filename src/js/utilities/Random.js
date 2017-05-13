const randomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomString = (length) => Math.random()
    .toString(36)
    .replace(/[^a-zA-Z0-9]+/g, '')
    .substr(0, length);

export { randomInt, randomString };
