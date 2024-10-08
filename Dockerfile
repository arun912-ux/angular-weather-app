# Stage 1: Build the Angular application
FROM node:20.17.0 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build --prod

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the built Angular app to Nginx's html folder
COPY --from=builder /app/dist/angular-weather-app /usr/share/nginx/html

# Expose the port that Nginx is listening on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

