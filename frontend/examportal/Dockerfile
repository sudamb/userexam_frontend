# Stage 1: Build the Angular application
FROM node:10 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the built application from the previous stage
COPY --from=build /app/dist/examportal /usr/share/nginx/html

# Expose port 3200
EXPOSE 3200

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
