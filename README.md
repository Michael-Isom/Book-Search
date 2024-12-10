# Book-Search
Book Search App

This project is a book search application that allows users to search for books using the Google Books API. It has both a front-end and back-end, and it’s deployed on GitHub Pages for easy access.

Features

	•	Search for books: Users can search for books by title, author, or publisher using the Google Books API.
	•	Save books: Users can save their favorite books in a personal collection.
	•	GraphQL API: The app features a GraphQL API that connects the front-end and back-end for querying and mutating saved books.
	•	Authentication: User login and authentication are handled through JWT tokens.
	•	Responsive UI: Built with React and styled with Bootstrap for a modern, responsive design.

Tech Stack

	•	Frontend: React, Vite, React Router, Bootstrap, Apollo Client
	•	Backend: Node.js, Express, GraphQL, MongoDB, JWT Authentication
	•	Hosting: GitHub Pages for front-end, MongoDB Atlas for the database

Getting Started

To run the app locally, follow these steps:

1. Clone the repository:
git clone https://github.com/Michael-Isom/Book-Search.git
cd Book-Search
2. Set up the backend:

Navigate to the server directory, install dependencies, and start the server:
cd server
npm install
npm start
3. Set up the frontend:

Navigate to the client directory, install dependencies, and start the app:
cd client
npm install
npm run start
The app will be accessible at http://localhost:3000.

4. Deploy to GitHub Pages:

To deploy the front-end to GitHub Pages, make sure you’ve committed and pushed your changes to GitHub. Then run:
npm run deploy 
This will deploy the app to the GitHub Pages URL:
https://Michael-Isom.github.io/Book-Search

Important Files

	•	client/package.json: Contains front-end dependencies and build configuration.
	•	server/server.js: The main server file that connects to the database and handles API requests.
	•	client/src/App.js: The main React component where routing and major app logic are handled.
	•	vite.config.js: Configuration for Vite, including base path for deployment to GitHub Pages.

Key Highlights

	•	GraphQL Integration: The back-end is powered by GraphQL, offering efficient data querying and mutation.
	•	JWT Authentication: Ensures secure login and session management for users.
	•	Responsive UI: The front-end is built to be fully responsive and mobile-friendly.
	•	GitHub Pages Deployment: The app is hosted on GitHub Pages, making it easy to access and share.

Future Enhancements

	•	Add a user authentication system to allow users to save and manage their book collections.
	•	Improve error handling and add more comprehensive validation for API requests.
	•	Expand the search functionality to allow users to filter books by categories, ratings, etc.
