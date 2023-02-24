FROM node:alpine as builder
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY package.json .
COPY package-lock.json .
RUN npm cache clean --force
RUN npm fund
RUN npm ci 
ENV NODE_OPTIONS="--openssl-legacy-provider"
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
COPY . .
# Build the app
RUN npm run build

FROM nginx:1.21.0-alpine as production
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

# Add bash
RUN apk add --no-cache bash


# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]