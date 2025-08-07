import type { NextApiRequest, NextApiResponse } from "next/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "text/plain");
  res.write(`User-agent: *
Disallow:

Sitemap: https://${req.headers.host}/sitemap.xml
`);
  res.end();
}
