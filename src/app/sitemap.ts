import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.zerovexsolutions.site";
  const currentDate = new Date().toISOString();

  const routes = [
    "",
    "/about",
    "/services",
    "/services/custom-development",
    "/services/web-development",
    "/services/graphic-design",
    "/services/digital-marketing",
    "/services/ecommerce",
    "/services/website-maintenance",
    "/projects",
    "/process",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.8 : 0.7,
  }));
}
