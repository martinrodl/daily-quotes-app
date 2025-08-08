import { NextResponse } from "next/server";

interface HealthStatus {
  status: "healthy" | "unhealthy";
  timestamp: string;
  version: string;
  apis: {
    name: string;
    url: string;
    status: "up" | "down";
    responseTime?: number;
  }[];
  uptime: number;
}

const startTime = Date.now();

// Health check endpoint pro monitoring
export async function GET() {
  const apis = [
    { name: "Quotable.io", url: "https://api.quotable.io/random" },
    { name: "ZenQuotes", url: "https://zenquotes.io/api/random" },
  ];

  const apiStatuses = await Promise.allSettled(
    apis.map(async (api) => {
      const start = Date.now();
      try {
        const response = await fetch(api.url, {
          signal: AbortSignal.timeout(5000), // 5 second timeout
        });
        const responseTime = Date.now() - start;

        return {
          name: api.name,
          url: api.url,
          status: response.ok ? ("up" as const) : ("down" as const),
          responseTime,
        };
      } catch (error) {
        return {
          name: api.name,
          url: api.url,
          status: "down" as const,
          responseTime: Date.now() - start,
        };
      }
    })
  );

  const apiResults = apiStatuses.map((result, index) =>
    result.status === "fulfilled"
      ? result.value
      : {
          name: apis[index].name,
          url: apis[index].url,
          status: "down" as const,
        }
  );

  const allApisUp = apiResults.every((api) => api.status === "up");

  const healthStatus: HealthStatus = {
    status: allApisUp ? "healthy" : "unhealthy",
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || "0.1.0",
    apis: apiResults,
    uptime: Math.floor((Date.now() - startTime) / 1000),
  };

  return NextResponse.json(healthStatus, {
    status: allApisUp ? 200 : 503,
  });
}
