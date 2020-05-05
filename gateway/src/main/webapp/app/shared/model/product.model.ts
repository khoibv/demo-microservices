export interface IProduct {
  id?: any;
  name?: string;
  price?: number;
}

export const defaultValue: Readonly<IProduct> = {
  id: '',
  name: '',
  price: 0
};
