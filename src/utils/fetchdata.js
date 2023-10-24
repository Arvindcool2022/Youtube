import { RAPID_API_KEY, YOUTUBE_API } from './contants';

const fetchData = async url => {
  try {
    const response = await fetch('https://corsproxy.io/?' + url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

const fetchPopularVideos = async () => {
  const url = YOUTUBE_API;
  return fetchData(url);
};
const searchVideos = async (searchTerm = 'popular') => {
  const url = `https://youtube-v31.p.rapidapi.com/search?q=${searchTerm}&part=snippet%2Cid&regionCode=US&maxResults=50&type=video`;
  return fetchData(url);
};

const fetchSuggestedVideos = async videoId => {
  const id = videoId || 'eoWcQUjNM8o';
  const url = `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=50`;
  return fetchData(url);
};

const fetchComments = async (videoId = 'TjnyFNxQ67Y') => {
  const url = `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${videoId}&maxResults=25`;
  return fetchData(url);
};

const fetchVideoDetails = async (videoId = 'TjnyFNxQ67Y') => {
  const url = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`;
  return fetchData(url);
};

const fetchChannelDetails = async (channelId = 'TjnyFNxQ67Y') => {
  const url = `https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${channelId}`;
  return fetchData(url);
};

export {
  fetchPopularVideos,
  searchVideos,
  fetchSuggestedVideos,
  fetchComments,
  fetchVideoDetails,
  fetchChannelDetails
};
