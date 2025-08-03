# Use a Node.js 16 base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies needed for both build and server
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the port the server will run on
EXPOSE 5000 

# Run your production server script
CMD [ "npm", "run", "prod-server" ]

