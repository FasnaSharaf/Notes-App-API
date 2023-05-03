FROM node:16-alpine
WORKDIR /app
COPY . /app
RUN apk add --no-cache mongodb && \
    apk add --no-cache mongodb-tools && \
    npm install
EXPOSE 5000
HEALTHCHECK --interval=30s --timeout=10s \
  CMD wget -q http://localhost:5000/health -O /dev/null || exit 1
CMD ["npm", "start"]
