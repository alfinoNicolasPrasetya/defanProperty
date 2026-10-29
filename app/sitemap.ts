import { MetadataRoute } from "next";
import { propertiesData } from "@/data/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://defanproperty.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/perumahan`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fasilitas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const propertyRoutes: MetadataRoute.Sitemap = propertiesData.map((prop) => ({
    url: `${baseUrl}/perumahan/${prop.slug}`,
    lastModified: new Date(prop.updatedAt || new Date()),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...propertyRoutes];
}
