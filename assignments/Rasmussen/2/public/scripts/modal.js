// Open the modal and load the YouTube video
function openModal(videoUrl) {
  document.getElementById('videoModal').style.display = 'block';
  document.getElementById('videoFrame').src = videoUrl;
}

// Close the modal and stop the video
function closeModal() {
  document.getElementById('videoModal').style.display = 'none';
  document.getElementById('videoFrame').src = ''; // Stop the video
}