import { useState, useEffect } from 'react';
import { ALL_PRODUCTS } from '../data/products.ts';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts(ALL_PRODUCTS);
    setLoading(false);
  }, []);

  return { products, loading };
}
