//                           lab 6


// task one: Simulate Data Fetching Using Promises:

// fetching for user profiles post and comments

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   async function executeTasks() {
//     console.log('Task 1: Start');
//     await delay(1000);  // We will use delay() function to cause a delay of 1 seconds
//     console.log('Task 1: End');
  
//     console.log('Task 2: Start');
//     await delay(2000);  // We will use delay() function to cause a delay of 2 seconds
//     console.log('Task 2: End');
//   }
  
//   executeTasks();


async function userProfile() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("User Profile.");
        resolve({ userId: 1,  name: "Othniel Powell" });
      }, 1000);  
    });
  }
  

  async function posts(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Posts " + userId);
        resolve([{ postId: 1, content: "Post 1" }]);
      }, 2000);  
    });
  }
  

  async function comments(postId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Comments " + postId);
        resolve([{ commentId: 1, text: "post!" }]);
      }, 3000); 
    });
  }

  userProfile(); 
  posts();


  // Task Two: Implement Sequential and Parallel Data Fetching

  //sequential and parallel techniques

  //                            Sequential

  function fetchUserProfile() {
    return new Promise((resolve, reject) => { setTimeout(() => {
    
          console.log("User profile.");
          resolve({ userId: 1, name: "Othniel Powell" });
        })  


    })} 
     
    function fetchUserPost() {
        return new Promise((resolve, reject) => { setTimeout(() => {
        
              console.log("Posts " + userId);
              resolve({ postId: 1, content: "Post!" });
            })  
    
    
        })} 
             

        function fetchcomments() {
            return new Promise((resolve, reject) => {setTimeout(() => {
            
                  console.log("comments " + userId);
                  resolve({ commentId: 1, text: "Gpost!" });
                })  
        
        
            })} 
           //        parallel techniques



           async function fetchDataInParallel() {
        
            const userProfilePromise = fetchUserProfile().catch(error => {
              console.error("Error fetching user profile:", error.message);
              return Promise.reject(error);  
            });
          

            const postsPromise = userProfilePromise.then(userProfile => {
              console.log("User profile retrieved:", userProfile);
              return fetchPosts(userProfile.userId).catch(error => {
                console.error("Error :", error.message);
                return Promise.reject(error);  
              });
            });
          
            
            const commentsPromise = postsPromise.then(posts => {
              console.log("Get Posts :", posts);
          
            
              const commentPromises = posts.map(post =>
                fetchComments(post.postId).catch(error => {
                  console.error(`Error: ${post.postId}:`, error.message);
                  return []; 
                })
              );
          
              
              return Promise.all(commentPromises).catch(error => {
                console.error("Error :", error.message);
                return [];  
            });
          
        
            commentsPromise.catch(error => {
              console.error("Error data:", error.message);
            });
          }) 
        } 
           