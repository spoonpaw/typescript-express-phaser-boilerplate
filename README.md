# TypeScript-Express-Phaser Boilerplate

This is a simple boilerplate template using Node.js, Express, Webpack, and Phaser for creating browser games using TypeScript.

## How to Use

1. Clone or download this repository.
2. Install dependencies by running `npm install`.
3. Use `npm run dev` to start a development server or `npm run build` to build the project.
4. The built files will be located in the `dist` directory.

## Scripts

The boilerplate comes with the following scripts:

- `npm run dev`: Starts a development server with live reload.
- `npm run build`: Builds the project for production.
- `npm start`: Starts the server.

## Extending

To extend the boilerplate, you can modify the webpack configuration files located in the root directory:

- `webpack.client.config.js`: The client-side webpack configuration.
- `webpack.server.config.js`: The server-side webpack configuration.
- `tsconfig.client.json`: The TypeScript compiler options for the client.
- `tsconfig.server.json`: The TypeScript compiler options for the server.

You can also modify the `tsconfig.json` file to change the common TypeScript compiler options.
