const BUTTON_LIST = [
  'all',
  'computer science',
  'programming',
  'gaming',
  'lo-fi',
  'interview'
];

const GOOGLE_API = 'AIzaSyAptczaUwAfRiT8s-rNi5BH5ZVKjyUfy2o';

const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API}`;

const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=${GOOGLE_API}`;

export { BUTTON_LIST, YOUTUBE_API, YOUTUBE_VIDEO_API };
