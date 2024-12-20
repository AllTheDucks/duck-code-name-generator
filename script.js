const adjectives = [
    "Adorable", "Blazing", "Bold", "Bright", "Brilliant", "Brisk", "Bubbly", "Buoyant",
    "Charming", "Cheerful", "Clever", "Cozy", "Crisp", "Curious", "Dainty", "Dashing",
    "Dreamy", "Dutiful", "Effervescent", "Elegant", "Endearing", "Energetic", "Fanciful",
    "Fearless", "Feathery", "Fluffy", "Gallant", "Gentle", "Glorious", "Golden", "Graceful",
    "Harmonious", "Hearty", "Humble", "Jaunty", "Jolly", "Jubilant", "Lively", "Loyal",
    "Luminous", "Lustrous", "Majestic", "Mellow", "Noble", "Peppy", "Perky", "Playful",
    "Plucky", "Quirky", "Radiant", "Regal", "Serene", "Shimmering", "Silver", "Snappy",
    "Soaring", "Spirited", "Splendid", "Sprightly", "Sunny", "Swift", "Tenacious",
    "Velvety", "Vigorous", "Vivid", "Whimsical", "Winsome", "Witty", "Wondrous"
];

const duckWords = [
    "Aquatic", "Bantam", "Beak", "Bill", "Billow", "Brood", "Bufflehead", "Canvasback",
    "Clutch", "Coast", "Couple", "Creek", "Cygnet", "Dabbler", "Decoy", "Dewlap",
    "Diver", "Down", "Drake", "Duckcall", "Duckling", "Duckpond", "Ducktail", "Duckweed",
    "Eider", "Feathers", "Flap", "Flapper", "Float", "Flock", "Foamy", "Fowler",
    "Frolic", "Gander", "Garganey", "Glide", "Grazers", "Harlequin", "Hatchling", "Mallard",
    "Marsh", "Merganser", "Nest", "Nestling", "Paddle", "Peep", "Perch", "Plop",
    "Plumage", "Pond", "Preen", "Preener", "Puddle", "Quack", "Quacker", "Quarrel",
    "Raft", "Reeds", "Ripple", "Scoter", "Shelduck", "Shoveler", "Splash", "Squabble",
    "Squawk", "Stream", "Swan", "Swimmer", "Swirl", "Teal", "Waddle", "Waterfowl",
    "Webfoot", "Wetland", "Whiffle", "Whistler", "Wing", "Wingspan", "Woodduck"
];

/**
 * Generates a random version code name in the format "Adjective DuckWord".
 */
function generateCodeName() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomDuckWord = duckWords[Math.floor(Math.random() * duckWords.length)];
    return `${randomAdjective} ${randomDuckWord}`;
}

// Attach event listener to the button
document.getElementById("generate-btn").addEventListener("click", () => {
    const codeNameElement = document.getElementById("code-name");
    codeNameElement.textContent = generateCodeName();
});