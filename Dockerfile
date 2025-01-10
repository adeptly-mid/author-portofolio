# Step 1: Use the official Node.js image as the base image
FROM node:16

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json into the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install --legacy-peer-deps
# Step 5: Copy the entire project into the container
COPY . .

# Step 6: Expose the port the app runs on
EXPOSE 3000

# Step 7: Define the command to start the app
CMD ["npm", "start"]
