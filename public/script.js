const API_KEY = 'YOUR_YOUTUBE_API_KEY'; // Replace with your YouTube Data API key

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // Player is ready
}

searchButton.addEventListener('click', search);
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        search();
    }
});

function search() {
    const query = searchInput.value;
    if (!query) {
        return;
    }

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            displayResults(data.items);
        })
        .catch(error => {
            console.error('Error fetching search results:', error);
            searchResults.innerHTML = '<p>Error fetching results. Please try again later.</p>';
        });
}

function displayResults(items) {
    searchResults.innerHTML = '';
    if (!items || items.length === 0) {
        searchResults.innerHTML = '<p>No results found.</p>';
        return;
    }

    items.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.textContent = item.snippet.title;
        resultItem.dataset.videoId = item.id.videoId;
        resultItem.addEventListener('click', () => {
            playSong(item.id.videoId);
        });
        searchResults.appendChild(resultItem);
    });
}

function playSong(videoId) {
    player.loadVideoById(videoId);
    player.playVideo();
}
