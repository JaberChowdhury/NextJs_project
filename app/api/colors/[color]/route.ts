import useAnalyseColor from "@/hooks/useAnalyseColor";

export async function GET(
  request: Request,
  { params }: { params: { color: string } },
) {
  const { color } = params;

  console.log({ color });
  const data = useAnalyseColor("#" + color);
  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
