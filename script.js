document.addEventListener('DOMContentLoaded', function () {
    const resultDiv = document.getElementById('result');

    // Arrays for each category
    const objects = [
        'Book', 'Chair', 'Laptop', 'Pen', 'Phone', 'Sock', 'Table', 'Umbrella', 'Wallet', 'Watch'
    ];
    const relationships = [
        'Friend', 'Parent', 'Sibling', 'Colleague', 'Neighbor', 'Partner', 'Mentor', 'Student', 'Boss', 'Customer'
    ];
    const locations = [
        'Park', 'Library', 'Beach', 'Restaurant', 'Office', 'Airport', 'Museum', 'Mall', 'Gym', 'Mountain'
    ];
    const occupations = [
        'Teacher', 'Engineer', 'Artist', 'Chef', 'Doctor', 'Writer', 'Musician', 'Scientist', 'Farmer', 'Nurse'
    ];
    const alphabets = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    const phrases = [
        'Break a leg', 'Hit the nail on the head', 'Under the weather', 'Piece of cake', 'Let the cat out of the bag', 'Once in a blue moon', 'Bite the bullet', 'Spill the beans', 'Cost an arm and a leg', 'Hit the sack'
    ];
    const emotions = [
        'Happy', 'Sad', 'Angry', 'Excited', 'Confused', 'Nervous', 'Bored', 'Relieved', 'Surprised', 'Frustrated'
    ];
    const genres = [
        'Comedy', 'Drama', 'Horror', 'Romance', 'Action', 'Sci-Fi', 'Fantasy', 'Mystery', 'Thriller', 'Documentary'
    ];
    const quirks = [
        'Obsessive', 'Clumsy', 'Eccentric', 'Perfectionist', 'Shy', 'Talkative', 'Stubborn', 'Generous', 'Impulsive', 'Quiet'
    ];
    const superpowers = [
        'Telepathy', 'Invisibility', 'Super strength', 'Flight', 'Telekinesis', 'Time travel', 'Shape-shifting', 'Healing', 'Teleportation', 'Mind control'
    ];

    // Function to set a random item from a given array to resultDiv
    function setRandomResult(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        resultDiv.textContent = array[randomIndex];
    }

    // Event listeners for buttons
    document.getElementById('object-btn').addEventListener('click', () => setRandomResult(objects));
    document.getElementById('relationship-btn').addEventListener('click', () => setRandomResult(relationships));
    document.getElementById('location-btn').addEventListener('click', () => setRandomResult(locations));
    document.getElementById('occupation-btn').addEventListener('click', () => setRandomResult(occupations));
    document.getElementById('alphabet-btn').addEventListener('click', () => setRandomResult(alphabets));
    document.getElementById('phrase-btn').addEventListener('click', () => setRandomResult(phrases));
    document.getElementById('emotion-btn').addEventListener('click', () => setRandomResult(emotions));
    document.getElementById('genre-btn').addEventListener('click', () => setRandomResult(genres));
    document.getElementById('quirk-btn').addEventListener('click', () => setRandomResult(quirks));
    document.getElementById('superpower-btn').addEventListener('click', () => setRandomResult(superpowers));
});
