# FRONTEND TECHNICAL TEST

The objective of this project is to showcase my technical and organizational skills by developing a functional and well-structured application according to the test specifications.

## Test Specifications

The test required the development of a simple application with two main pages: a Homepage for searching animals and a Results Page for displaying the search results. Key features included a search input, result display, pagination, and error handling for various scenarios. Additionally, the application had to be styled without the use of external UI libraries, and data was to be generated using faker.js.

## Approach and Implemented Solutions

### Use of Next.js

Although not explicitly required, I chose Next.js for this project due to several production-ready benefits. Next.js supports server-side rendering (SSR) and static generation, which significantly improve load times.

### Enhanced Image Handling

While it wasn’t required, I used the option provided by faker.js to display animals that match the type of the search rather than showing completely random animals. This makes the visuals more relevant to the user's search.

### Pagination System

Rather than showing all 100 animals at once, I implemented a frontend pagination system that allows users to view 10 animals per page. This approach improves readability and enhances the user experience as they can navigate through the dataset more easily.

### Custom Hooks for Code Reusability

To keep the codebase organized and modular, I created custom hooks to handle both fetchData and pagination. These hooks allow for reusability and a clean separation of logic, making it easy to use the same data-fetching and pagination functions on both the homepage and the results page.

## Possible Improvements with More Time

With additional time, I would have liked to:

- **Implement Authentication**: Adding an authentication system would enable the display of user information in the header and allow for potential user-specific features.
- **Extend Search Capabilities**: Currently, the search filters animals by type. Expanding this to include other attributes would enhance user experience.
- **Localization and Language Detection**: The application currently displays the "Buscar" button in Spanish and the error message "Try looking for:" in English, as per the test instructions. With more time, I would implement full localization using i18n and detect the user’s browser language to present the entire app in the user’s preferred language for a more cohesive experience.
- **Additional Testing**: I have written extensive test cases to cover the main components and functionalities of the application. With extra time, I would further expand the tests to ensure complete coverage of edge cases and to optimize for reliability.

## Installation and Running the Project

To install and run the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/seguramaria/frontend-technical-test.git
   ```
2. Navigate into the project directory:
   ```bash
   cd frontend-technical-test
   ```
3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open http://localhost:3000 in your browser to see the application in action.
