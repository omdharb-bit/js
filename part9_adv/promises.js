// A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.




function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true
      if (success) {
        resolve("Data fetched successfully")
      } else {
      reject("Error fetching data")
      }
    },3000)


  })
}

fetchData()
  .then((data) => console.log(data))
 
  .catch((error) => console.error(error) )
