import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.sparklingwhitedental.com.au/locations/dentists-in-alexandra-hills/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
