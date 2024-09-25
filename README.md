# Top 10 MCU, DC, and Anime Trailers 🔥🎥

This project is a dynamic webpage that showcases the **Top 10 Highest-Rated Trailers** from the Marvel Cinematic Universe (MCU), with options to switch between **DC** and **Anime** trailers. It provides users with a seamless video viewing experience, allowing them to easily navigate through trailers and switch between different playlists using interactive buttons.

## ✨ Features

- **Responsive Layout** 📱: The webpage is designed to adapt to various screen sizes, ensuring an optimal viewing experience on both desktop and mobile devices.
- **Video Playlist Switching** 🔄: Users can switch between three playlists — **MCU trailers**, **DC trailers**, and **Anime trailers** — with dedicated buttons for each.
- **Video Cycling** 🎥: Navigate through the trailers in each playlist using the "Next" and "Back" buttons.
- **Return Button** 🔙: A "Back to MCU/Reset" button allows users to return to the default MCU playlist at any time.
- **Styled Buttons** 🎨: Interactive buttons with hover effects, including smooth scaling animations, enhance user experience.
- **Embedded YouTube Videos** ▶️: All trailers are embedded directly from YouTube for easy streaming.

## 🛠️ Technologies Used

- **HTML**: Structures the layout of the webpage.
- **CSS**: Custom styling for the video container, buttons, and background using flexbox, gradients, and box shadows.
- **JavaScript**: Manages playlist switching, video cycling, and dynamic iframe updates to display the selected trailer.

## ⚙️ How It Works

1. The webpage embeds a YouTube video within an `<iframe>` element.
2. There are three different arrays in the JavaScript file:
   - MCU trailers
   - DC trailers
   - Anime trailers
3. Users can navigate through the trailers in each playlist using the "Next" and "Back" buttons.
4. Users can switch between playlists by clicking the **DC** or **Anime** buttons. A **Back to MCU/Reset** button resets the playlist to the MCU trailers.
5. The video player updates by dynamically changing the `src` attribute of the iframe based on the selected trailer URL from the current playlist.

## 📁 Project Structure

## 💻 Installation

1. Clone the repository:
   `git clone https://github.com/yourusername/mcu-trailers.git`



## 🚀 Usage
- Open the webpage in any browser.
- Click the **Next** button to move to the next trailer in the current playlist.
- Click the **Back** button to move to the previous trailer.
- Use the **DC** and **Anime** buttons to switch between different playlists.
- Click **Back to MCU/Reset** to return to the MCU playlist.

## 🚧 Future Improvements
- Add automatic video playback when switching trailers.
- Include additional playlists with more categories (e.g., Star Wars or Harry Potter trailers).
- Improve the design by adding video descriptions or ratings for each trailer.
- Implement a feature to save the user’s progress in a playlist.

## 📜 License
This project is licensed under the MIT License. Feel free to use and modify it as needed.


   ```bash
   git clone https://github.com/MO-fr/mcu-dc-anime-trailers.git



```plaintext
/
│-- ms.html       # The main HTML file for the webpage
│-- ms.css        # Custom styles for the webpage
│-- ms.js         # JavaScript file for cycling through and switching trailers
