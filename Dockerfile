FROM mcr.microsoft.com/playwright:v1.51.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -D playwright @playwright/test

CMD ["npx", "playwright", "test"]
