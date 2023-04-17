// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Connection from "@/database/connection";

export default async function handler(req, res) {
  Connection();
  res.status(200).json({ name: "John Doe" });
}
