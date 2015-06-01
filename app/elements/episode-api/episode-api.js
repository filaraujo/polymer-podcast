(function() {
  // make this return latest
  var episodes = [
    {
      duration: '48 minutes 50 seconds',
      number: '02',
      name: 'Polymer I/O',
      panel: [
        {name: 'Filipe Araujo', image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'filipearaujo', twitterUrl: 'https://twitter.com/filipearaujo'},
        {name: 'Jonathan Belcher', image: 'https://pbs.twimg.com/profile_images/529291762649403392/Pt7LuHxE_bigger.jpeg', twitter: 'belcherj', twitterUrl: 'https://twitter.com/belcherj'},
        {name: 'William Jeffries', image: 'https://pbs.twimg.com/profile_images/464444006017937408/aU8lcuBL_bigger.jpeg', twitter: 'williamcodes', twitterUrl: 'https://twitter.com/williamcodes'},
        {name: 'Dane O\'Conner', image: 'https://pbs.twimg.com/profile_images/378800000832830634/e0021647f2f55fcfabd70f506b1852e6_bigger.png', twitter: 'thedeeno', twitterUrl: 'https://twitter.com/thedeeno'},
        {name: 'Taylor Savage', isGuest: true, image: 'https://pbs.twimg.com/profile_images/547545280841670657/ZtHyM2rc_bigger.jpeg', twitter: 'taylorthesavage', twitterUrl: 'https://twitter.com/taylorthesavage'}
      ],
      published: '05/29/2015',
      synopsis: 'In this episode, we talk with Taylor Savage, product manager for the Polymer Project, about the announcements at Google I/O and Polymer 1.0. We also learn about the Polymer starter kit, the new web component catalogs, and how the polymer team gets things done!',
      topics: [
        {time: '0:45', topic: 'Taylor Savage Introduction'},
        {time: '1:00', topic: 'Joining Polymer Team'},
        {time: '2:35', topic: 'Polymer Team Organization'},
        {time: '4:12', topic: 'Communication Between the teams'},
        {time: '7:40', topic: 'Community Feedback', links: [
          {link: 'github', url: 'https://github.com/Polymer'},
          {link: 'slack', url: 'https://polymer.slack.com'},
          {link: 'forums', url: 'https://groups.google.com/forum/#!forum/polymer-dev'},
          {link: 'google plus', url: 'https://plus.google.com/+PolymerProject'}
        ]},
        {time: '9:24', topic: 'How Polymer thinks about Polymer'},
        {time: '11:41', topic: 'Material Design'},
        {time: '14:15', topic: 'The Polymer Experiment'},
        {time: '17:25', topic: 'Google I/O', links: [
          {link: 'Polymer and modern web APIs: In production at Google scale', url: 'https://events.google.com/io2015/schedule?sid=21718f8b-b6d4-e411-b87f-00155d5066d7#day2/21718f8b-b6d4-e411-b87f-00155d5066d7'}
        ]},
        {time: '17:25', topic: 'Google I/O'},
        {time: '19:21', topic: 'Polymer Starter Kit'},
        {time: '21:17', topic: 'Polymer Expectations'},
        {time: '27:08', topic: 'The Google I/O Scoop'},
        {time: '29:03', topic: 'The Polymer Element Catalog '},
        {time: '32:21', topic: 'The Polymer Product Lines'},
        {time: '35:50', topic: 'Migration to iron-*'},
        {time: '36:54', topic: '1.0 Api Stability'},
        {time: '39:00', topic: 'Tooling'},
        {time: '40:16', topic: 'Polymer Deadlines'},
        {time: '42:00', topic: 'Versioning'},
        {time: '44:35', topic: 'JB\'s Picks', links: [
          {link: 'Google Web Components', url: 'https://googlewebcomponents.github.io/'},
          {link: 'Google Maps', url: 'https://www.google.com/maps'}
        ]},
        {time: '45:23', topic: 'Fil\'s Picks', links: [
          {link: 'json-server', url: 'https://github.com/typicode/json-server'}
        ]},
        {time: '45:41', topic: 'William\'s Picks', links: [
          {link: 'Javascript Patterns', url: 'http://shop.oreilly.com/product/9780596806767.do'},
          {link: 'Thinking Fast and Slow', url: 'http://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374275637'}
        ]},
        {time: '46:33', topic: 'Dane\'s Picks', links: [
          {link: 'Product Hunt', url: 'http://www.producthunt.com/'}
        ]},
        {time: '47:15', topic: 'Taylor\'s Picks', links: [
          {link: 'Slack', url: 'http://slack.com/'}
        ]},
        {time: '48:43', topic: 'Support & Sponsors', links: [
          {link: 'Sungard', url: 'http://sungard.com/'}
        ]}
      ]
    },
    {
      duration: '1 hour 6 minutes 22 seconds',
      number: '01',
      name: 'History of Polymer',
      panel: [
        {name: 'Filipe Araujo', image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'filipearaujo'},
        {name: 'Jonathan Belcher', image: 'https://pbs.twimg.com/profile_images/529291762649403392/Pt7LuHxE_bigger.jpeg', twitter: 'belcherj'},
        {name: 'William Jeffries', image: 'https://pbs.twimg.com/profile_images/464444006017937408/aU8lcuBL_bigger.jpeg', twitter: 'williamcodes'},
        {name: 'Dane O\'Conner', image: 'https://pbs.twimg.com/profile_images/378800000832830634/e0021647f2f55fcfabd70f506b1852e6_bigger.png', twitter: 'thedeeno'},
        {name: 'Rob Dodson', isGuest: true, image: 'https://pbs.twimg.com/profile_images/378800000232696683/736a167223708fbbb2e910da863541cc_bigger.jpeg', twitter: 'rob_dodson'}
      ],
      published: '05/28/2015',
      synopsis: 'In this episode, we talk with Rob Dodson, developer evangelist for the Polymer Project, about the history of Polymer. We also get to to hear Rob\'s thoughts on the future of the web and the role Polymer will play in it.',
      topics: [
        {time: '0:54', topic: 'Rob Dodson introduction'},
        {time: '1:43', topic: 'Role at Polymer Project'},
        {time: '3:12', topic: 'Driving the Standard Process', links: [
          {link: 'forums', url: 'https://groups.google.com/forum/#!forum/polymer-dev'},
          {link: 'github', url: 'https://github.com/Polymer'}
        ]},
        {time: '5:46', topic: 'Conflict within the spec'},
        {time: '7:33', topic: 'Browser Status Quo'},
        {time: '10:12', topic: 'Extensible Web'},
        {time: '12:17', topic: 'Polymer the Experiment'},
        {time: '14:52', topic: 'Tool Kitchen'},
        {time: '17:17', topic: 'Why Web Components?'},
        {time: '19:34', topic: 'Eating the Web'},
        {time: '25:55', topic: 'Web Components Bridging the Native Gap'},
        {time: '27:07', topic: 'Polymer Challenges'},
        {time: '29:16', topic: 'Component Quality Control'},
        {time: '32:39', topic: 'Rob’s Day to Day'},
        {time: '34:22', topic: 'Polymer Slack Channel'},
        {time: '37:46', topic: 'Polymer Expectations'},
        {time: '41:58', topic: 'Versioning'},
        {time: '42:49', topic: 'Core Elements'},
        {time: '44:40', topic: 'Paper Elements'},
        {time: '47:29', topic: 'Polymer Bootstrap?'},
        {time: '48:39', topic: 'Theming'},
        {time: '52:15', topic: 'Experiments'},
        {time: '53:32', topic: 'Developer Challenges'},
        {time: '55:19', topic: 'Migrating to 1.0'},
        {time: '57:45', topic: 'Shady DOM'},
        {time: '58:17', topic: '1.0 Release Date'},
        {time: '1:02:08', topic: 'JB\'s Picks', links:[
          {link: 'modern.ie', url: 'http://dev.modern.ie/'},
          {link: 'vinylmeplease', url: 'http://vinylmeplease.com/'},
        ]},
        {time: '1:02:33', topic: 'Fil\'s Picks', links:[
          {link: 'lazyweb', url: 'https://www.youtube.com/playlist?list=PLOU2XLYxmsIIdQz8Hih4AyP_ZCn_mzsN4'},
          {link: 'polycasts', url: 'https://www.youtube.com/playlist?list=PLOU2XLYxmsII5c3Mgw6fNYCzaWrsM3sMN'},
          {link: 'hololens', url: 'https://www.microsoft.com/microsoft-hololens/en-us'}
        ]},
        {time: '1:03:07', topic: 'William\'s Picks', links:[
          {link: 'codeschool', url: 'https://www.codeschool.com/'},
          {link: 'audible', url: 'http://www.audible.com/'}
        ]},
        {time: '1:04:27', topic: 'Rob\'s Picks', links:[
          {link: 'manhatten projects', url: 'https://imagecomics.com/comics/series/the-manhattan-projects'},
          {link: 'adventure zone', url: 'http://www.maximumfun.org/shows/adventure-zone'}
        ]},
        {time: '1:06:16', topic: 'Support & Sponsors', links: [
          {link: 'Sungard', url: 'http://sungard.com/'}
        ]}

      ]
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
