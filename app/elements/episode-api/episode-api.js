(function() {

  var episodes = [
    {
      duration: '52 minutes',
      number: '02',
      name: 'Polymer I/O',
      panel: [
        {name: 'Filipe Araujo', image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'filipearaujo'},
        {name: 'Jonathan Belcher', image: 'https://pbs.twimg.com/profile_images/529291762649403392/Pt7LuHxE_bigger.jpeg', twitter: 'belcherj'},
        {name: 'William Jeffries', image: 'https://pbs.twimg.com/profile_images/464444006017937408/aU8lcuBL_bigger.jpeg', twitter: 'williamcodes'},
        {name: 'Dane O\'Conner', image: 'https://pbs.twimg.com/profile_images/378800000832830634/e0021647f2f55fcfabd70f506b1852e6_bigger.png', twitter: 'thedeeno'},
        {name: 'Taylor Savage', isGuest: true, image: 'https://pbs.twimg.com/profile_images/547545280841670657/ZtHyM2rc_bigger.jpeg', twitter: 'taylorthesavage'}
      ],
      published: '05/20/2015',
      synopsis: "In this episode, we talk with Taylor Savage, project manager for the Polymer Project, about the announcements at Google I/O and Polymer 1.0. We also learn about the Polymer starter kit, the new web component catalogs, and how the polymer team gets things done!",
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
      duration: '42 minutes',
      number: '01',
      name: 'Testing Polymer',
      panel: [
        {name: 'Filipe Araujo', image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'filipearaujo'},
        {name: 'Jonathan Belcher', image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'belcherj'},
        {name: 'William Jeffries', image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'williamcodes'},
        {name: 'Dane O\'Conner', image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'thedeeno'},
        {name: 'Rob Dodson', isGuest: true, image: 'https://pbs.twimg.com/profile_images/378800000232696683/736a167223708fbbb2e910da863541cc_bigger.jpeg', twitter: 'rob_dodson'}
      ],
      published: '05/21/2015',
      synopsis: "In this episode, we talk with Rob Dodson, developer evangelist for the Polymer Project, about the history of Polymer. We also get to to hear Rob's thoughts on the future of the web and the role Polymer will play in it.",
      topics: []
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
