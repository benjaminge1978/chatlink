export type BuildInfo = {
  env: string
  deployedAt: string
  commit: string | null
}

export function getBuildInfo(now: Date = new Date()): BuildInfo {
  const env = process.env.NODE_ENV || 'development'
  const deployedAt = process.env.BUILD_DEPLOYED_AT || now.toISOString()
  const commit =
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.GITHUB_SHA ||
    process.env.COMMIT_SHA ||
    null

  return { env, deployedAt, commit }
}

