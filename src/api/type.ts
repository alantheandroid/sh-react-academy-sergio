export type AdDto = {
  id: string
  title: string
  description: string
  authorId: string
  categoryIds: string[]
  price: Price
  images: string[]
  premium: boolean
  hidden: boolean
  countryId: string
  created_at: string
  updated_at: string
}

export type CategoryDto = {
  title: string
  id: string
  created_at: number
  updated_at: number
}

type Price = {
  value: number
  currency: string
}