## Abstract:

Newsflash is a simple news story browsing application built in about 8 hours with React, Typescript, and React Router v5.
The data is being gathered from the [News API](https://newsapi.org/).

## Installation Instructions:

1. Fork and clone
2. `npm start` Runs the app locally in the development mode.
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Planning
Since this was a simple application built solo on a limited timeline, I kept my planning simple as well. I utilized the GitHub issues to collect user stories and covert them into a task list. 

## Preview of App:
![gif of application](https://media.giphy.com/media/ANErF1HzypX135kmWN/giphy.gif)

## Contributors:

[Chrissy Cooper](https://github.com/chrissycooper)

## Learning Goals:
I wanted to write this project in Typescript, even though it wasn't a requirement, because it seems to be growing as an industry standard. I wanted to take this opportunity to continue practicing and grow my fluency with TS in a React project. 

## Wins + Challenges:

### Challenges
- Since I opted to continue learning TS with this project, I forgoed the route that might include more features like additional fetch calls for a better search function, and some more user experience smoothing. I'm proud of what I was able to build even though it can be hard not to build out beyond the MVP. 
- The News API didn't send an unique id with every article object which presented a challenge with routing to the individual story page. What would I use as the URL? I considered creating a unique id for each (perhaps with `Date.now()`), but ended up utilizing their `publishedAt` property which was a date format down to the second. Thinking about it, `Date.now()` since it calculates a number down to the millisecond, might be a safer option in case two articles were published very very close together in time.

### Wins
- Since this is my final project at Turing (!!!) it was really lovely to realize how far I've come and how easily this application came together, when just six months ago I was still learning the foundations of vanilla javascript. I appreciate all my cohortmates and instructors who put in so much of their time, energy, and heart to foster such a rich and supportive learning environment. Thank you all. 
 
## Next Steps:
My next steps for improving newsflash involve user experience. As it stands, the search is available on the individual story view. This is a bit confusing from a user's standpoint, since it searches and filters for the search from the list of stories that are not currently being shown. This specific step through also causes an error message to show when you clikc `home` and you've searched for a key word that no article's title includes. The error is in fact not coming from any issue within the application, but just because the search didn't have results. I might combat this by passing in a message prop into my `NotFound` error component so that I can control what message the user sees. I would also hide the search bar when they are on the individual story page. 
