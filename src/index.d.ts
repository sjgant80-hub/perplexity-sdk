/**
 * perplexity-sdk TypeScript declarations
 */
export interface PerplexityOptions {
  apiKey?: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export class Perplexity {
  constructor(options?: PerplexityOptions);
  request(path: string, opts?: RequestInit): Promise<any>;
}

export default Perplexity;

export const meta: {
  name: string;
  category: string;
  homepage: string;
  docs_url: string;
  endpoints_count: number;
};
