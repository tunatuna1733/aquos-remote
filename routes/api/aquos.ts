import { FreshContext } from "$fresh/server.ts";

export const handler = async (req: Request, _ctx: FreshContext) => {
  const url = new URL(req.url);
  const params = url.searchParams;
  const feature = params.get("feature");
  if (!feature) {
    return new Response(
      JSON.stringify({
        error: "Feature missing.",
      }),
      { status: 400 },
    );
  }
  const queris: string[] = [];
  for (const param of params) {
    if (param[0] !== "feature") {
      queris.push(`${param[0]}=${param[1]}`);
    }
  }
  const reqUrl = `${Deno.env.get("BASE_URL")}/aquos/${feature}?${
    queris.join("&")
  }`;
  const res = await fetch(reqUrl);
  if (!res.ok) {
    return new Response(
      JSON.stringify({
        error: "Operation failed.",
      }),
      { status: 400 },
    );
  }
  const resJson: { success: boolean } = await res.json();
  if (!resJson.success) {
    return new Response(
      JSON.stringify({
        error: "Operation failed.",
      }),
      { status: 400 },
    );
  }
  return new Response(JSON.stringify({
    success: true,
  }));
};
