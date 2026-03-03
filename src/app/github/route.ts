import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.github.com/users/rajat-wyrm/repos?sort=updated",
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        next: { revalidate: 3600 }, // Cache 1 hour
      }
    );

    const data = await res.json();

    const filtered = data
      .filter((repo: any) => !repo.fork)
      .slice(0, 4)
      .map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        url: repo.html_url,
      }));

    return NextResponse.json(filtered);
  } catch {
    return NextResponse.json([]);
  }
}