import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#07080a",
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <p style={{ color: "#9fb8c7", fontSize: "24px", margin: 0 }}>
          Senior Data Engineer
        </p>
        <h1
          style={{
            color: "#f3f0e8",
            fontSize: "96px",
            fontWeight: 600,
            margin: "16px 0 0",
            lineHeight: 1,
          }}
        >
          Karan Manoharan
        </h1>
        <p style={{ color: "#a8aaa3", fontSize: "28px", marginTop: "24px" }}>
          Snowflake · dbt · Databricks
        </p>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
