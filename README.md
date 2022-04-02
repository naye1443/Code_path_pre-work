# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Eyan Eubanks

Time spent: 10 hours spent in total

Link to project: https://glitch.com/edit/#!/bejewled-everlasting-lion

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

List anything else that you can get done to improve the app!
- [x] Instead of the playback speeding up on each turn. Added a faster and slower button.

## Video Walkthrough (GIF)

here is general over view of project: ![](https://i.imgur.com/QqPgqh3.gif)
here is a losing game: ![](https://i.imgur.com/tHSNY8L.gif)
here is a winning game: ![](https://i.imgur.com/bm9pilN.gif) 
here is the speed being changed: ![](https://i.imgur.com/eVefAbD.gif)

of course, through a Gif you can not here sound. However, though out my
project, I just added two more high pitched sounds. This is the blue and 
the orange button.

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
HTMLcolorcodes.com    This helped me find the colors I wanted exactly using Hex codes.

    developer.mozilla.org    This helped me with unfamilar javascript methods. Such as AudioContest.resume() and setTimeout().

    webdeasy.de    I used some templates for my buttons and the glowing effect.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
While creating this submission, I encountered many challenges, however, the challenges only made me more intrigued with the program. I have taken intro to internet computing in the summer of 2021. During that course, we used a lot of Javascript, jquery, and bootstrap to style our websites, however, we did not focus on designing algorithms. However, what I enjoyed most about this project is that it focused on functionality rather than how to center a div. While that is important, I believe user functionality and implementation are just as important.

    The challenges that I encountered did not involve implementation, instead, they were associated with designing the website to be easy on the eyes while also upholding the utilitarian standard. A big challenge I faced was finding the right space, and size for the buttons to give a simplistic, but smooth layout. To overcome that challenge, I took it upon myself to conduct some research to understand the problem so that I could fix it accordingly. Understanding that using display: flex; and aligning content to the center gave me the best result.
    
    Another challenge I encountered was determining how to implement different patterns. I engaged in more research and found out that using a multidimensional array while using math.random() math function to pick the indices solved that problem.

    Moreover, implementing the faster and slower function was also an interesting task. To create faster playbacks of the blocks, I would have to change global constants to have shorter clueHoldTimes, cluePauseTimes, and nextClueWaitTimes. However, those values were constants so they could not be changed at runtime. My solution was to create an array with the original times, and shorter times. This keeps the constant values constant while allowing different speeds. I really enjoyed this project and worked hard on it. The challenges allowed me to use critical thinking and encouraged me to use my own knowledge in conjunction with research to solve my problems.  I wish I had more time to add more speeds and an indicator that tells the user what speeds were on each level, however, I ran out of time. I hope to learn about new programs and gain more information on topics that are similar to this project through your internship. Again, I truly enjoyed solving these challenges and would like the opportunity to do it again, and do even better.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    Web development is very different from the languages I am used to like python and C++. Those languages are sequential and have deterministic branches that cause the code to do different things based on the different values given to it. Web development with Javascript, CSS, and HTML are more event handler driven. Developing functions without returns and having global variables is different than what I'm used to. I am curious about how deterministic languages are implemented on the back end and integrated into websites. Things like Online C++ compilers, or games built-in C++ but are able to be run in a browser. Also, how is are other APIs like Node.js, and how are databases handed like using SQL.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

    There are a lot of things that I would like to do if I had more time. The first thing I would do would be to upgrade the look of my website with more animations. I would want to add an overlay game over screen instead of using just an alert. I would also like to implement some sort of different sounds for each button like a piano while adding ripples moving the background as the buttons would be pressed. Another important implementation would be to show the user how fast playbacks were/ the difficult level the user would be at.



## Interview Recording URL Link

(https://fauedu.zoom.us/rec/share/BVFUhLOqEbBe6fOvkdZhLwo2WAvOeNs6MgiH8uQGNWFyqDxka1JYzYiS2Jpn08xP.kegAyPs-hkArH7BJ)

The first two videos were my practice recordings. I apoligize but they became stitched together.

The email that is shown in the link is my school email.


## License

    Copyright [Eyan Eubanks]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.