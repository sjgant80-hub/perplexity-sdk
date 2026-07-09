/**
 * perplexity-sdk · sovereign wrapper for Perplexity
 * AI/Search
 *
 * Auto-generated from target docs · 2026-07-09
 * generic HTTP client
 *
 * Docs (upstream): https://docs.perplexity.ai/
 * Homepage: https://perplexity.ai
 */

export class Perplexity {
  constructor({ apiKey, baseURL = 'https://perplexity.ai', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      'Authorization': apiKey ? 'Bearer ' + apiKey : '',
      
      ...headers
    };
  }

  /** Not yet implemented — this API's OpenAPI spec was not machine-parseable. Use fetch() directly against https://docs.perplexity.ai/. */
  async request(path, opts = {}) {
    const res = await fetch(this.baseURL + path, { ...opts, headers: { ...this.headers, ...opts.headers } });
    if (!res.ok) throw new Error('perplexity ' + res.status);
    return res.json();
  }
}

export default Perplexity;

// Metadata
export const meta = {
  "name": "Perplexity",
  "category": "AI/Search",
  "homepage": "https://perplexity.ai",
  "docs_url": "https://docs.perplexity.ai/",
  "endpoints_count": 0
};
