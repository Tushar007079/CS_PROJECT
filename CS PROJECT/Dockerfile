# Step 1: Build the Angular app
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular project
RUN npm run build --prod

# Step 2: Serve the Angular app with Nginx
FROM nginx:alpine

# Copy the built Angular app to the Nginx container
COPY --from=build /app/dist/your-app-name /usr/share/nginx/html

# Expose port 80 to access the app
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
