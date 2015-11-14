(function() {
  // make this return latest
  var episodes = [
    {
      duration: '49 minutes 08 seconds',
      name: 'Component Show',
      number: '06',
      panel: [
        {name: 'Filipe Araujo', image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'filipearaujo', twitterUrl: 'https://twitter.com/filipearaujo'},
        {name: 'Jonathan Belcher', image: 'https://pbs.twimg.com/profile_images/631519863681343488/DBLcKZ_F_bigger.jpg', twitter: 'belcherj', twitterUrl: 'https://twitter.com/belcherj'},
        {name: 'William Jeffries', image: 'https://pbs.twimg.com/profile_images/464444006017937408/aU8lcuBL_bigger.jpeg', twitter: 'williamcodes', twitterUrl: 'https://twitter.com/williamcodes'},
        {name: 'Jenn Voss', image: 'https://pbs.twimg.com/profile_images/441022356983525376/Hs24Cvr7_bigger.jpeg', twitter: 'VossJenn', twitterUrl: 'https://twitter.com/VossJenn'},
        {name: 'Charles Grugan', image: 'https://pbs.twimg.com/profile_images/652619521061203970/iD7jsbEs_bigger.jpg', twitter: 'che-effe', twitterUrl: 'https://twitter.com/che_effe'}
      ],
      published: '11/12/2015',
      sponsors: [
        {name: 'SUNGARD', url: 'https://www.sungard.com/'}
      ],
      synopsis: 'Components, components, components! We join Charles Grugan and discuss our favorite components and their uses.',
      topics: [
        {time: '0:38', topic: 'Charles Grugan Introduction'},
        {time: '1:35', topic: 'JB\'s love for service workers and platinum-sw', links: [
          {link: 'platinum-sw', url: 'https://elements.polymer-project.org/elements/platinum-sw'}
        ]},
        {time: '6:20', topic: 'platinum-https-redirect', links: [
          {link: 'platinum-https-redirect', url: 'https://elements.polymer-project.org/elements/platinum-https-redirect'}
        ]},
        {time: '7:58', topic: 'platinum-bluetooth', links: [
          {link: 'platinum-bluetooth', url: 'https://elements.polymer-project.org/elements/platinum-bluetooth'}
        ]},
        {time: '9:05', topic: 'Bluetooth in the browser and the internet of things'},
        {time: '12:10', topic: 'iron-test-helpers', links: [
          {link: 'iron-test-helpers', url: 'https://elements.polymer-project.org/elements/iron-test-helpers'}
        ]},
        {time: '12:55', topic: 'Drag and drop unit testing'},
        {time: '14:10', topic: 'iron-selector', links: [
          {link: 'iron-selector', url: 'https://elements.polymer-project.org/elements/iron-selector'}
        ]},
        {time: '17:06', topic: 'iron-list', links: [
          {link: 'iron-list', url: 'https://elements.polymer-project.org/elements/iron-list'}
        ]},
        {time: '19:00', topic: 'iron-a11y-keys', links: [
          {link: 'iron-a11y-keys', url: 'https://elements.polymer-project.org/elements/iron-a11y-keys'}
        ]},
        {time: '19:58', topic: 'iron-image', links: [
          {link: 'iron-image', url: 'https://elements.polymer-project.org/elements/iron-image'}
        ]},
        {time: '23:08', topic: 'Accessibility with iron-image'},
        {time: '24:43', topic: 'Client hints', links: [
          {link: 'Automating resource selection with Client Hints', url: 'https://developers.google.com/web/updates/2015/09/automating-resource-selection-with-client-hints'}
        ]},
        {time: '26:29', topic: 'iron-flex-layout', links: [
          {link: 'iron-flex-layout', url: 'https://elements.polymer-project.org/elements/iron-flex-layout'}
        ]},
        {time: '29:56', topic: 'google-signin', links: [
          {link: 'google-signin', url: 'https://elements.polymer-project.org/elements/google-signin'}
        ]},
        {time: '30:50', topic: 'google-signin-aware', links: [
          {link: 'google-signin-aware', url: 'https://elements.polymer-project.org/elements/google-signin?active=google-signin-aware'}
        ]},
        {time: '31:08', topic: 'Web components for twitter and facebook'},
        {time: '33:14', topic: 'iron-ajax', links: [
          {link: 'iron-ajax', url: 'https://elements.polymer-project.org/elements/iron-ajax'}
        ]},
        {time: '36:17', topic: 'Gold form elements and validation', links: [
          {link: 'Gold elements', url: 'https://elements.polymer-project.org/browse?package=gold-elements'}
        ]},
        {time: '39:05', topic: 'google-hangout-button', links: [
          {link: 'google-hangout-button', url: 'https://elements.polymer-project.org/elements/google-hangout-button'}
        ]},
        {time: '40:15', topic: 'google-youtube', links: [
          {link: 'google-youtube', url: 'https://elements.polymer-project.org/elements/google-youtube'}
        ]},
        {time: '41:02', topic: 'google-youtube gotchas'},
        {time: '41:40', topic: 'William\'s Pick', links: [
          {link: 'The debug method in chrome dev tools', url: 'https://developers.google.com/web/tools/chrome-devtools/debug/'}
        ]},
        {time: '43:34', topic: 'JB\'s Pick', links: [
          {link: 'CSS motion paths', url: 'https://googlechrome.github.io/samples/css-motion-path/index.html'},
        ]},
        {time: '45:38', topic: 'Charles\'s Pick', links: [
          {link: 'Github Education', url: 'https://education.github.com/'}
        ]},
        {time: '46:52', topic: 'Jenn\'s Pick', links: [
          {link: 'Light Blue Bean', url: 'http://legacy.punchthrough.com/bean/'}
        ]},
        {time: '48:02', topic: 'JB has another pick', links: [
          {link: 'Tech Prep by Facebook', url: 'https://techprep.fb.com/'}
        ]},
        {time: '48:30', topic: 'Fil\'s Pick', links: [
          {link: 'Polycasts with Rob Dodson', url: 'https://www.youtube.com/playlist?list=PLOU2XLYxmsII5c3Mgw6fNYCzaWrsM3sMN'}
        ]}
      ]
    },
    {
      duration: '50 minutes 31 seconds',
      name: 'Polymer Summit',
      number: '05',
      panel: [
        {name: 'Filipe Araujo', image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'filipearaujo', twitterUrl: 'https://twitter.com/filipearaujo'},
        {name: 'Jonathan Belcher', image: 'https://pbs.twimg.com/profile_images/631519863681343488/DBLcKZ_F_bigger.jpg', twitter: 'belcherj', twitterUrl: 'https://twitter.com/belcherj'},
        {name: 'William Jeffries', image: 'https://pbs.twimg.com/profile_images/464444006017937408/aU8lcuBL_bigger.jpeg', twitter: 'williamcodes', twitterUrl: 'https://twitter.com/williamcodes'},
        {name: 'Jenn Voss', image: 'https://pbs.twimg.com/profile_images/441022356983525376/Hs24Cvr7_bigger.jpeg', twitter: 'VossJenn', twitterUrl: 'https://twitter.com/VossJenn'}
      ],
      published: '10/05/2015',
      sponsors: [
        {name: 'SUNGARD', url: 'https://www.sungard.com/'}
      ],
      synopsis: 'Now that the Polymer Summit is over but not forgotten, we review our favorite moments from the conference.',
      topics: [
        {time: '0:38', topic: 'Polymer Summit Keynote', links: [
          {link: 'Opening Keynote (The Polymer Summit 2015)', url: 'https://youtu.be/jVn8tlnwAEs'}
        ]},
        {time: '0:52', topic: 'Poly Lint', links: [
          {link: 'Poly Lint', url: 'https://github.com/PolymerLabs/polylint'}
        ]},
        {time: '5:44', topic: 'Poly Git', links: [
          {link: 'Polymer Magic Server', url: 'https://polygit.org/'}
        ]},
        {time: '10:35', topic: 'Poly Dev', links: [
          {link: 'Polymer Dev', url: 'https://github.com/Polymer/polymer-dev'}
        ]},
        {time: '14:55', topic: 'Performance Talk', links: [
          {link: 'Doing a Perf Audit of your Polymer App (The Polymer Summit 2015)', url: 'https://youtu.be/SkN5Q7nf7Vg'}
        ]},
        {time: '18:16', topic: 'Perf Bookmarklet', links: [
          {link: 'Polymer Perf Bookmarklet', url: 'https://gist.github.com/ebidel/57c9e9379ec6b0bda16d'}
        ]},
        {time: '18:49', topic: 'Reflect to Attribute'},
        {time: '20:19', topic: 'Private Methods'},
        {time: '21:20', topic: 'Data and how it moves', links: [
          {link: 'End to End with Polymer (The Polymer Summit 2015)', url: 'https://youtu.be/1f_Tj_JnStA'},
          {link: 'Thinking in Polymer (The Polymer Summit 2015)', url: 'https://youtu.be/ZDjiUmx51y8'}
        ]},
        {time: '31:55', topic: 'ES6', links: [
          {link: 'Using ES6 with Polymer (The Polymer Summit 2015)', url: 'https://youtu.be/bX3_tN23M_Y'}
        ]},
        {time: '34:19', topic: 'Testing Polymer', links: [
          {link: 'Testing Polymer Web Components (The Polymer Summit 2015)', url: 'https://youtu.be/kX2INPJY4Y4'}
        ]},
        {time: '35:50', topic: 'Platinum Elements', links: [
          {link: 'Platinum Elements (The Polymer Summit 2015)', url: 'https://youtu.be/EXn-Zr-qmqo'}
        ]},
        {time: '40:25', topic: 'Animation Talks', links: [
          {link: 'Polymer\'s Animation System (The Polymer Summit 2015)', url: 'https://youtu.be/-tX0e29GQa4'}
        ]},
        {time: '44:20', topic: 'HTTP/2'},

        {time: '46:49', topic: 'Fil\'s Pick', links: [
          {link: 'The Golem and the Jinni', url: 'http://www.amazon.com/The-Golem-Jinni-Novel-P-S/dp/0062110845'}
        ]},
        {time: '47:10', topic: 'Jenn\'s Picks', links: [
          {link: 'HTTP/2 Explained', url: 'http://daniel.haxx.se/http2/'},
          {link: 'Until Dawn', url: 'https://www.playstation.com/en-us/games/until-dawn-ps4/'}
        ]},
        {time: '47:58', topic: 'William\'s Pick', links: [
          {link: 'Motherboard', url: 'http://motherboard.vice.com/en_us'}
        ]},
        {time: '48:25', topic: 'JB\'s Picks', links: [
          {link: 'Crystal Knows', url: 'https://www.crystalknows.com/'},
          {link: 'a16z Podcast: Is It Possible to Achieve Equitable Equity for Startup Employees?', url: 'http://a16z.com/2015/08/12/equity-models-and-experiments/'}
        ]}
      ]
    },
    {
      duration: '56 minutes 1 second',
      name: 'Polymer 1.0 Review',
      number: '04',
      panel: [
        {name: 'Filipe Araujo', image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'filipearaujo', twitterUrl: 'https://twitter.com/filipearaujo'},
        {name: 'Jonathan Belcher', image: 'https://pbs.twimg.com/profile_images/631519863681343488/DBLcKZ_F_bigger.jpg', twitter: 'belcherj', twitterUrl: 'https://twitter.com/belcherj'},
        {name: 'William Jeffries', image: 'https://pbs.twimg.com/profile_images/464444006017937408/aU8lcuBL_bigger.jpeg', twitter: 'williamcodes', twitterUrl: 'https://twitter.com/williamcodes'},
        {name: 'Dane O\'Connor', image: 'https://pbs.twimg.com/profile_images/642069750475026434/t7soOtnU.jpg', twitter: 'thedeeno', twitterUrl: 'https://twitter.com/thedeeno'}
      ],
      published: '07/28/2015',
      sponsors: [
        {name: 'SUNGARD', url: 'https://www.sungard.com/'}
      ],
      synopsis: 'After one month of some intense rewrites and migration, we sit down and discuss the road to Polymer 1.0',
      topics: [
        {time: '1:20', topic: 'Using Polymer 1.0 in an existing codebase'},
        {time: '2:30', topic: 'Data Binding'},
        {time: '9:05', topic: 'White space and bindings'},
        {time: '9:35', topic: 'Templating and loss of '},
        {time: '10:15', topic: 'String Interpolation'},
        {time: '11:50', topic: 'Functions for equality'},
        {time: '13:30', topic: 'Binding Systems'},
        {time: '14:20', topic: 'Breakdown of Polymer, Micro, Mini', links: [
          {link: 'Experimental features', url: 'https://www.polymer-project.org/1.0/docs/devguide/experimental.html'}
        ]},
        {time: '17:05', topic: 'Breaking the Library Apart'},
        {time: '17:15', topic: 'Alternative Data Binding Systems'},
        {time: '17:50', topic: 'Fil misses features of 0.5.*'},
        {time: '18:50', topic: 'Data bindings don\'t work when creating elements in JS'},
        {time: '21:15', topic: 'Polymer Slack Chat', links: [
          {link: 'Slack Channel', url: 'http://polymer-slack.herokuapp.com/'}
        ]},
        {time: '21:33', topic: 'Creating Elements via Factory Implementation'},
        {time: '24:00', topic: 'Third Party Data Binding Hooks'},
        {time: '29:55', topic: 'CSS Universe'},
        {time: '30:35', topic: 'PostCSS', links: [
          {link: 'PostCSS', url: 'https://github.com/postcss/postcss'}
        ]},
        {time: '33:30', topic: 'CSS revisited'},
        {time: '34:20', topic: 'Shady DOM'},
        {time: '43:53', topic: 'Clean CSS'},
        {time: '45:16', topic: 'Behaviors', links:[
          {link: 'Polycasts - Behaviors', url: 'https://youtu.be/YrlmieL3Z0k'}
        ]},
        {time: '49:50', topic: 'Picks'},
        {time: '30:35', topic: 'Dane\'s picks', links: [
          {link: 'PostCSS', url: 'https://github.com/postcss/postcss'}
        ]},
        {time: '51:00', topic: 'Fil\'s picks', links: [
          {link: 'Jafar Husain - Async Programming', url: 'https://youtu.be/lil4YCCXRYc'},
          {link: 'Rate Us!', url: 'https://itunes.apple.com/us/podcast/polymer-podcast/id1011215404?mt=2'}
        ]},
        {time: '52:00', topic: 'William\'s picks', links: [
          {link: 'WhatFont', url: 'https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=en'},
          {link: 'ZenHub', url: 'https://www.zenhub.io/'}
        ]},
        {time: '53:40', topic: 'JB\'s picks', links: [
          {link: 'The Martian', url: 'http://www.amazon.com/The-Martian-Novel-Andy-Weir-ebook/dp/B00EMXBDMA'},
          {link: 'Jack\'s Adventures', url: 'http://jack.ventures/'},
          {link: 'The Adventure Zone', url: 'http://www.maximumfun.org/shows/adventure-zone'},
        ]},
        {time: '55:55', topic: 'Support & Sponsors', links: [
          {link: 'Sungard', url: 'http://sungard.com/'}
        ]}
      ]
    },
    {
      duration: '37 minutes 13 seconds',
      name: 'Testing Polymer',
      number: '03',
      panel: [
        {name: 'Filipe Araujo', image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'filipearaujo', twitterUrl: 'https://twitter.com/filipearaujo'},
        {name: 'Jonathan Belcher', image: 'https://pbs.twimg.com/profile_images/631519863681343488/DBLcKZ_F_bigger.jpg', twitter: 'belcherj', twitterUrl: 'https://twitter.com/belcherj'},
        {name: 'William Jeffries', image: 'https://pbs.twimg.com/profile_images/464444006017937408/aU8lcuBL_bigger.jpeg', twitter: 'williamcodes', twitterUrl: 'https://twitter.com/williamcodes'},
        {name: 'Dane O\'Connor', image: 'https://pbs.twimg.com/profile_images/642069750475026434/t7soOtnU.jpg', twitter: 'thedeeno', twitterUrl: 'https://twitter.com/thedeeno'},
        {name: 'Ian MacLeod', isGuest: true, image: 'https://pbs.twimg.com/profile_images/2751204129/58c6513c5f18df47247b81b2f94ae912_bigger.png', twitter: 'nevir', twitterUrl: 'https://twitter.com/nevir'}
      ],
      published: '06/22/2015',
      sponsors: [
        {name: 'SUNGARD', url: 'https://www.sungard.com/'}
      ],
      synopsis: 'We talk to Ian MacLeod, core architect behind web-component-tester about testing with Polymer. We also delve into WCT\'s rich history and tackle some of the harder aspects of testing.',
      topics: [
        {time: '1:05', topic: 'Ian Introduction'},
        {time: '2:13', topic: 'Code Management'},
        {time: '3:15', topic: 'Team breakdown'},
        {time: '4:00', topic: 'Ian\'s History'},
        {time: '5:00', topic: 'Web Component Tester', links: [
          {link: 'github', url: 'https://github.com/Polymer/web-component-tester'}
        ]},
        {time: '8:10', topic: 'Saucelabs Integration', links: [
          {link: 'saucelabs', url: 'https://saucelabs.com/'}
        ]},
        {time: '9:01', topic: 'WebDriver and Shadow DOM'},
        {time: '9:45', topic: 'Integration Testing'},
        {time: '11:05', topic: 'Testing Driven Development'},
        {time: '11:57', topic: 'Roadmap for WCT'},
        {time: '13:35', topic: 'WCT Overview', links: [
          {link: 'express', url: 'http://expressjs.com/'},
          {link: 'mochajs', url: 'http://mochajs.org/'},
          {link: 'chaijs', url: 'http://chaijs.com/'},
          {link: 'sinonjs', url: 'http://sinonjs.org/'}
        ]},
        {time: '15:26', topic: 'Code Coverage'},
        {time: '16:50', topic: 'Build Tooling Integration', links: [
          {link: 'firebase', url: 'https://www.firebase.com/'}
        ]},
        {time: '18:04', topic: 'Testing for 1.0 Migration'},
        {time: '20:45', topic: 'Declarative vs Imperative Tests'},
        {time: '22:30', topic: 'Where to start with WCT'},
        {time: '25:30', topic: 'Hydrolisis', links: [
          {link: 'hydrolysis', url: 'https://github.com/Polymer/hydrolysis'}
        ]},
        {time: '26:18', topic: 'Ecosystem Tools'},
        {time: '28:13', topic: 'Code Review'},
        {time: '30:52', topic: 'Dane\'s Picks', links: [
          {link: 'vim-fugitive', url: 'https://github.com/tpope/vim-fugitive'},
          {link: 'vimcasts', url: 'http://vimcasts.org/episodes/fugitive-vim---a-complement-to-command-line-git/'}
        ]},
        {time: '31:38', topic: 'William\'s Picks', links: [
          {link: 'twitch.tv', url: 'http://www.twitch.tv/'},
          {link: 'All the Little Things', url: 'https://www.youtube.com/watch?v=8bZh5LMaSmE'},
          {link: 'Nothing is Something', url: 'https://www.youtube.com/watch?v=OMPfEXIlTVE'}
        ]},
        {time: '32:51', topic: 'Fil\'s Picks', links: [
          {link: 'polyserve', url: 'https://github.com/polymerlabs/polyserve'},
          {link: 'Daredevil', url: 'http://www.netflix.com/title/80018294'},
          {link: 'Polymer Slack', url: 'https://polymer-slack.herokuapp.com/'}
        ]},
        {time: '33:37', topic: 'JB\'s Picks', links: [
          {link: 'wave toolbar', url: 'https://wave.webaim.org/toolbar/'}
        ]},
        {time: '34:25', topic: 'Ian\'s Picks', links: [
          {link: 'service workers', url: 'http://www.w3.org/TR/service-workers/'},
          {link: 'Spartan', url: 'http://windows.microsoft.com/en-us/windows-10/what-is-project-spartan'}
        ]},
        {time: '36:38', topic: 'Purple Tentacle', links: [
          {link: 'Day of the Tentacle', url: 'https://en.wikipedia.org/wiki/Day_of_the_Tentacle'}
        ]}
      ]
    },
    {
      duration: '48 minutes 50 seconds',
      number: '02',
      name: 'Polymer I/O',
      panel: [
        {name: 'Filipe Araujo', image: 'https://pbs.twimg.com/profile_images/478931548872249345/TEedVwOK_bigger.jpeg', twitter: 'filipearaujo', twitterUrl: 'https://twitter.com/filipearaujo'},
        {name: 'Jonathan Belcher', image: 'https://pbs.twimg.com/profile_images/631519863681343488/DBLcKZ_F_bigger.jpg', twitter: 'belcherj', twitterUrl: 'https://twitter.com/belcherj'},
        {name: 'William Jeffries', image: 'https://pbs.twimg.com/profile_images/464444006017937408/aU8lcuBL_bigger.jpeg', twitter: 'williamcodes', twitterUrl: 'https://twitter.com/williamcodes'},
        {name: 'Dane O\'Connor', image: 'https://pbs.twimg.com/profile_images/642069750475026434/t7soOtnU.jpg', twitter: 'thedeeno', twitterUrl: 'https://twitter.com/thedeeno'},
        {name: 'Taylor Savage', isGuest: true, image: 'https://pbs.twimg.com/profile_images/547545280841670657/ZtHyM2rc_bigger.jpeg', twitter: 'taylorthesavage', twitterUrl: 'https://twitter.com/taylorthesavage'}
      ],
      published: '05/29/2015',
      sponsors: [
        {name: 'SUNGARD', url: 'https://www.sungard.com/'}
      ],
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
        {name: 'Jonathan Belcher', image: 'https://pbs.twimg.com/profile_images/631519863681343488/DBLcKZ_F_bigger.jpg', twitter: 'belcherj'},
        {name: 'William Jeffries', image: 'https://pbs.twimg.com/profile_images/464444006017937408/aU8lcuBL_bigger.jpeg', twitter: 'williamcodes'},
        {name: 'Dane O\'Connor', image: 'https://pbs.twimg.com/profile_images/642069750475026434/t7soOtnU.jpg', twitter: 'thedeeno'},
        {name: 'Rob Dodson', isGuest: true, image: 'https://pbs.twimg.com/profile_images/378800000232696683/736a167223708fbbb2e910da863541cc_bigger.jpeg', twitter: 'rob_dodson'}
      ],
      published: '05/28/2015',
      sponsors: [
        {name: 'SUNGARD', url: 'https://www.sungard.com/'}
      ],
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
        {time: '1:02:08', topic: 'JB\'s Picks', links: [
          {link: 'modern.ie', url: 'http://dev.modern.ie/'},
          {link: 'vinylmeplease', url: 'http://vinylmeplease.com/'},
        ]},
        {time: '1:02:33', topic: 'Fil\'s Picks', links: [
          {link: 'lazyweb', url: 'https://www.youtube.com/playlist?list=PLOU2XLYxmsIIdQz8Hih4AyP_ZCn_mzsN4'},
          {link: 'polycasts', url: 'https://www.youtube.com/playlist?list=PLOU2XLYxmsII5c3Mgw6fNYCzaWrsM3sMN'},
          {link: 'hololens', url: 'https://www.microsoft.com/microsoft-hololens/en-us'}
        ]},
        {time: '1:03:07', topic: 'William\'s Picks', links: [
          {link: 'codeschool', url: 'https://www.codeschool.com/'},
          {link: 'audible', url: 'http://www.audible.com/'}
        ]},
        {time: '1:04:27', topic: 'Rob\'s Picks', links: [
          {link: 'manhattan projects', url: 'https://imagecomics.com/comics/series/the-manhattan-projects'},
          {link: 'adventure zone', url: 'http://www.maximumfun.org/shows/adventure-zone'}
        ]},
        {time: '1:06:16', topic: 'Support & Sponsors', links: [
          {link: 'Sungard', url: 'http://sungard.com/'}
        ]}
      ]
    }
  ];

  Object.defineProperty(episodes, 'published', {
    value: episodes.filter(function(episode) {
      return episode.published;
    })
  });

  Object.defineProperty(episodes, 'past', {
    value: episodes.published.slice(1)
  });

  Object.defineProperty(episodes, 'latest', {
    value: episodes.published[0]
  });

  Object.defineProperty(episodes, 'upcoming', {
    value: episodes.filter(function(episode) {
      return !episode.published;
    })[0]
  });

  window.Polymer({
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
