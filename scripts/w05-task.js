/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById("temples");
const templeList = [];

/* async displayTemples Function */

const displayTemples = async (temples) => {
    templesElement.innerHTML = "";

    const mainContainer = document.createElement("div");

    const container = document.createElement("div");
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(3, 1fr)";
    container.style.gridGap = "50px";

    await Promise.all(temples.map(async (temple) => {
        const article = document.createElement("article");

        const cardContainer = document.createElement("div");
        cardContainer.style.backgroundColor = "lightgrey";
        cardContainer.style.padding = "10px";
        cardContainer.style.textAlign = "center";

        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        img.style.width = "400px";
        img.style.height = "300px";

        cardContainer.appendChild(h3);
        cardContainer.appendChild(img);

        article.appendChild(cardContainer);

        container.appendChild(article);
    }));

    mainContainer.appendChild(container);
    templesElement.appendChild(mainContainer);
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  try {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
      const data = await response.json();
      templeList.push(...data);
      displayTemples(templeList);
    } else {
      console.error("Failed to fetch temple data.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
  };

/* sortBy Function */
  const sortBy = (temples) => {
    reset();
    const filter = document.getElementById("sortBy").value;
    switch (filter) {
      case "utah":
        displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
        break;
      case "nonutah":
        displayTemples(temples.filter((temple) => !temple.location.excludes("Utah")));
        break;
      case "older":
        displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case "all":
      default:
        displayTemples(temples);
        break;
    }
  };
 document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(templeList);
  });

/* Event Listener */
 getTemples();

