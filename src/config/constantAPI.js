export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const SEARCH_API_URL =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=";

export const VIDEO_COMMENTS_URL =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=";

export const CHANNEL_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=";
// https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=

export const YOUTUBE_HISTORY_API =
  "https://www.googleapis.com/youtube/v3/history?key=";

export const YOUTUBE_WATCH_HISTORY_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// const YOUTUBE_SEARCH_XML = "https://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=";

export const OFFSET_LIVE_CHAT = 15;

export const IMG_URL =
  "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1312.jpg";

export const BASE_IMAGE_URL =
  "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-";
