# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

After the build completes, the next step is to build a Docker image and run it.

### `docker build -t fonseca_noah_coding_assignment12:latest .`

Builds the Docker image for the application using the `Dockerfile` in the root of the project.\
This will create a Docker image tagged as `fonseca_noah_coding_assignment12:latest`.

### `docker run -p 8083:80 --name fonseca_noah_coding_assignment12  fonseca_noah_coding_assignment12:latest`

Runs the application in production mode using Docker.\
Open [http://localhost:8083](http://localhost:8083) to view it in the browser.

The app will be displayed on port 8083 on your local machine.

---

### Docker Setup Instructions:

1. **Build the React app**: Run `npm run build` to generate the production-ready build of the app.
2. **Build the Docker image**: Run `docker build -t fonseca_noah_coding_assignment12:latest .` to create the Docker image.
3. **Run the Docker container**: Run `docker run -p 8083:80 --name fonseca_noah_coding_assignment12 fonseca_noah_coding_assignment12:latest` to start the container and start the app on port 8083.
4. **Access the app**: Open [http://localhost:8083](http://localhost:8083) in your browser to see the application running in production mode.
