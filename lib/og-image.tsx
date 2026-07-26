import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

let cachedBg: string | null = null;
let cachedLogo: string | null = null;

async function getBase64(filePath: string): Promise<string> {
  const buffer = await readFile(join(process.cwd(), "public", filePath));
  const ext = filePath.endsWith(".png") ? "png" : "jpeg";
  return `data:image/${ext};base64,${buffer.toString("base64")}`;
}

async function getBg() {
  if (!cachedBg) cachedBg = await getBase64("/og-image.jpg");
  return cachedBg;
}

async function getLogo() {
  if (!cachedLogo) cachedLogo = await getBase64("/img/logo.png");
  return cachedLogo;
}

export async function generateOgImage(title: string, subtitle?: string) {
  const [bg, logo] = await Promise.all([getBg(), getLogo()]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
        }}
      >
        {/* Background image */}
        <img
          src={bg}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.65) 100%)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "48px 60px",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img src={logo} style={{ width: "64px", height: "64px" }} />
            <span
              style={{
                color: "#fff",
                fontSize: "28px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Bedouin Trails
            </span>
          </div>

          {/* Title + Subtitle */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "900px" }}>
            <div
              style={{
                color: "#fff",
                fontSize: title.length > 40 ? "44px" : "52px",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                textShadow: "0 2px 12px rgba(0,0,0,0.5)",
              }}
            >
              {title}
            </div>
            {subtitle && (
              <div
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "22px",
                  fontWeight: 400,
                  lineHeight: 1.4,
                  textShadow: "0 1px 8px rgba(0,0,0,0.4)",
                }}
              >
                {subtitle}
              </div>
            )}
          </div>

          {/* Footer bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "18px" }}>
              bedouintrails.com
            </span>
            <span
              style={{
                color: "#fff",
                fontSize: "16px",
                background: "rgba(233,75,23,0.9)",
                padding: "8px 20px",
                borderRadius: "100px",
                fontWeight: 600,
              }}
            >
              Desert Safari Tours
            </span>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
