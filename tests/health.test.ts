import { GET } from '@/app/api/health/route'

describe('GET /api/health', () => {
  it('returns 200 with required fields', async () => {
    const req = new Request('http://localhost/api/health')
    const res = await GET(req)
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.status).toBe('ok')
    expect(json.build).toBeDefined()
    expect(typeof json.build.env).toBe('string')
    expect(typeof json.build.deployedAt).toBe('string')
    // commit may be null if not provided
    expect('commit' in json.build).toBe(true)
  })
})

