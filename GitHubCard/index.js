/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/Kat2bk").then(response => {
  console.log(response);
  displayCards.append(createFollower(response));
});

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "devin5",
  // "miragekamran",
  "Minakshi-Verma",
  "GideonOgbuagu",
  "xpinero",
  "SarahMLawrence",
  "miragekamran"
];

followersArray.forEach(function(item) {
  axios
    .get(`https://api.github.com/users/${item}`)
    .then(response => {
      displayCards.append(createFollower(response));
    })
    .catch(error => {
      console.log("unable to grab data", error);
    });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createFollower(obj) {
  const userCard = document.createElement("div");
  const userImage = document.createElement("img");
  const userInfo = document.createElement("div");
  const userTitle = document.createElement("h3");
  const userName = document.createElement("p");
  const userLocation = document.createElement("p");
  const userAddress = document.createElement("p");
  const userFollowers = document.createElement("p");
  const userFollowing = document.createElement("p");
  const userBio = document.createElement("p");

  // appending

  userCard.append(userImage);
  userCard.append(userInfo);
  userInfo.append(userTitle);
  userInfo.append(userName);
  userInfo.append(userLocation);
  userInfo.append(userAddress);
  userInfo.append(userFollowers);
  userInfo.append(userFollowing);
  userInfo.append(userBio);

  // adding classlist

  userCard.classList.add("card");
  userImage.classList.add("img");
  userTitle.classList.add("name");
  userName.classList.add("username");
  userLocation.classList.add("p");
  userAddress.classList.add("p");
  userFollowers.classList.add("p");
  userFollowing.classList.add("p");
  userBio.classList.add("p");

  // text
  userImage.setAttribute("src", obj.data.avatar_url);
  userTitle.textContent = obj.data.name;
  userName.textContent = obj.data.login;
  userLocation.textContent = obj.data.location;
  userAddress.textContent = obj.data.blog;
  userFollowers.textContent = "Followers: " + obj.data.followers;
  userFollowing.textContent = "Following: " + obj.data.following;
  userBio.textContent = obj.data.bio;

  return userCard;
}

const displayCards = document.querySelector(".cards");

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
