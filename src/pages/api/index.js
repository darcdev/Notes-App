import nc from "next-connect";
import { resolveTypeReferenceDirective } from "typescript";

const handler = nc()
  .get((req, res) => {
    res.json({ message: "ok" });
  })
  .post((req, res) => {
    resolveTypeReferenceDirective.json({ message: "posted" });
  });

export default handler;

// export default (req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "application/json");
//   res.end(JSON.stringify({ message: "hello" }));
// };
