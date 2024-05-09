# Project Summary:

This project is a simple React application that allows users to view a list of news items and add new news items using a form. Here's a breakdown of the key features and components:

**NewsComponent:**

This component is the main part of the application.

It maintains a newsList state using the useState hook to store an array of news items.

The newsList array contains objects representing news items with properties like heading, URL (image URL), and description.

The component renders the existing news items using the map function to iterate over the newsList array and display each news item in a styled card format.

Below the list of news items, there's a section to add new news items using the AddNews component.

AddNews Component:

This component provides a form for users to input details of a new news item.

It receives a prop called handleSubmit which is a function passed from the NewsComponent.

The form captures user input for heading, URL, and description fields.

On form submission, it triggers the handleSubmit function passed from the parent (NewsComponent) to add the new news item to the newsList state.


**Features:**

Users can view a list of existing news items.

Users can add new news items by filling out a form with a heading, image URL, and description.

Upon submitting the form, the new news item is added to the list of news items and displayed dynamically on the page.

The application uses React hooks (useState) to manage state and update the UI based on user interactions.


**Technologies Used:**

React: JavaScript library for building user interfaces.

JSX: Syntax extension for React to write HTML-like code in JavaScript.

React hooks (useState): Used for managing state within functional components.

CSS: Styling the components and layout.


**Project Structure:**

NewsComponent.jsx: Main component responsible for rendering the list of news items and the form to add new news items.

AddNews.jsx: Component that provides a form to capture details of a new news item.

The project likely includes additional CSS or styling files (styles.css or similar) to apply styles to the components.

This project demonstrates basic React concepts like state management, component composition, event handling, and conditional rendering.
It provides a foundation for building more complex React applications with dynamic user interactions.

