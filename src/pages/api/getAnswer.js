import { checkGoogleAnswer } from "@/db/checkGoogleAnswer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = await checkGoogleAnswer(req.body.google_id);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).end();
    }

    return;
  }
  res.status(404).end();
}
