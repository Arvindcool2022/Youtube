import { useEffect } from 'react';

const Dummy = () => {
  //* Search
  useEffect(() => {
    (async () => {
      const searchTerm = 'coding';
      const url = `https://youtube-v31.p.rapidapi.com/search?q=${searchTerm}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '949584150dmshe0d7b2eb3552576p1335b6jsn5d5f9a3fe41a',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        if (data.items) {
          // Map through the items and access video information
          data.items.forEach(item => {
            const title = item.snippet.title;
            const description = item.snippet.description;

            console.log('Video Title:', title);
            console.log('Video Description:', description);
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  //* suggested videos
  useEffect(() => {
    (async () => {
      const url =
        'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '949584150dmshe0d7b2eb3552576p1335b6jsn5d5f9a3fe41a',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json(); // Parse the response as JSON

        if (data.items) {
          // Map through the items and access video information
          data.items.forEach(item => {
            const title = item.snippet.title;
            const description = item.snippet.description;

            console.log('Video Title:', title);
            console.log('Video Description:', description);
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  //* comments
  useEffect(() => {
    (async () => {
      const id = 'FHTbsZEJspU';
      const url = `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${id}&maxResults=25`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '949584150dmshe0d7b2eb3552576p1335b6jsn5d5f9a3fe41a',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        if (data.items) {
          // Map through the items and access video information
          data.items.forEach(item => {
            const author =
              item.snippet.topLevelComment.snippet.authorDisplayName;
            const comment = item.snippet.topLevelComment.snippet.textOriginal;
            const authorIMG =
              item.snippet.topLevelComment.snippet.authorProfileImageUrl;
            const likecount = item.snippet.topLevelComment.snippet.likeCount;
            const publishedAt =
              item.snippet.topLevelComment.snippet.publishedAt;

            // console.log('Comment Author: ', author);
            // console.log('comment: ', comment);
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  //* Video Details
  useEffect(() => {
    (async () => {
      const id = 'FHTbsZEJspU';
      const url =
        'https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=' +
        id;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '949584150dmshe0d7b2eb3552576p1335b6jsn5d5f9a3fe41a',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.items[0].statistics, result.items[0].snippet);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
};
