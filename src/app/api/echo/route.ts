// import { NextResponse } from "next/server";


// export async function GET(request:Request) {
//     // this line import create a new URL object from the 'request.url' and then extract the searchParams property from it. this allow you to access and manipulate the querey parameter of the url.
//     const {searchParams} = new URL(request.url)
//     const name = searchParams.get('name')
//     // this line use the get method of the searchParmas object to retrieve the values of the query parameter name "name" .
//     const instrument = searchParams.get('instrument')
//   return NextResponse.json({name, instrument})
// }





// import { NextResponse } from "next/server";


// export async function GET(response: Response) {
//     const {searchParams} = new URL(response.url)
//     const obj = Object.fromEntries(searchParams.entries())
//   return NextResponse.json(obj)
// }
// // Object.fromEntries(): This is a static method of the Object class introduced in ECMAScript 2019 (ES10). It takes an iterable (like an array or a map) of key-value pairs and returns a new object where each key-value pair is represented as a property on the object.

// // searchParams.entries(): This method returns an iterator that provides key-value pairs for each query parameter in the searchParams object. Each pair is represented as an array with two elements: [key, value].


// import { NextResponse } from "next/server";

// type Feedback = {
//     name?: string,
//     email?: string,
//     message?: string,
// }

// export async function POST(request:Request){
//     const data: Feedback = await request.json()
//     const {name, email, message} = data
//     return NextResponse.json({name, email, message})
// }

// // export async function POST(request: Request) { ... }: This is an asynchronous function named POST that handles incoming HTTP POST requests. In a Next.js API route, functions named after HTTP methods automatically handle requests of that type.

// // const data: Feedback = await request.json();: This line uses request.json() to asynchronously parse the JSON data from the incoming request. It's assuming that the incoming request contains JSON data that matches the structure of the Feedback type.

// // const { name, email, message } = data;: Here, the code destructures the properties name, email, and message from the parsed JSON data.

// // return NextResponse.json({ name, email, message });: This line uses the NextResponse.json() method to construct a JSON response containing the extracted name, email, and message properties. The resulting JSON response will reflect the data extracted from the POST request's payload.

