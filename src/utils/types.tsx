/* eslint-disable @typescript-eslint/no-explicit-any */
// export interface AppRoute {
//   path: string;
//   element: React.ReactNode;
//   children: Array
// }

export interface AppRoute {
  path: string;
  element: React.ReactNode;
  children?: Array<IndexRoute | PathRoute>; // Union type of IndexRoute and PathRoute
}


interface IndexRoute {
  index: boolean;
  element: React.ReactNode;
}

interface PathRoute {
  path: string;
  element: React.ReactNode;
}

export interface TextInputProps {
  label: string;
  placeholder: string;
  type: any;
}

export type CartItemProps = {
  id: string;
  img: string;
  company: string;
  product: string;
  quantity: number;
  price: number;
};

export interface cartIinitialState {
  cartItems: {
    id: string;
    img: string;
    company: string;
    product: string;
    quantity: number;
    price: number;
  }[];
  amount: number;
  subtotal: number;
  isLoading: boolean;
}

export interface modalInitialState {
  isOpen : boolean
}