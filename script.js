// Variables to store references to DOM elements
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const videoList = document.querySelector('.video-list');
const watchLaterBtns = document.querySelectorAll('.watch-later-btn');

// Event listeners
searchForm.addEventListener('submit', searchVideos);
videoList.addEventListener('click', addToWatchLater);
watchLaterBtns.forEach(btn => {
  btn.addEventListener('click', removeFromWatchLater);
});

// Functions
function searchVideos(e) {
  e.preventDefault();
  // Get search query from input
  const query = searchInput.value;
  // Make API request to YouTube to get videos based on query
  // Add videos to videoList
}

function addToWatchLater(e) {
  if (e.target.classList.contains('watch-later-btn')) {
    // Get information about the video that was clicked
    // Add the video to the user's "watch later" list
  }
}

function removeFromWatchLater(e) {
  if (e.target.classList.contains('remove-from-watch-later-btn')) {
    // Get information about the video that was clicked
    // Remove the video from the user's "watch later" list
  }
}
