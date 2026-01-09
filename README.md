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

## Issues:

I set up my initial code and style on Thursday however on opening VSCode on Friday, I was unable to open the code or pull the latest version of Github. I assume it has something to do with my branches. I also noticed that my file was within a folder. I was also not able to deploy on render as it would through the same error (couldn't find a package-lock.json file). To avoid any time being wasted by re-doing everything or accidentally deleting all my code, I decided to set up a new repo, clone it on my machine and copy the code across (hence why there were so many lines inserted within the first push). The original code base is here: https://github.com/Culibean/week6-assignment

# Resources

https://mimo.org/glossary/javascript/modulo-operator
https://samchowdhury.medium.com/build-an-image-slider-in-react-js-with-usestate-hook-172c3e01c203
https://www.youtube.com/watch?v=Vc6SFpPf-V4
https://www.w3schools.com/react/react_events.asp
https://mimo.org/glossary/react/events
https://www.codecademy.com/resources/docs/react
