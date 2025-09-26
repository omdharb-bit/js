function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve({name: "chaicode",url: "https://chaicode.com"})
    },3000)
  
  })
}

async function getUserdata() {
  try {
  console.log('Fetching user data....');
    const userData = await fetchUserData();
    console.log("User data fetched successfully");
    console.log("User data:", userData);
    
  } catch (error){
  console.log("Error fetching data",error);
  
  }
  }
  getUserdata()
