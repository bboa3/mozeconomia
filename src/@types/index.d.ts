declare module 'noneconomic' {
  export interface InflationData {
    total: TotalD[]
    products: Product[]
  }
  
  export type Product = {
    name: string
    data: D[]
  }
  
  export interface TotalD extends D {
    mensal: number[]
  }
  
  export type D = {
    year: number
    homologa: number[]
  }
}