// exports.handler = async (event) => {
//     // TODO implement
//     const response = {
//         statusCode: 200,
//         body: JSON.stringify('Hello from Lambda!'),
//     };
//     return response;
// };

'use-strict'; // helps you write cleaner code/prevents you from using undeclared variables
console.log('Loading function');

exports.handler = (event, context, callback) => {
    // let min = 0;
    // let max = 10;
    let min = parseFloat(event.queryStringParameters['min']);
    let max = parseFloat(event.queryStringParameters['max']);
    let generatedNumber = Math.floor(Math.random()* (max - min)) + min;
    
    // CALLBACK
    // - something to call when you want to return something to client
    // - takes in error, and success message (can be string or object)
    
    // return generated number between min and max
    callback(null, JSON.stringify(generatedNumber));
    
    // For Testing:
    // callback(null, JSON.stringify(generatedNumber) + event.name);
    // callback(null, JSON.stringify(event.requestContext.http.path)); 
    // callback(null, JSON.stringify(event.queryStringParameters['min']));
    // callback(null, JSON.stringify(event.queryStringParameters['max']));
    // {"max":"100","min":"0"}
    // callback(null, typeof event.queryStringParameters['min']);
};

