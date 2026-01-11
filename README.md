## Render: https://travel-gallery-gf3k.onrender.com/

## Instructions

# User Stories

🐿️ As a developer, I want the application to use the useState hook so that user interactions (like selecting an image) are smooth and the gallery’s state is managed effectively.
🐿️ As a developer, I want to use the useEffect hook to perform side effects, such as fetching image data from an external API.
🐿️ As a developer, I want to create separate files that return JSX instead of including all JSX within App.jsx so that the code is well-organized, making the app more maintainable and reliable for the user.
🐿️ As a user, I want to see a collection of image thumbnails displayed clearly on the page.
🐿️ As a user, I want to be able to click on an image thumbnail to view a larger version of that image, possibly in a modal or a dedicated view.
🐿️ As a user who relies on assistive technologies, I want images to have descriptive alt text so I can understand their content. 🐿️ As a user who navigates with a keyboard, I want to be able to tab through the interactive elements (like thumbnails and buttons) in a logical order.

# Requirements

🎯 Implement the useState hook to manage gallery state (e.g. selected image).
🎯 Use useEffect for initial fetching of images from an external API.
🎯 Return JSX from multiple components (e.g., an ImageItem component for each image and a Gallery component to display them).
🎯 Use the .map() function to render an array of images dynamically
🎯 Implement functionality to display a larger version of an image when its thumbnail is clicked.
🎯 Ensure all images have meaningful alt text.
🎯 Ensure basic keyboard navigation for image selection (e.g., thumbnails should be focusable and activatable with Enter/Space).

# Stretch Goals

## Stretch User Stories

🐿️ As a user, I want to be able to change the images in the gallery using a search bar. 🐿️ As a developer, I want to be able to fetch images from an API with a larger amount of data, such as Unsplash. 🐿️ As a developer I don’t want anyone to know my API keys from code. 🐿️ As a user I want the app to look pleasing.

## Stretch Requirements

🏹 Use useEffect and the dependancy array to update the images when the user types in an input field. 🏹 Set up an Unsplash application that you can fetch from your React app. 🏹 Use .env to hide your API keys and tokens from the code. 🏹 Style the application excellently, using grid or flex and positioning.

# Reflection

## React

I feel much more comfortable with react than I did with basic JavaScript. The components strucutre is much more logical to me and I like that in theory I can have a CSS file for each component. Also the way of creating actions and effects without any DOM manipuation as such (no appending etc) is much more intutive to me and I felt like I understood the concept much quicker. There is also a lot of online material that explains react for beginners much easier than a lot of the JavaScript documentation I found.

I also like that I can build components first and then decide later how to add them into app.jsx or remove them without breaking too much code.

## Components

As mentioned above, I like that I can build parts outside of the main page and then add them together as needed. It makes it easier for me to oversee the final layout and move elements without me running risk of breaking something. The only issue I still encounter is naming conventions and typos and then having to search through all parts to find the one missing letter.

## CSS

While the components are great, they also tend to easily confuse me when it comes to styling. It took me some time to understand how each component interacts with each other and which style is being used. At the moment, I have defaulted to my standard Windows 95 style but if I have time, I will do some more research on modern CSS and making it prettier.

# Update on CSS

I decided to connect it to my Week4 project and style it similar so it can be used together.

## Issues:

I set up my initial code and style on Thursday however on opening VSCode on Friday, I was unable to open the code or pull the latest version of Github. I assume it has something to do with my branches. I also noticed that my file was within a folder. I was also not able to deploy on render as it would through the same error (couldn't find a package-lock.json file). To avoid any time being wasted by re-doing everything or accidentally deleting all my code, I decided to set up a new repo, clone it on my machine and copy the code across (hence why there were so many lines inserted within the first push). The original code base is here: https://github.com/Culibean/week6-assignment

# SearchBar

I had some real issues with the search function. I initially wanted that users are able to serch photos within the 30 images that are displayed from the travel section. However when initially setting this up (visible in the original week 6 assignment) it would break my thumbnails (when i press next more than once, the state of the large image wouldn't render again and then nothing appeared). I tried to debug but wasn't successful. I took my time on Thursday and Friday to read through the Unsplash documentation and watch some additional videos on creating galleries with react. The easiest way was to remove the search query from the unsplash url in env and it be only visible when loading the page (so it's still a travel gallery). The travel query can be removed with the search bar through searchTerm. In theory users can now look through all of unsplash library but I added a placeholder to the search bar so users are hinted towards using travel images.

I also removed the button in the end for the search bar, I wasn't able to stop the re-render before the button is being pressed.

I was looking into adding a placeholder (conditional rendering) showing a message if no image was found, but wasn't confident enough to add this in.

## Summary

I really enjoyed this project, apart from the massive Git error and having to copy over code on the second day. I beliebe though this is due to me having a folder within a folder ad not being careful enough with my branches. I did not use branches in my new project due to being worried of making another mistake but it's definitely something I want to make a habit of.

# Resources

https://mimo.org/glossary/javascript/modulo-operator
https://samchowdhury.medium.com/build-an-image-slider-in-react-js-with-usestate-hook-172c3e01c203
https://www.youtube.com/watch?v=Vc6SFpPf-V4
https://www.w3schools.com/react/react_events.asp
https://mimo.org/glossary/react/events
https://www.codecademy.com/resources/docs/react
https://www.youtube.com/watch?v=_AprVrgnq4w

# Planning:

https://www.figma.com/board/CM4AUZeU6xPqUcZd3PssjN/Week-6-Assignment---React-Gallery?node-id=0-1&p=f&t=Yym6GKPaBw7YG1hO-0
