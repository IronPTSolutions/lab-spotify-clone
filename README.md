![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Spotify Clone

## Introduction

The goal of this lab is to practice React components and CSS. You will be cloning [this website](https://ironptsolutions.github.io/lab-spotify-clone/), which is a shallow copy of Spotify's album view.

![goal](/readme-images/goal.png)

Note that this is a self-guided optional lab. You can go as far as you want with the copy!

## Instructions

### 0️⃣ | Give it a try

The easiest way to practice CSS is to clone an existing website. It frees your mind from thinking about the design side of things, and you can just focus on building something as close as possible as the example you already have.

Thus, the first step is to [go to the website](https://ironptsolutions.github.io/lab-spotify-clone/) and tinker with it.

> ⚠️ **Don't copy the code!** ⚠️ We don't care if you steal the code: the issue is that the goal of this lab is to **practice, practice, practice**! If you copy the code from the solution branch or the deployed app, you're better off spending your time elsewhere. If you hit a roadblock, just ask in the `#dudas` chat and we'll get back to you :)

![tinker](/readme-images/tinkering.gif)

Things to note:

- How scroll behaves on the main section and on the sidebar
- How the cursor behaves when hovering over different elements (🌟 pseudo-classes! 🌟)
- How elements are positioned at different resolutions (🌟 media queries! 🌟)

### 1️⃣ | Componentize

Once you've got the hang of what things are supposed to look like, you've got to **start thinking in React**.

The first step is to **componentize** the application. There are three reasons why you might want to turn something into a component of its own:

- To keep the code **[DRY](https://es.wikipedia.org/wiki/DRY)**. If you're going to use something more than once, it's always better to move it into a component that can be customized using props! For example, the album's tracks will repeat N times, once for each track in the album. Remember the [Lists and Keys lesson](https://reactjs.org/docs/lists-and-keys.html).
- To isolate **sections**. In this view there's three large sections: the sidebar to the left, the controls pannel at the bottom, and the main content with the album's info and tracks, so that's a good starting point.
- With React and the way it's indented by default by Prettier, it's very easy to end up with **components that are hundreds of lines long**. There might be some elements that don't repeat and that don't really represent a section of the page, but despite being relatively simple, they are long enough to isolate. For example, in the final solution we moved the top part of the main section with the album cover, title, year, etc. into its own component.

Here's an example with some components highlighted. Take into account that we haven't highlighted all the components in the final solution! We added many more 😙

![components](/readme-images/components.png)

To help you with this task, we have split the code into 6 components:

- album: represents the main view of the screen (yellow box)
- card: we used it for the albums that are displayed at the bottom of the main section (not highlighted)
- controls: the bottom part of the screen (navy blue box)
- header: the top part of the albums view, with the search input and the user info (light blue box)
- sidebar: (the red box)
- track: each of the rows in the albums view (neon green boxes)

It's just a guide, you can refactor whatever you want!

### 2️⃣ | It's time to code!

Now that you know the structure, you can start creating your components! Some recommendations:

- take it one section at a time
- go from big to small
- have fun!

Just so you can leave the boring stuff aside, you can find the mock data in the [constants](./src/constants) folder and the icons in the [assets](./src/assets) folder. Feel free to switch them as you want!

### 3️⃣ | 🌟 Bonus 🌟 Finishing touches

Congrats for getting to this iteration! 🚀

Now that you're finished, note that you might have missed some finishing touches that can be very fun (and challenging!) to add:

- Transitions in the cover/buttons of the Album view when hovering
- When the Album section is scrolled, two things happen:
  - The header at the top of the screen stays put, and some sort of shadow appears under it! Hmm...
  - Once the track list's header reaches the top, it also stays put!
  - See [position: fixed/sticky](https://developer.mozilla.org/en-US/docs/Web/CSS/position) for this. Note that the sticky position can be tricky! 😉
- It's responsive! Dust of your media queries and give it a try, the changes are very small.
  - If you've used `display: flex;`, it will be very easy to turn horizontal layouts into vertical ones! 😉
