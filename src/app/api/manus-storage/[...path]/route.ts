import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;
  const key = path.join("/");

  if (!key) {
    return new NextResponse("Missing storage key", { status: 400 });
  }

  const forgeBaseUrl = (process.env.BUILT_IN_FORGE_API_URL ?? "").replace(
    /\/+$/,
    "",
  );
  const forgeKey = process.env.BUILT_IN_FORGE_API_KEY;

  if (!forgeBaseUrl || !forgeKey) {
    return new NextResponse("Storage proxy not configured", { status: 500 });
  }

  try {
    const forgeUrl = new URL("v1/storage/presign/get", `${forgeBaseUrl}/`);
    forgeUrl.searchParams.set("path", key);

    const forgeResp = await fetch(forgeUrl, {
      headers: { Authorization: `Bearer ${forgeKey}` },
    });

    if (!forgeResp.ok) {
      return new NextResponse("Storage backend error", { status: 502 });
    }

    const { url } = (await forgeResp.json()) as { url?: string };
    if (!url) {
      return new NextResponse("Empty signed URL", { status: 502 });
    }

    return NextResponse.redirect(url, { status: 307 });
  } catch {
    return new NextResponse("Storage proxy error", { status: 502 });
  }
}
