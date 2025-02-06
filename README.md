# WavyCat's Website

A personalized WavyCat's website.

Designed for easy deployment on Cloudflare Pages.

## Local development

To set up the project locally, follow these steps:

1. **Install Node.js**: Download and install [Node.js](https://nodejs.org/en/download/) version 20/22, which includes npm.
2. **Install dependencies**: `npm install`.
3. **Create a `.dev.vars` file** in the root directory.
4. **Start the development server:** `npm run dev`

### .dev.vars reference

```dotenv
OWM_API_KEY=Token_from_OpenWeatherMap
CITY_NAME=Your_city
```

Replace `Token_from_OpenWeatherMap` with [your API key](https://home.openweathermap.org/api_keys) and `Your_city` with
the desired city.

## Deploy to Pages

To deploy the project to Cloudflare Pages, follow these steps:

1. [Create a fork](https://github.com/wavy-cat/website/fork) of the repository.
2. In the Cloudflare dashboard, start creating a new project and select your forked repository.
3. During the "Set up builds and deployments" stage, add the environment variables described in the `.dev.vars` file.
4. Click "Deploy" to deploy the project.
