import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const dbPath = path.join(process.cwd(), "db.json");
    const data = JSON.parse(fs.readFileSync(dbPath, "utf8"));

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error reading database:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { benefitId } = await request.json();

    const dbPath = path.join(process.cwd(), "db.json");
    const data = JSON.parse(fs.readFileSync(dbPath, "utf8"));

    const benefit = data.benefits.find((b: any) => b.id === benefitId);
    if (benefit && benefit.status === "available") {
      benefit.status = "claimed";
      data.user.totalPoints += 100;
      data.user.currentXP += 50;

      fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

      return NextResponse.json(data);
    }

    return NextResponse.json(
      { error: "Benefit not found or already claimed" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Error updating database:", error);
    return NextResponse.json(
      { error: "Failed to update data" },
      { status: 500 }
    );
  }
}
