# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application to the container (you might want to add a .dockerignore file to exclude unnecessary files)
COPY . .

# Build the Next.js application for production
RUN npm run build

# Expose the port that Next.js uses (default is 3000)
EXPOSE 3000

# Set the command to run the Next.js application
CMD ["npm", "start"]
