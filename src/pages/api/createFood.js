// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createAnswer } from "@/db/createAnswer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await createAnswer(req.body);
      res.status(200).end();
    } catch (err) {
      res.status(400).end();
    }

    return;
  }
  res.status(404).end();
}
