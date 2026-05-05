import { client } from '@/sanity/client'
import { PORTFOLIO_QUERY, type PortfolioItem } from '@/sanity/queries'
import HomeClient from './home-client'

export const revalidate = 60

export default async function Page() {
  const portfolioItems = await client.fetch<PortfolioItem[]>(PORTFOLIO_QUERY)
  return <HomeClient portfolioItems={portfolioItems ?? []} />
}
