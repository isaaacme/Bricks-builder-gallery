import fs from 'fs/promises';
import path from 'path';

const root = path.resolve(process.cwd(), 'src', 'data');
const sitesPath = path.join(root, 'sites.json');
const submissionsPath = path.join(root, 'submissions.json');
const postsPath = path.join(root, 'posts.json');

type SiteRecord = {
  slug: string;
  name: string;
  url: string;
  creator: string;
  description?: string;
  tags?: string[];
  thumbnail?: string;
};

type PostRecord = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
};

export async function readSites(): Promise<SiteRecord[]> {
  const base = JSON.parse(await fs.readFile(sitesPath, 'utf-8')) as SiteRecord[];
  let submissions: SiteRecord[] = [];
  try {
    submissions = JSON.parse(await fs.readFile(submissionsPath, 'utf-8')) as SiteRecord[];
  } catch {
    submissions = [];
  }
  return [...base, ...submissions];
}

export async function appendSubmission(site: SiteRecord): Promise<SiteRecord> {
  const next = { ...site, slug: site.slug || site.name.toLowerCase().replace(/\s+/g, '-') };
  let existing: SiteRecord[] = [];
  try {
    existing = JSON.parse(await fs.readFile(submissionsPath, 'utf-8')) as SiteRecord[];
  } catch {
    existing = [];
  }
  existing.push(next);
  await fs.writeFile(submissionsPath, JSON.stringify(existing, null, 2), 'utf-8');
  return next;
}

export async function readPosts(): Promise<PostRecord[]> {
  return JSON.parse(await fs.readFile(postsPath, 'utf-8')) as PostRecord[];
}

export type { SiteRecord, PostRecord };
