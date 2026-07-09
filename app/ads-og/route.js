import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const contentType = "image/png";

const ICON = "https://cdn.calibrestudio.co/Branding/CALIBRE-ICON-BLK.png";
const WORDMARK = "https://cdn.calibrestudio.co/Branding/Calibre_Studio-logo.png";
// Same typefaces this repo already uses for its own OG cards.
const REGULAR = "https://raw.githubusercontent.com/Calibre-Studio/getfound-site/main/app/og-regular.ttf";
const BOLD = "https://raw.githubusercontent.com/Calibre-Studio/getfound-site/main/app/og-bold.ttf";

export async function GET(request) {
  // Add ?square to render a 1200x1200 version for the ChatGPT ad card.
  const square = new URL(request.url).searchParams.get("square") != null;

  const [regular, bold] = await Promise.all([
    fetch(REGULAR).then((r) => r.arrayBuffer()),
    fetch(BOLD).then((r) => r.arrayBuffer()),
  ]);

  const landscape = (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        position: "relative",
        fontFamily: "Sans",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 8, backgroundColor: "#000000" }} />

      <div style={{ display: "flex", alignItems: "center", marginTop: 100, marginLeft: 80 }}>
        <img src={ICON} width={26} height={26} style={{ width: 26, height: 26, objectFit: "contain" }} />
        <div style={{ display: "flex", marginLeft: 24, fontSize: 28, letterSpacing: 18, color: "#6e6e6e", fontWeight: 400 }}>
          CHATGPT ADS
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", marginTop: 48, marginLeft: 80, fontSize: 96, fontWeight: 700, color: "#000000", lineHeight: 1.05, letterSpacing: -3 }}>
        <div style={{ display: "flex" }}>Be the answer</div>
        <div style={{ display: "flex" }}>inside ChatGPT.</div>
      </div>

      <div style={{ position: "absolute", left: 80, bottom: 58, width: 1040, display: "flex", flexDirection: "column" }}>
        <div style={{ width: "100%", height: 1, backgroundColor: "rgba(0,0,0,0.14)" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 30 }}>
          <div style={{ display: "flex", fontSize: 25, color: "#000000" }}>ads.calibrestudio.co</div>
          <img
            src={WORDMARK}
            width={320}
            height={40}
            style={{ width: 320, height: 40, objectFit: "contain", objectPosition: "right center" }}
          />
        </div>
      </div>
    </div>
  );

  const squareCard = (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        position: "relative",
        fontFamily: "Sans",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 8, backgroundColor: "#000000" }} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: 90, marginRight: 90 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={ICON} width={30} height={30} style={{ width: 30, height: 30, objectFit: "contain" }} />
          <div style={{ display: "flex", marginLeft: 26, fontSize: 30, letterSpacing: 18, color: "#6e6e6e", fontWeight: 400 }}>
            CHATGPT ADS
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: 44, fontSize: 120, fontWeight: 700, color: "#000000", lineHeight: 1.04, letterSpacing: -3 }}>
          <div style={{ display: "flex" }}>Be the answer</div>
          <div style={{ display: "flex" }}>inside ChatGPT.</div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", marginLeft: 90, marginRight: 90, marginBottom: 84 }}>
        <div style={{ width: "100%", height: 1, backgroundColor: "rgba(0,0,0,0.14)" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 32 }}>
          <div style={{ display: "flex", fontSize: 27, color: "#000000" }}>ads.calibrestudio.co</div>
          <img
            src={WORDMARK}
            width={330}
            height={42}
            style={{ width: 330, height: 42, objectFit: "contain", objectPosition: "right center" }}
          />
        </div>
      </div>
    </div>
  );

  return new ImageResponse(square ? squareCard : landscape, {
    width: 1200,
    height: square ? 1200 : 630,
    headers: { "Access-Control-Allow-Origin": "*" },
    fonts: [
      { name: "Sans", data: regular, weight: 400, style: "normal" },
      { name: "Sans", data: bold, weight: 700, style: "normal" },
    ],
  });
}
