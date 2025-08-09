
# NewarPlay

**Tagline:**  
*Endless Music, No Interruptions – Just You and the Beat.*

---

## Overview

NewarPlay is a clean, responsive web music player designed to deliver endless streaming with a smooth, interruption-free listening experience. Inspired by Spotify’s sleek design, NewarPlay lets users search for songs and artists using the YouTube Data API and plays audio-only from YouTube videos with a minimalistic interface.

---

## Features

- Search songs and artists using YouTube Data API v3
- Display clickable search results with song titles
- Audio-only playback with the YouTube IFrame Player API (video hidden)
- Minimal dark-themed UI with green accent (#1DB954)
- Responsive layout for desktop and mobile
- Tagline prominently displayed for branding
- Lightweight and simple to use

---

## Installation & Usage

1. Clone or download the repository.

2. Obtain a **YouTube Data API key** from [Google Cloud Console](https://console.cloud.google.com/apis/credentials).

3. Replace the placeholder `'YOUR_YOUTUBE_API_KEY'` in the JavaScript code with your actual API key.

4. Open the `index.html` file in a modern web browser.

5. Use the search input to find songs or artists, then click on a result to play the audio.

---

## Notes

- Due to YouTube API limitations, ads may still play if videos contain ads; these cannot be blocked via the API.
- The video player is visually hidden to create an audio-only experience.
- This is a frontend-only demo and does not include user accounts or playlist saving.
- For full features like playlists, user authentication, and advanced controls, a backend implementation is needed.

---

## Technologies Used

- HTML5, CSS3
- JavaScript (ES6+)
- YouTube Data API v3
- YouTube IFrame Player API

---

## License

This project is for personal and educational use. No license is specified.

---

## Contact

For questions or suggestions, feel free to reach out.

---

Enjoy endless music with **NewarPlay** — just you and the beat!
