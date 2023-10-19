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

const SUGGEST_API =
  'https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=';

const COMMENTS_EXAMPLE = [
  {
    name: 'Neelam Hunter',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there',
    replies: [
      {
        name: 'Jyoti Halmi',
        text: 'Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the Little Blind Text',
        replies: []
      },
      {
        name: 'Stav Tennison',
        text: ' The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli',
        replies: [
          {
            name: 'Eadgar Vurchu',
            text: ' It is a paradisematic country, in which roasted parts of sentences fly into your mouth',
            replies: [
              {
                name: 'Siegfried Lentain',
                text: ' A small river named Duden flows by their place and supplies it with the necessary regelialia',
                replies: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Caelinus Cheitsein',
    text: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    replies: [
      {
        name: 'Cuimín Apuubhazh',
        text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
        replies: []
      }
    ]
  },
  {
    name: 'Alexandros Oixununx',
    text: 'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen',
    replies: []
  }
];

export { BUTTON_LIST, YOUTUBE_API, SUGGEST_API, COMMENTS_EXAMPLE };
