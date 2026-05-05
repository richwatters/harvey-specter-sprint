import { defineQuery } from 'next-sanity'

export const PORTFOLIO_QUERY = defineQuery(/* groq */ `
  *[_type == "portfolio" && defined(image)]
  | order(order asc, _createdAt asc) [0...4] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    tags,
    image {
      asset->{
        _id,
        url,
        metadata { lqip, dimensions }
      },
      alt,
      hotspot,
      crop
    }
  }
`)

export type PortfolioItem = {
  _id: string
  title: string
  slug: string | null
  excerpt: string | null
  tags: string[] | null
  image: {
    asset: {
      _id: string
      url: string
      metadata: {
        lqip: string | null
        dimensions: { width: number; height: number } | null
      } | null
    } | null
    alt: string | null
    hotspot?: { x: number; y: number; height: number; width: number }
    crop?: { top: number; bottom: number; left: number; right: number }
  }
}
