import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dev-tools-rose.vercel.app";

  const tools = [
    "json-formatter",
    "regex-tester",
    "base64-encoder",
    "jwt-decoder",
    "url-encoder",
    "timestamp-converter",
  ];

  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...toolPages,
  ];
}
