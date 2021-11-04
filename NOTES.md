# aws-lambda-intro NOTES

VIDEO TUTORIALS
- https://www.youtube.com/watch?v=fSUEk6iMW88
- https://www.youtube.com/watch?v=PEatXsXIkLc
- https://www.youtube.com/watch?v=DSrg7hG-jV4
- https://www.youtube.com/watch?v=afhNipd6TkE

DOCS
- https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html

**LAMBDA FUNCTION**
- Your code = your function
- Don’t have to manage server/Scaling/availability (“server less”)
- Supports Java, Python, NodeJS
- All functions are **stateless** = i.e. has local memory, but no long term storage
  - Can connect with S3, DynamoDB

FUNCTION **TRIGGERS** 
- Event based (ex. When a new file is uploaded to an S3 bucket, or through an HTTP Call)

PRICING
- Free tier available
- 1M requests every month
- 3M seconds of compute time
- No usage = no costs

3 WAYS TO UPLOAD YOUR CODE
- Edit inline in the browser/AWS console
- Upload a .ZIP file
- Upload a file from Amazon S3

NOTES
- **Timeout**if your function hasn’t finished within this timeout period, AWS kills the function and returns an error message
- Make sure to deploy code first before testing (or else you’ll be testing old code)
- AWS Docs/Videos have different UI layouts then current updated AWS UI

CONFIGURE **TEST EVENTS** JSON
- This is an object that is passed into the lambda handler function as the first argument (event)

**API GATEWAY**
- Lets you create HTTP or REST endpoints
- Sits in front of an API that is the single-entry point for a defined backend API
- Connects microservices
- **Gateway Security**
  - **Open** API is available to anyone
- Can create an API through the Lambda Service OR through the API Gateway service (but you have to integrate the lambda function into it)

PASSING INFO Through API Gateway
- ex. want client to pass in data to our backend function
- ex. through query string in url
- see index.js for example

## QUESTIONS
- if we have a JS backend, is the only way to create a route through the browser aws console/api gateway? (i.e. we don't write routes in node like in a traditional MVC framework?)