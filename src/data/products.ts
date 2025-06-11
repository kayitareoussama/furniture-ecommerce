export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  images: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'chairs',
    name: 'Chairs',
    image: '/images/categories/chairs.jpg',
    description: 'Comfortable and stylish seating solutions'
  },
  {
    id: 'tables',
    name: 'Tables',
    image: '/images/categories/tables.jpg',
    description: 'Dining, coffee, and work tables'
  },
  {
    id: 'sofas',
    name: 'Sofas',
    image: '/images/categories/sofas.jpg',
    description: 'Luxurious sofas and sectionals'
  },
  {
    id: 'storage',
    name: 'Storage',
    image: '/images/categories/storage.jpg',
    description: 'Cabinets, shelves, and storage solutions'
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Modern Ergonomic Office Chair',
    price: 299,
    category: 'chairs',
    image: '/images/products/chair-1.jpg',
    description: 'A sleek and comfortable office chair with lumbar support and adjustable height. Perfect for long work sessions.',
    images: [
      '/images/products/chair-1.jpg',
      '/images/products/chair-1-alt1.jpg',
      '/images/products/chair-1-alt2.jpg'
    ]
  },
  {
    id: 2,
    name: 'Scandinavian Dining Chair',
    price: 149,
    category: 'chairs',
    image: '/images/products/chair-2.jpg',
    description: 'Minimalist wooden dining chair with clean lines and comfortable cushioning.',
    images: [
      '/images/products/chair-2.jpg',
      '/images/products/chair-2-alt1.jpg'
    ]
  },
  {
    id: 3,
    name: 'Industrial Coffee Table',
    price: 399,
    category: 'tables',
    image: '/images/products/table-1.jpg',
    description: 'Rustic coffee table with metal frame and reclaimed wood top.',
    images: [
      '/images/products/table-1.jpg',
      '/images/products/table-1-alt1.jpg'
    ]
  },
  {
    id: 4,
    name: 'Glass Dining Table',
    price: 799,
    category: 'tables',
    image: '/images/products/table-2.jpg',
    description: 'Elegant glass dining table with chrome legs, seats up to 6 people.',
    images: [
      '/images/products/table-2.jpg',
      '/images/products/table-2-alt1.jpg'
    ]
  },
  {
    id: 5,
    name: 'Luxury Sectional Sofa',
    price: 1299,
    category: 'sofas',
    image: '/images/products/sofa-1.jpg',
    description: 'Spacious L-shaped sectional sofa in premium fabric with deep cushions.',
    images: [
      '/images/products/sofa-1.jpg',
      '/images/products/sofa-1-alt1.jpg',
      '/images/products/sofa-1-alt2.jpg'
    ]
  },
  {
    id: 6,
    name: 'Mid-Century Modern Sofa',
    price: 899,
    category: 'sofas',
    image: '/images/products/sofa-2.jpg',
    description: 'Classic mid-century design with tufted back and wooden legs.',
    images: [
      '/images/products/sofa-2.jpg',
      '/images/products/sofa-2-alt1.jpg'
    ]
  },
  {
    id: 7,
    name: 'Floating Shelf Unit',
    price: 199,
    category: 'storage',
    image: '/images/products/storage-1.jpg',
    description: 'Modern floating shelf system with multiple compartments.',
    images: [
      '/images/products/storage-1.jpg',
      '/images/products/storage-1-alt1.jpg'
    ]
  },
  {
    id: 8,
    name: 'Vintage Storage Cabinet',
    price: 549,
    category: 'storage',
    image: '/images/products/storage-2.jpg',
    description: 'Vintage-style storage cabinet with brass handles and multiple drawers.',
    images: [
      '/images/products/storage-2.jpg',
      '/images/products/storage-2-alt1.jpg'
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Amazing quality furniture! The delivery was fast and the customer service was excellent.',
    image: '/images/testimonials/customer-1.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    comment: 'Love my new dining set. The craftsmanship is outstanding and it looks perfect in my home.',
    image: '/images/testimonials/customer-2.jpg'
  },
  {
    id: 3,
    name: 'Emily Davis',
    rating: 4,
    comment: 'Great selection and competitive prices. Will definitely shop here again!',
    image: '/images/testimonials/customer-3.jpg'
  }
];

