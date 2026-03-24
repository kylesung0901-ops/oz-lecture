const jsonString = `{
    "name": "Alice",
    "age": 30
}`;
console.log(jsonString);

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString);