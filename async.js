// we first declare a function that returns a promise that resolves to a value of "Hello" 
// after 2 seconds. We then declare an async function and await for the promise to 
// resolve before logging the message to the console


function helloAsync() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello');
      }, 2000);
    });
  }
  
  async function msg() {
    console.log("I am from before await")
    // the await expression will pause the async function and wait for the promise to resolve prior to moving on
    const msg = await helloAsync();
    console.log('Message:', msg);
    console.log("I am from after await")

    
  }

  console.log("I am from log 1")
  msg();
  console.log("I am from log 2")


//   Output:
// I am from log 1
// I am from before await
// I am from log 2
// Message: Hello
// I am from after await