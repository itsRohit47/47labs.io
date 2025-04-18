/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, country } = body;

    const response = await fetch(
      "https://api.airtable.com/v0/appR9oWCkPAhUncPz/tblSGfsdGbLIk2nP9",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Name: name,
                Email: email,
                Country: country,
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to submit to Airtable");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
