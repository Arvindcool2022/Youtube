import { RAPID_API_KEY } from './contants';

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
export const searchVideos = async (searchTerm = 'coding') => {
  const url = `https://youtube-v31.p.rapidapi.com/search?q=${searchTerm}&part=snippet%2Cid&regionCode=US&maxResults=50&type=video`;
  return fetchData(url);
};

export const fetchSuggestedVideos = async (videoId = 'ouSGeR9h3h4') => {
  const url = `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video&maxResults=50`;
  return fetchData(url);
};

export const fetchComments = async (videoId = 'TjnyFNxQ67Y') => {
  const url = `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${videoId}&maxResults=25`;
  return fetchData(url);
};

export const fetchVideoDetails = async (videoId = 'TjnyFNxQ67Y') => {
  const url = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`;
  return fetchData(url);
};

// export { searchVideos, fetchSuggestedVideos, commentsData, videoDetails };
