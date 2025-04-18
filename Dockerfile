FROM mcr.microsoft.com/playwright:v1.51.1

WORKDIR /C:\Users\SG048\Documents\Personal_Repo\Playwright-Repo

COPY package*.json ./
RUN npm install

COPY . .

RUN npx playwright install --with-deps

CMD ["npx", "playwright", "test"]

