import z from "zod";
import { server } from "./server.js";

server.registerTool(
  "weather_tool",
  {
    title: "Weather Tool",
    description: "It will extract the weather details",
    inputSchema: z.object({
      city: z.string(),
    }),
  },
  async ({ city }) => {
    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`,
      );
      if (!geoRes.ok)
        throw new Error(`Geocoding service returned ${geoRes.status}`);
      const geo = await geoRes.json();

      if (!geo.results?.length) {
        return {
          content: [
            {
              type: "text",
              text: `Could not find a location named "${city}".`,
            },
          ],
          isError: true,
        };
      }

      const { latitude, longitude, name, country } = geo.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`,
      );
      if (!weatherRes.ok)
        throw new Error(`Weather service returned ${weatherRes.status}`);
      const weather = await weatherRes.json();
      const current = weather.current;

      return {
        content: [
          {
            type: "text",
            text: `Weather for ${name}, ${country}\n\n🌡 Temperature: ${current.temperature_2m} °C\n💧 Humidity: ${current.relative_humidity_2m} %\n💨 Wind Speed: ${current.wind_speed_10m} km/h`,
          },
        ],
      };
    } catch (err) {
      return {
        content: [
          {
            type: "text",
            text: `Sorry, I couldn't fetch the weather right now (${err instanceof Error ? err.message : "unknown error"}).`,
          },
        ],
        isError: true,
      };
    }
  },
);
