# Stage 1: Build the application
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /fonseca_noah_coding_assignment12

# Copy the package.json and package-lock.json to install dependencies first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all source code into the container
COPY . .

# Build the React app for production
RUN npm run build

# Debugging step: List contents of the build directory
RUN ls -l /fonseca_noah_coding_assignment12/build

# Stage 2: Serve the app using a lightweight web server (like Nginx)
FROM nginx:alpine

# Copy the build folder from the build stage to Nginx’s public folder
COPY --from=build /fonseca_noah_coding_assignment12/build /usr/share/nginx/html

# Expose port 8083 for the app
EXPOSE 8083

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
