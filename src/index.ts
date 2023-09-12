import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";

new Elysia()
  .use(
    swagger({
      path: "/v2/swagger",
    })
  )
  .get("/", () => "hi")
  .post("/hello/:id", ({ params: { id } }) => {
    return id;
  })
  .post(
    "/a",
    ({ body }) => {
      console.log(body);
      return "hi";
    },
    {
      body: t.Object({
        a: t.String(),
        b: t.Number(),
        c: t.Boolean(),
        d: t.Array(t.String()),
        e: t.Object({
          f: t.String(),
          g: t.Number(),
          h: t.Boolean(),
          i: t.Array(t.String()),
        }),
      }),
    }
  )
  .listen(8080);
