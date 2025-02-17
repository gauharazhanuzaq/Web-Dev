export interface Product {
    id: number;
    name: string;
    likes: number;
  }
  
  export interface Category {
    id: number;
    name: string;
    products: Product[];
  }
  