import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/pos/", "/prod/"],
      },
    ],
    sitemap: "https://pineappleexpressma.com/sitemap.xml",
  };
}
