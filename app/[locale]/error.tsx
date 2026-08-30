"use client";

import { Link } from "@/lib/i18n/navigation";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <h1 style={{ fontSize: "4rem", color: "#CF9050", marginBottom: "0" }}>Oops</h1>
      <h2 style={{ color: "#333", marginBottom: "16px" }}>Something went wrong</h2>
      <p style={{ color: "#666", marginBottom: "32px", maxWidth: "400px" }}>
        An unexpected error occurred. Please try again or return to the homepage.
      </p>
      <div style={{ display: "flex", gap: "16px" }}>
        <button
          onClick={() => reset()}
          style={{
            background: "#CF9050",
            color: "#fff",
            padding: "12px 32px",
            borderRadius: "8px",
            fontSize: "1rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          Try Again
        </button>
        <Link
          href="/"
          style={{
            background: "transparent",
            color: "#CF9050",
            padding: "12px 32px",
            borderRadius: "8px",
            fontSize: "1rem",
            border: "2px solid #CF9050",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
      </div>
    </div>
  );
}
