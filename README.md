
# 1datatec_test

## Overview

This project is a mini-application developed as part of a task to implement specific features within a React application. The application includes the following components:

- **Radio Selection Buttons**: Allows users to choose between three options, with the selected option stored in the application's state.
- **Discount Code Entry**: A text box where users can enter a discount code, with basic validation to ensure the code follows a specific pattern.
- **Discount Code Generation**: A button that generates a mock discount code and displays it to the user.
- **Note Field**: A text box for users to enter notes or comments, with the content stored in the application's state.

## Features

- **State Management**: Redux is used for managing the application's state.
- **Responsive Design**: The application is styled using TailwindCSS and is fully responsive, ensuring a polished look on both desktop and mobile devices.
- **Validation**: Basic validation for the discount code input field to ensure correct formatting.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone git@github.com:sdanilv/1datatec_test.git
   cd 1datatec_test
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

3. **Run the development server**:
   ```bash
   yarn dev
   ```

   This will start the Vite development server. The application can be accessed in your browser at `http://localhost:3000`.

4. **Build the project**:
   ```bash
   yarn build
   ```

   This command will compile TypeScript and build the production-ready application using Vite.

5. **Run tests**:
   ```bash
   yarn test
   ```

   This will run all unit tests using Jest.

## Scripts

- `yarn dev`: Starts the development server.
- `yarn build`: Builds the project for production.
- `yarn preview`: Previews the production build.
- `yarn lint`: Runs TypeScript and ESLint checks.
- `yarn format`: Formats the code using Prettier.
- `yarn test`: Runs unit tests using Jest.

## Assumptions & Decisions

- **State Management**: Redux was chosen for state management to maintain consistency and scalability in the application's architecture.
- **Styling**: TailwindCSS was used for styling to quickly and efficiently implement a responsive design.
- **Validation**: A simple regex pattern was implemented for discount code validation (`DISCOUNT2024`).

## Folder Structure

The project follows the Feature-Sliced Design (FSD) approach for organizing the codebase.

```bash
src/
│
├── app/                # Global application-level configurations and providers
├── entities/           # Domain entities (e.g., user, product) and their associated logic
├── features/           # Independent feature slices (e.g., login, filter, sorting)
├── shared/             # Shared utilities, components, and hooks used across the application
├── pages/              # Page components representing different routes
├── widgets/            # Reusable components like headers, footers, or sidebars
├── index.html          # Entry point for the React application
└── app/App.tsx         # Main application component
```

## Dependencies

- **React**: UI framework
- **Redux Toolkit**: State management
- **TailwindCSS**: Utility-first CSS framework
- **TypeScript**: Static typing
- **Jest**: Testing framework

## Development Environment

- **Node.js**: v20+
- **Yarn**: v1.22+

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Contact

If you have any questions or feedback, please reach out to [sdanilv@gmail.com](mailto:sdanilv@gmail.com).
