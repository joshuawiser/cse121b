
    // Step 2 - Variables
    const fullName = 'Joshua Wiser';
    const currentYear = new Date().getFullYear();
    const profilePicture = "Fall 23/cse121b/images/photo_of_me.png";

    // Step 3 - Element Variables
    const nameElement = document.getElementById('name');
    const foodElement = document.getElementById("food");
    const yearElement = document.getElementById('year');

    // Check if the nameElement, foodElement, and yearElement exist
    if (nameElement && foodElement && yearElement) {
        // Step 4 - Adding Content
        nameElement.innerHTML = `<strong>${fullName}</strong>`;
        yearElement.textContent = `<strong>${currentYear}</strong>`;

        // Check if the imageElement (profilePicture) exists
        const imageElement = document.querySelector('img');
        if (imageElement) {
            imageElement.src = profilePicture;
            imageElement.alt = `Profile image of ${fullName}`;
        } else {
            console.error("The 'profilePicture' element (img) was not found.");
        }

        // Step 5 - Array
        const favoriteFoods = ["Pizza", "Sushi", "Chocolate"];
        foodElement.innerHTML = favoriteFoods.join('<br>');

        const newFavoriteFood = "Burgers";
        favoriteFoods.push(newFavoriteFood);
        foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;

        favoriteFoods.shift();
        foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;

        favoriteFoods.pop();
        foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;
    } else {
        console.error("One or more required elements were not found.");
    }
;