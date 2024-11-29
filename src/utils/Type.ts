export type DummyData = {
  title: string;
  price: number;
  stock: number;
  productImage: string;
}[];

export type ButtonText = string;

export type Fish = {
  id: string;
  name: string;
  slug: string;
  price: number;
  stock: number;
  image: string;
};

export type ProductUpload = {
  name: string;
  price: number;
  stock: number;
  image?: string;
  description?: string;
};

export type NewArrival = [
  {
    id: string;
    name: string;
    slug: string;
    price: number;
    stock: number;
    image: string;
  }
];

export type BestSeller = [
  {
    id: string;
    name: string;
    slug: string;
    price: number;
    stock: number;
    sold: number;
    image: string;
  }
];

export type CartCard = [
  {
    id: string;
    name: string;
    price: number;
    quantity: number;
    total: number;
    image?: string;
  }
];

export type AuthData = {
  authStatus: boolean;
  customer: {
    username: string;
    email: string;
    id: string;
    cartItem?: number;
  };
};
