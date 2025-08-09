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

## Local Development

1. Clone or download the repository.

2. Obtain a **YouTube Data API key** from [Google Cloud Console](https://console.cloud.google.com/apis/credentials).

3. Replace the placeholder `'YOUR_YOUTUBE_API_KEY'` in `public/script.js` with your actual API key.

4. Open the `public/index.html` file in a modern web browser.

5. Use the search input to find songs or artists, then click on a result to play the audio.

---

## Deployment on Render

This project can be deployed as a Static Site on [Render](https://render.com/).

1.  Connect your GitHub repository to Render.
2.  Create a new **Static Site**.
3.  Use the following settings during creation:
    -   **Publish Directory**: `public`
    -   **Build Command**: (leave this empty)
4.  Deploy the site. Render will automatically serve the files from the `public` directory.

---

## Notes

- Due to YouTube API limitations, ads may still play if videos contain ads; these cannot be blocked via the API.
- The video player is visually hidden to create an audio-only experience.
- This is a frontend-only demo and does not include user accounts or playlist saving.

---

## Technologies Used

- HTML5, CSS3
- JavaScript (ES6+)
- YouTube Data API v3
- YouTube IFrame Player API

---

Enjoy endless music with **NewarPlay** — just you and the beat!