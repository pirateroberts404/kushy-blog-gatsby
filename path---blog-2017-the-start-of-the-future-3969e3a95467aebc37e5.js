webpackJsonp([84343905927806],{390:function(e,t){e.exports={data:{blog:{html:"<p>We're big fans of fast, responsive apps. There's nothing more discouraging than slugging around a website, waiting for each page to chug into place. Things should be reactive to our actions, and feel fairly seamless. The opposite of clunky.</p>\n<p>Here at Kushy, we've done our best to develop a website full of all the features we need. The one thing we've struggled with, is the <strong>user experience</strong>. As good as our design is, we're inherently limited by our framework, which makes the site slower than we'd prefer. </p>\n<p>Now we're hoping to shed our relationship with Wordpress and migrate our tech stack to a more efficient architecture.</p>\n<h2>Introducing new.kushy.net</h2>\n<p>This will be the home of our new developments with technology like React, Node, etc 👉 <a href=\"http://new.kushy.net\">new.kushy.net</a> 👈 Test away! Let us know what you think about the look, feel, and functionality.</p>\n<h3>The New Tech Stack</h3>\n<p>The plan is to run a NodeJS/Express based API, which transmits our cannabis data to anyone. We'll have a React app on another NodeJS server that server side renders our app to ensure best SEO practices and improve UX. Businesses will have their own dashboard to connect to the API and manage their shops, inventory, etc -- this'll be created with PHP7 and jQuery for the highest level of compatibility and better safety than using heavy client-side scripts.</p>\n<blockquote>\n<p>Business Dashboard &#x3C;-- (Node API) -> React</p>\n</blockquote>\n<h2>Wordpress is slow</h2>\n<p>We're currently running Wordpress as our CMS, with a couple handfuls of plugins to transform Wordpress into a different beast. It can scale, but requires lots of tweaking and extra paid services (CDNs, cloud distribution, etc). And it <em>works</em>, but requires custom written plugins. Which is almost <em>insulting</em>, when the community touts the expansiveness of the plugin ecosystem, and most plugins are so poorly written they bog down your site (<em>or create immense security risks</em>).</p>\n<p>Rather than rewriting the plugins, and dropping cash on CDNs, we opted to spend the development time engineering a new, custom codebase.</p>\n<h2>Don't You Have An API?</h2>\n<p>We first used the Wordpress API as the primary cannabis API. Then we migrated to the Directus API, which made the process faster and easier. Now we've hit the wall with the current API, where we're requiring really custom endpoints that do specialized queries (lat/lng region mapping, complex JOINs, lots of good stuff). </p>\n<p>We could edit the Directus API to accomplish our goal, but we weren't a fan of codebase. And after minimal testing using Node and Express, it became clear it'd be faster to write it from scratch -- our way.</p>\n<h2>Time to create the future</h2>\n<p>The future contains a lot of JavaScript.</p>\n<h3>NodeJS</h3>\n<p>We use Node for our server because of how lightweight and fast it is. It's also incredibly easy to cluster Node server, as well as break up Node apps into microservices to spread across the cloud. </p>\n<blockquote>\n<p><a href=\"https://www.linux.com/news/event/nodejs/2017/3/slaying-monoliths-netflix-nodejs\">We want to slay the monolith.</a> </p>\n</blockquote>\n<p>It's time to end the era of a large application hosted on a single server. We've been slowly weaned off the monolith by cloud-based services such as CDN, but there's no reason our application can't be created in a modular nature to operate independently.</p>\n<h3>ReactJS</h3>\n<p>You might be asking your why React?</p>\n<ul>\n<li>Many sites are making the switch and seeing the performance and UX benefits.</li>\n<li>React is now MIT licensed, allowing for greater growth and adoption</li>\n<li>Even Wordpress is switching to React, from it's <a href=\"https://github.com/Automattic/wp-calypso\">admin panel</a> to theme creators using it on the frontend with the WP API.</li>\n</ul>\n<p>We can argue about <a href=\"https://medium.com/unicorn-supplies/angular-vs-react-vs-vue-a-2017-comparison-c5c52d620176\">Angular vs React vs Vue</a>, but at the end of the day, the discussion is still surrounded around the adoption of Javascript based MVC frameworks. It's clear that React (or any technology we choose) may be an opinionated decision, but the competitive options are all within close enough margins that discounts any fear of refactoring.</p>\n<p>That's why we have our eyes on React. Not because it's a magic solution to the myriad of technical issues that create slow site speeds. We're looking at React because of how powerful the tiny library is, and the potential to scale.</p>\n<p>It's why companies like Airbnb and Netflix are using it, and giants like Yelp are migrating their complex codebase to it. React does an amazing job of managing the DOM in combination with state, making websites update minor details lightning fast without ever leaving the page.</p>\n<h2>What's left?</h2>\n<p>With <a href=\"http://new.kushy.net\">New.Kushy</a>, we created a rough test of React's potential. There's still a few key features missing from making full replacing our Wordpress site. User authentication, server side rendering, there's quite a few features we're looking forward to implement.</p>\n<p>Many of the present limitations on our new tech stack are based on our antiquated hosting platform. We're currently residing on server with pre-baked software that makes our job easier and harder at the same time. Things like Apache have been great for decades, but we're looking to making the switch to platforms like NGINX. </p>\n<p>Keep your eyes peeled! And let us know what you think <a href=\"http://twitter.com/kushyapp\">on Twitter!</a></p>\n<p>Cheers!\nOscar</p>\n<hr>\n<p><strong>Keep Reading</strong></p>\n<ul>\n<li><a href=\"http://new.kushy.net\">The New Kushy</a></li>\n<li><a href=\"https://www.linux.com/news/event/nodejs/2017/3/slaying-monoliths-netflix-nodejs\">Slaying the Monolith with Netflix</a></li>\n<li><a href=\"https://medium.freecodecamp.org/yes-react-is-taking-over-front-end-development-the-question-is-why-40837af8ab76\">Yes, React is taking over front-end development. The question is why.</a></li>\n</ul>",frontmatter:{title:"The Start of the Future",cover_image:null,date:"08 December, 2017",tags:["announcements"],section:"blog",author:"Ryo"},fields:{slug:"/blog/2017/the-start-of-the-future/"}},relatedPosts:{edges:[{node:{html:'<p>Keeping track of legal cannabis is one hell of a job. That\'s why many states that legalize medicinal and recreational cannabis license a 3rd party seed to sale tracking solution to handle the sticky task. These solutions provide businesses a place to input their activity (plant growth, transfers, sales) so the state can monitor and ensure compliance with all regulations and restrictions. <a href="http://metrc.com"><strong>METRC</strong></a> is one of these seed to sale tracking solutions currently licensed by 13 states. <a href="http://kushy.net">Kushy</a> is certified with METRC to access their API, so that we can update seed to sale information on behalf of businesses. </p>\n<p>In order to make accessing the API easier for our developer, we put together an SDK for PHP programmers looking to quickly query METRC API endpoints. Our goal was to create a simple to use interface for the METRC API, without requiring the user manually input endpoints and whatnot. The result is a simple to use API for an API:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code class="language-php"><span class="token keyword">require_once</span> <span class="token single-quoted-string string">\'../../../vendor/autoload.php\'</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Kushy<span class="token punctuation">\\</span>Metrc<span class="token punctuation">\\</span>Routes<span class="token punctuation">\\</span>Harvests</span><span class="token punctuation">;</span>\n<span class="token variable">$harvests</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Harvests</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'ca\'</span><span class="token punctuation">,</span> <span class="token variable">$vendorApiKey</span><span class="token punctuation">,</span> <span class="token variable">$userApiKey</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$harvests</span> <span class="token operator">=</span> <span class="token variable">$metrc</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">getActive</span><span class="token punctuation">(</span><span class="token variable">$licenseNumber</span><span class="token punctuation">,</span> <span class="token variable">$startDate</span><span class="token punctuation">,</span> <span class="token variable">$endDate</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>The Construction</h2>\n<p>The SDK is a simple class that uses the Guzzle library to create HTTP requests on behalf of the user. Each endpoint \'route\' is a separate class that extends the base Guzzle class.</p>\n<h2>How to use it</h2>\n<ol>\n<li>Install the METRC package with Composer: <code class="language-text">composer require &#39;kushy/metrc-php-sdk&#39;</code></li>\n<li>Require whichever route class you need in your application - in this case we want to access the <code class="language-text">/harvests/</code> endpoint (<em>assuming you\'re using PSR-4</em>):</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code class="language-php"><span class="token keyword">require_once</span> <span class="token single-quoted-string string">\'../../../vendor/autoload.php\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">Kushy<span class="token punctuation">\\</span>Metrc<span class="token punctuation">\\</span>Routes<span class="token punctuation">\\</span>Harvests</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<ol start="3">\n<li>Create a new instance of the route class (<code class="language-text">Harvests</code>) and pass through your state\'s abbreviated name (in this case <code class="language-text">ca</code> for California) and Vendor + User API keys:</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code class="language-php"><span class="token variable">$harvests</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Harvests</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'ca\'</span><span class="token punctuation">,</span> <span class="token variable">$vendorApiKey</span><span class="token punctuation">,</span> <span class="token variable">$userApiKey</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<ol start="4">\n<li>Use one of the class methods to query the API - this example grabs the active harvests:</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code class="language-php"><span class="token variable">$harvests</span> <span class="token operator">=</span> <span class="token variable">$metrc</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">getActive</span><span class="token punctuation">(</span><span class="token variable">$licenseNumber</span><span class="token punctuation">,</span> <span class="token variable">$startDate</span><span class="token punctuation">,</span> <span class="token variable">$endDate</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>You can find the package on <a href="https://packagist.org/packages/kushy/metrc-php-sdk">Packagist here</a>, as well as a README with more details (instructions, tips and tricks, etc).</p>\n</blockquote>\n<h2>Making cannabis (development) simpler</h2>\n<p>Here at Kushy we\'re always innovating and contributing back to the cannabis community to ensure that life gets easier for everyone in the cannabis chain of command -- from consumers to businesses to developers. If we can make it easier to integrate with METRC, it increases the potential for more excellent apps that keep businesses compliant and safe from losing their license.</p>\n<p>If you\'re interested in contributing and improving the SDK, <a href="https://github.com/kushyapp/kushy-metrc-php-sdk">fork us over on Github and send a PR our way!</a></p>\n<p>Stay kushy,\nOscar</p>\n<hr>\n<p><strong>Keep Reading</strong></p>\n<ul>\n<li><a href="https://packagist.org/packages/kushy/metrc-php-sdk">kushy/metrc-php-sdk</a></li>\n<li><a href="http://metrc.com">METRC</a></li>\n<li><a href="https://api-ca.metrc.com/Documentation/">METRC API Docs for California</a></li>\n</ul>',frontmatter:{title:"Kushy METRC PHP SDK",cover_image:{publicURL:"/static/KBlog-Metrc-PHP-SDK-b31137b3a03d0046e257a21741934611.jpg",childImageSharp:{sizes:{src:"/static/KBlog-Metrc-PHP-SDK-b31137b3a03d0046e257a21741934611-4e8db.jpg",srcSet:"/static/KBlog-Metrc-PHP-SDK-b31137b3a03d0046e257a21741934611-7cc04.jpg 310w,\n/static/KBlog-Metrc-PHP-SDK-b31137b3a03d0046e257a21741934611-69042.jpg 620w,\n/static/KBlog-Metrc-PHP-SDK-b31137b3a03d0046e257a21741934611-4e8db.jpg 1240w,\n/static/KBlog-Metrc-PHP-SDK-b31137b3a03d0046e257a21741934611-50ab1.jpg 1860w,\n/static/KBlog-Metrc-PHP-SDK-b31137b3a03d0046e257a21741934611-de007.jpg 2000w"}}},date:"19 July, 2018",tags:["tools","announcements","developers"]},fields:{slug:"/blog/2018/introducing-kushy-metrc-php-sdk/"}}},{node:{html:"<p>After much deliberation over picking a cloud-based service like Medium or Tumblr, or even a Git-powered JAM-stack with <a href=\"https://jekyllrb.com/\">Jekyll</a> or <a href=\"gatsbyjs.org\">GatsbyJS</a>, we finally settled on a blog framework for Kushy: <a href=\"https://getkirby.com/\">KirbyCMS</a>. </p>\n<p>Don't get me wrong. We'll still post on <a href=\"https://medium.com/kushyapp\">Medium</a> and <a href=\"https://kushyapp.tumblr.com/\">Tumblr</a>. But we'll do the thing that brands like <em>Google Design</em> does, and cross-post our content for maximum visibility.</p>\n<h2>Kirby the Pink Guy?</h2>\n<div style='position:relative;padding-bottom:54%'><iframe src='https://gfycat.com/ifr/OblongBruisedKronosaurus' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0' allowfullscreen></iframe></div>\n<p>Not <em>that</em> Kirby. Kirby allows us to serve static content like a <a href=\"https://gohugo.io/\">Hugo</a>, but gives our writers the power of an admin panel to easily create content without activating <em>builds</em> or <em>deploys</em>. It's super fast, and very flexible. We can quickly create an API to serve content to our other apps. And when it comes time to migrate content, all of it is stored locally in a combination of YAML structuring (or <em>blueprints</em>) and Markdown. </p>\n<h2>The Design</h2>\n<p>I whipped this up in Sketch over a night. Something simple, yet exemplifying the fundamental elements of our brand guide. It was easily adapted to Kirby thanks to their MVC style app structure. I created a couple core templates and a number of <em>'snippets'</em> or components to include around the site (header, footer, navigation, etc).</p>\n<h2>The Structure</h2>\n<p>The goal of the blog was to have a home for Kushy's news and announcements, as well as a place for our development team to blog about their advancements. </p>\n<p>Rather than creating two separate blogs, or even sorting things out with categories (which gets confusing for both teams), we took advantage of Kirby's custom post types. Similar to Wordpress and <a href=\"https://www.advancedcustomfields.com\">Advanced Custom Fields</a>, you can create new types of posts with different meta data. So we'd have a blog post type, and a dev post type -- each with differing fields, like their own set of categories.</p>\n<p>This allowed us to separate the content physically in different folders, as opposed to mixing posts in one giant blog folder. And it allowed users in the backend to easily find and author posts in either side of the site. Dev's have their blog, everyone else has theirs. Peace is hashed out in the blogroll.</p>\n<h3>The Team</h3>\n<p>Any of the cool cats working on Kushy are free to have an account on the blog. After an admin creates the initial user account, the user can login and fill out their author bio with their social media links. These are easily integrated with Kirby's blueprint system, allowing us to pull this data up on any post:</p>\n<p>(gist: <a href=\"https://gist.github.com/kushyapp/1b0ff056a8f1e6f630740c83424f8219\">https://gist.github.com/kushyapp/1b0ff056a8f1e6f630740c83424f8219</a>)</p>\n<h2>The Future</h2>\n<p>You never know. We could toss out this structure tomorrow in favor of a JAM stack. Ideally however, this is the best option for Kushy in terms of it's current growth trajectory. The blog is setup to horizontally scale on it's own separate distribution for a while.</p>\n<p>But <strong>things happen</strong> and if we explode (<em>in terms of traffic</em>), we'll need to integrate things like a CDN to store our images or a database to query for searches (ironic how static swings back to a database eventually at scale). And Kirby's admin panel is great, but it lacks some minor touches that would refine the UX (like autosaving posts occasionally so I don't get logged out and lose all my writing).</p>\n<p>We're also looking to integrate the Kushy API. Widgets for displaying strain profiles, or shop listings, or even an embeddable menu. We'd like to make the connection between the blog and Kushy as seamless as possible thanks to the power of the API.</p>\n<p>Lots of cool stuff to look forward to!</p>\n<p>Oscar</p>\n<hr>\n<p><strong>Further Reading:</strong></p>\n<ul>\n<li><a href=\"http://getkirby.com\">KirbyCMS</a></li>\n<li><a href=\"http://api.kushy.net\">Kushy API</a></li>\n<li><a href=\"https://medium.com/kushyapp\">Kushy Medium</a></li>\n<li><a href=\"https://kushyapp.tumblr.com/\">Kushy Tumblr</a></li>\n</ul>",frontmatter:{title:"Kushy Blog is Alive!",cover_image:null,date:"06 December, 2017",tags:["blog","kirby","cms","announcements"]},fields:{slug:"/blog/2017/kushy-blog-is-alive/"}}}]}},pathContext:{tag:"announcements",slug:"/blog/2017/the-start-of-the-future/"}}}});
//# sourceMappingURL=path---blog-2017-the-start-of-the-future-3969e3a95467aebc37e5.js.map