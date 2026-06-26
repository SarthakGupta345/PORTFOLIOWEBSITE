"use server";

import { siteConfig } from "@/config/site";

export async function getGitHubStatsServerAction() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${siteConfig.links.githubUsername}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        cache: "force-cache",
        next: { revalidate: 60 * 60 * 24 }, // Cache for 24 hours
      }
    );
    const data = await response.json();
    return {
      name: data.name,
      bio: data.bio,
      avatar_url: data.avatar_url,
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to get GitHub stats",
    };
  }
}
