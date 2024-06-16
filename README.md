# Happy Movie Jokes 🎥

Welcome to the Happy Movie Jokes repository! This application combines entertainment and technology by leveraging the MovieDB API to fetch top trending movies and integrates ChatGPT 3.5 to generate movie-based jokes according to user-defined rules.

## Application Overview

Happy Movie Jokes is designed to provide users with a fun experience by allowing them to explore top trending movies and enjoy custom-tailored jokes about each. Using a combination of Chakra UI for a sleek user interface and Redux for efficient state management, the app offers a seamless and engaging user experience.

## Highlights

- **Trending Movies**: Browse through a list of current top trending movies.
- **Custom Jokes**: Users can set custom rules for generating jokes (or use pre-defined rule), which ChatGPT 3.5 then uses to create humor based on the selected movie.
- **Interactive UI**: Utilize Chakra UI components for a responsive and accessible design.
- **[Visit Happy Movie Jokes](https://happy-movie-jokes.vercel.app/)**
- **[Watch project's video presentation](https://www.loom.com/share/ecbaf4a464a34e4fae8d563ba2c688a1)**

## Repository Structure

The "Happy Movie Jokes" project employs a feature-based folder structure, organizing code into distinct modules based on functionality. This approach enhances the application's modularity and scalability.

### Key Directories:

- **`src`**: Contains all source files, including the main app component (`App.jsx`) and the Redux store configuration (`store.js`).
- **`common`**: Houses reusable configurations and utility functions, such as constants (`constants.js`).
- **`features`**: Organized by domain-specific features:
  - **`ai-jokes`**: Manages components and state for AI-generated movie jokes.
  - **`movies`**: Manages components for displaying movie lists and details, and API interactions.
- **`ui`**: Reusable UI components for consistent styling and layout across the app.

## Tech Stack

### Core Technologies

- **React**: Utilizes React for building a dynamic and responsive front-end.
- **Vite**: Employs Vite as a build tool for fast development and optimized builds.

### UI Components

- **Chakra UI**: Implements Chakra UI for designing a modern and responsive interface.

### State Management

- **Redux Toolkit**: Manages application state in a predictable manner.
- **React Redux**: Integrates Redux with React components for state management.

### Utility Libraries

- **Axios**: Manages HTTP requests to external APIs like the MovieDB API.
- **React Router DOM**: Provides routing functionalities, enabling navigation among components without refreshing the page.
- **React Icons**: Offers a large set of icons which can be easily incorporated into React projects.
- **PropTypes**: Used for checking the types of props passed in React components, aiding in bug prevention.

### Development Tools

- **ESLint**: Ensures code quality and consistency with linting rules.
- **Yarn**: Manages dependencies and runs scripts efficiently.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: Required to run the development server and build the project.
- **Yarn**: Used for managing dependencies and running scripts.

Check installation:

- node -v
- yarn -v

**Repository Cloning:**

- git clone https://github.com/stastnan/happy-movie-jokes.git
- cd happy-movie-jokes

**Installing Dependencies:**

- yarn install

**Running the Project:**

- yarn dev

This command starts the project on your local server.

---

I am always open to networking, opportunities, and collaborations. Please don't hesitate to reach out to me via email at nik.stastna@gmail.com.
