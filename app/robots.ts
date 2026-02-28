import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/api/"],
    },
    // Replace with correct domain if applicable
    sitemap: "https://berlanding.vercel.app/sitemap.xml",
  };
}
