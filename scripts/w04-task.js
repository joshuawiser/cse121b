/* LESSON 3 - Programming Tasks */
/* Profile Object  */
let myProfile = {
    name: "Joshua Wiser",
    photo: "images/photo_of_me.jpg",
    favoriteFoods: [
      'Sushi',
      'Chocolate',
      'Steak',
    ],
    hobbies: [
      'Guitar',
      'Disc Golf',
      'Working out',
    ],
    placesLived: [],
  };
/* Populate Profile Object with placesLive objects */
 myProfile.placesLived.push({
    place: "Washington",
    length: "18 years"
  });
  myProfile.placesLived.push({
    place: "Rexburg",
    length: "3 years"
  });
/* DOM Manipulation - Output */
/* Name */
document.getElementById("name").textContent = myProfile.name;
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;
const favoriteFoodsList = document.getElementById("favorite-foods");
  myProfile.favoriteFoods.forEach((food) => {
    const listItem = document.createElement("li");
    listItem.textContent = food;
    favoriteFoodsList.appendChild(listItem);
  });
/* Hobbies List */
  const hobbiesList = document.getElementById("hobbies");
  myProfile.hobbies.forEach((hobby) => {
    const listItem = document.createElement("li");
    listItem.textContent = hobby;
    hobbiesList.appendChild(listItem);
  });
/* Places Lived DataList */
  const placesLivedList = document.getElementById("places-lived");
  myProfile.placesLived.forEach((placeInfo) => {
    const dt = document.createElement("dt");
    dt.textContent = placeInfo.place;
    const dd = document.createElement("dd");
    dd.textContent = placeInfo.length;
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
  });
  
  