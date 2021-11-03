// exports.handler = async (event) => {
//     // TODO implement
//     const response = {
//         statusCode: 200,
//         body: JSON.stringify('Hello from Lambda!'),
//     };
//     return response;
// };

"use-strict"; // helps you write cleaner code/prevents you from using undeclared variables
console.log("Loading function");

exports.handler = (event, context, callback) => {
  let min = 0;
  let max = 10;
  let generatedNumber = Math.floor(Math.random() * (max - min)) + min;

  // CALLBACK
  // - something to call when you want to return something to client
  // - takes in error, and success message (can be string or object)

  // return generated number
  callback(null, JSON.stringify(generatedNumber) + event.name);
};
