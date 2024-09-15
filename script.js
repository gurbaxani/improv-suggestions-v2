document.addEventListener('DOMContentLoaded', function () {
    const resultDiv = document.getElementById('result');
    const timerDisplay = document.getElementById('timer-display');
    const startButton = document.getElementById('start-timer');
    const stopButton = document.getElementById('stop-timer');

    let timerInterval;
    let seconds = 0;

    // Arrays for each category
    const objects = ['Book', 'Chair', 'Laptop', 'Pen', 'Phone', 'Sock', 'Table', 'Umbrella', 'Wallet', 'Watch'];
    const relationships = ['Friend', 'Parent', 'Sibling', 'Colleague', 'Neighbor', 'Partner', 'Mentor', 'Student', 'Boss', 'Customer'];
    const locations = ['Park', 'Library', 'Beach', 'Restaurant', 'Office', 'Airport', 'Museum', 'Mall', 'Gym', 'Mountain'];
    const occupations = ['Teacher', 'Engineer', 'Artist', 'Chef', 'Doctor', 'Writer', 'Musician', 'Scientist', 'Farmer', 'Nurse'];
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const phrases = ['Break a leg', 'Hit the nail on the head', 'Under the weather', 'Piece of cake', 'Let the cat out of the bag', 'Once in a blue moon', 'Bite the bullet', 'Spill the beans', 'Cost an arm and a leg', 'Hit the sack'];
    const emotions = ['Happy', 'Sad', 'Angry', 'Excited', 'Confused', 'Nervous', 'Bored', 'Relieved', 'Surprised', 'Frustrated'];
    const genres = ['Comedy', 'Drama', 'Horror', 'Romance', 'Action', 'Sci-Fi', 'Fantasy', 'Mystery', 'Thriller', 'Documentary'];
    const quirks = ['Obsessive', 'Clumsy', 'Eccentric', 'Perfectionist', 'Shy', 'Talkative', 'Stubborn', 'Generous', 'Impulsive', 'Quiet'];
    const superpowers = ['Telepathy', 'Invisibility', 'Super strength', 'Flight', 'Telekinesis', 'Time travel', 'Shape-shifting', 'Healing', 'Teleportation', 'Mind control'];

    let lastSelectedButton = null;

    // Function to set a random item from a given array to resultDiv
    function setRandomResult(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        resultDiv.textContent = array[randomIndex];
    }

    // Function to reset all button texts
    function resetButtonTexts() {
        document.querySelectorAll('.nav-button').forEach(button => {
            button.textContent = button.getAttribute('data-original-text');
        });
    }

    // Function to handle button setup
    function setupButton(buttonId, array) {
        const button = document.getElementById(buttonId);
        button.addEventListener('click', function () {
            if (lastSelectedButton) {
                resetButtonTexts();
            }

            if (button !== lastSelectedButton) {
                button.textContent = '⟳ ' + button.getAttribute('data-original-text');
                setRandomResult(array);
                lastSelectedButton = button;
            } else {
                lastSelectedButton = null;
                resultDiv.textContent = 'Click a button to get a suggestion';
            }
        });

        // Store the original button text
        button.setAttribute('data-original-text', button.textContent);
    }

    // Set up event listeners for all buttons
    setupButton('object-btn', objects);
    setupButton('relationship-btn', relationships);
    setupButton('location-btn', locations);
    setupButton('occupation-btn', occupations);
    setupButton('alphabet-btn', alphabets);
    setupButton('phrase-btn', phrases);
    setupButton('emotion-btn', emotions);
    setupButton('genre-btn', genres);
    setupButton('quirk-btn', quirks);
    setupButton('superpower-btn', superpowers);

    // Timer functions
    function startTimer() {
        if (timerInterval) return; // Prevent multiple intervals

        timerInterval = setInterval(function () {
            seconds++;
            const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
            const secs = String(seconds % 60).padStart(2, '0');
            timerDisplay.textContent = `${minutes}:${secs}`;
        }, 1000);

        startButton.disabled = true; // Disable the Start button when the timer is running
        stopButton.disabled = false; // Enable the Stop button when the timer is running
    }

    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }

        stopButton.textContent = '↩️ Reset'; // Change the button text to 'Reset'
        startButton.disabled = false; // Re-enable the Start button
        stopButton.disabled = true; // Disable the Stop button after reset
    }

    function resetTimer() {
        seconds = 0;
        timerDisplay.textContent = '00:00';
        stopButton.textContent = '✋ Stop'; // Reset the button text to 'Stop'
        stopButton.disabled = false; // Re-enable the Stop button
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', function () {
        if (stopButton.textContent === '✋ Stop') {
            stopTimer();
        } else {
            resetTimer(); // Reset the timer and button text if already stopped
        }
    });
});
