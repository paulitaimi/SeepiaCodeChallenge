PixiJS & Three.js Project

This project demonstrates how to use both PixiJS and Three.js in the same web application. PixiJS is used to render a 2D background, while Three.js renders a 3D character on top of the background. The project is built with TypeScript and uses Webpack for bundling.
Features

    PixiJS Background: A simple 2D background is rendered using PixiJS.
    Three.js 3D Model: A 3D model is loaded and displayed on top of the background using Three.js.
    Responsive Canvas: Both the PixiJS and Three.js canvases are responsive and resize with the window.
    Model Rotation & Movement: The 3D model can be rotated and moved via code.

Technologies Used

    PixiJS: Used for rendering the 2D background.
    Three.js: Used for rendering the 3D character.
    TypeScript: Provides static typing for better development experience.
    Webpack: Bundles the project files.

Getting Started
Prerequisites

Ensure you have the following installed:

    Node.js (v14 or higher recommended)
    npm or yarn

Installation

    Clone the repository:

git clone (https://github.com/paulitaimi/SeepiaCodeChallenge.git)

Install dependencies:

npm install

Running the Project

    To start the development server, run:

    npm start

    Open your browser and go to http://localhost:8080. You should see both the PixiJS background and the Three.js 3D model.

Building for Production

To create a production build, run:

npm run build

This will generate the bundled files in the dist/ directory.
Project Structure

.
├── public/                 # Static assets like GLTF model and textures
│   ├── ninja.png
│   └── cibus_ninja.glb
├── src/
│   ├── background.ts       # PixiJS background rendering logic
│   ├── 3dModel.ts          # Three.js 3D model loading and rendering logic
│   ├── index.ts            # Entry point of the application
│   └── styles.css          # Styles for canvas layering
├── dist/                   # Bundled files (generated after build)
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── webpack.config.js       # Webpack configuration
└── README.md               # 
