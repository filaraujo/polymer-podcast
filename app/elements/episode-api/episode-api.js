(function() {

  var episodes = [
    {
      duration: '42 minutes',
      number: '02',
      name: 'Testing Polymer',
      panel: [
        {name: 'Filipe Araujo', image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'filipearaujo'},
        {name: 'Jonathan Belcher', image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'filipearaujo'},
        {name: 'William Jeffries', image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'filipearaujo'},
        {name: 'Dane O\'Conner', image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'filipearaujo'},
        {name: 'Rob Dodson', isGuest: true, image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'filipearaujo'}
      ],
      published: '05/21/2015',
      synopsis: 'Do irure proident adipisicing laborum ex labore est aliqua esse tempor commodo irure. In consequat officia eiusmod ea nisi adipisicing sunt incididunt sit do consequat reprehenderit. Laborum reprehenderit pariatur eiusmod eu id cupidatat cillum esse aliquip id ipsum. Non ullamco aute magna sint reprehenderit. Non ex proident tempor voluptate occaecat ullamco adipisicing minim anim.'
    },
    {
      duration: '52 minutes',
      number: '01',
      name: 'History of Polymer',
      panel: [
        {name: 'Filipe Araujo', image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'filipearaujo'},
        {name: 'Jonathan Belcher', image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'filipearaujo'},
        {name: 'William Jeffries', image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'filipearaujo'},
        {name: 'Dane O\'Conner', image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'filipearaujo'},
        {name: 'Ian MacLeod', isGuest: true, image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'filipearaujo'}
      ],
      published: '05/20/2015',
      synopsis: 'Duis in pariatur consequat incididunt est eiusmod in id ea voluptate adipisicing occaecat fugiat officia. Ipsum ut cupidatat occaecat fugiat in ipsum. Reprehenderit qui dolor dolore exercitation aute nostrud veniam in officia mollit. Laborum dolor eu est voluptate ea commodo eiusmod proident. Fugiat deserunt do commodo cupidatat ad. Ex mollit voluptate reprehenderit exercitation dolor commodo deserunt amet tempor do laborum.'
    }
  ];

  Polymer({
    is: 'episode-api',

    properties: {
      episodes: {
        notify: true,
        type: Object,
        value: episodes
      }
    }

  });
}());
