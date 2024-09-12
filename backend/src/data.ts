import bcrypt from 'bcryptjs'
import { User } from './models/userModel'
import { Product } from './models/productModel'

export const sampleProducts: Product[] = [
  {
    name: 'Royal Canin Puppy Dry Food 2-12 Months',
    slug: 'royal-canin-puppy-dog-dry-food',
    image: '../images/royal_canin_puppy.jpg',
    category: 'Dry Dog Food',
    brand: 'Royal Canin',
    price: 79.99,
    countInStock: 20,
    description: 'For canine 2 months to 1 year old.',
    rating: 5.0,
    numberReviews: 45,
  },

  {
    name: 'Royal Canin Junior Dry Food 8 to 18-24 Months',
    slug: 'royal-canin-junior-dog-dry-food',
    image: '../images/royal_canin_junior.jpg',
    category: 'Dry Dog Food',
    brand: 'Royal Canin',
    price: 103.99,
    countInStock: 20,
    description: 'For canine 8 to 18-24 months.',
    rating: 4.7,
    numberReviews: 50,
  },

  {
    name: 'Royal Canin Giant Dry Food',
    slug: 'royal-canin-giant-dog-dry-food',
    image: '../images/royal_canin_giant.jpg',
    category: 'Dry Dog Food',
    brand: 'Royal Canin',
    price: 119.99,
    countInStock: 20,
    description: 'For canine above 2 years old.',
    rating: 4.8,
    numberReviews: 40,
  },

  {
    name: 'Purina Puppy Dry Food 6.5 KG',
    slug: 'purina-puppy-dog-dry-food',
    image: '../images/purina_puppy.jpg',
    category: 'Dry Dog Food',
    brand: 'Purina',
    price: 22.99,
    countInStock: 20,
    description: 'For canine 2 months to 1 year old.',
    rating: 5.0,
    numberReviews: 45,
  },

  {
    name: 'Purina Pro Plan Sport All Ages Dry Food 33 LB',
    slug: 'purina-pro-plan-sport-all-ages-dog-dry-food',
    image: '../images/purina_pro_plan_sport_all_ages.jpg',
    category: 'Dry Dog Food',
    brand: 'Purina Pro Plan',
    price: 102.99,
    countInStock: 20,
    description: 'For all ages - high energy.',
    rating: 4.7,
    numberReviews: 50,
  },

  {
    name: 'Purina Pro Plan Weight Management Dry Food 34 LB',
    slug: 'purina-pro-plan-weight-management-dog-dry-food',
    image: '../images/purina-pro-plan-weight-management.jpg',
    category: 'Dry Dog Food',
    brand: 'Purina Pro Plan',
    price: 102.99,
    countInStock: 20,
    description: 'For adult - weight management.',
    rating: 4.6,
    numberReviews: 40,
  },

  {
    name: 'Royal Canin Small Breed Adult Dog Wet Food 3 OZ',
    slug: 'royal-canin-small-breed-adult-dog-wet-food',
    image: '../images/royal_canin_small_wet_food.jpg',
    category: 'Wet Dog Food',
    brand: 'Royal Canin',
    price: 2.99,
    countInStock: 60,
    description: 'For small dog - wet food.',
    rating: 4.5,
    numberReviews: 30,
  },

  {
    name: 'Purina Pro Plan Specialized Sensitive Skin and Stomach Adult Wet Food 13 OZ',
    slug: 'purina-pro-plan-sensitive-dog-wet-food',
    image: '../images/purina-pro-plan-sensitive.jpg',
    category: 'Wet Dog Food',
    brand: 'Purina Pro Plan',
    price: 3.99,
    countInStock: 50,
    description: 'For adult - sensitive skin and stomach.',
    rating: 4.6,
    numberReviews: 38,
  },

  {
    name: 'Royal Canin Kitten Dry Food',
    slug: 'royal-canin-kitten-dry-food',
    image: '../images/royal_canin_kitten.jpg',
    category: 'Dry Cat Food',
    brand: 'Royal Canin',
    price: 32.99,
    countInStock: 30,
    description: 'For feline 4 months to 1 year old.',
    rating: 4.8,
    numberReviews: 48,
  },

  {
    name: 'Purina Pro Plan Kitten Dry Food 3.5 LB',
    slug: 'purina-pro-plan-kitten-dry-food',
    image: '../images/purina-pro-plan-kitten.jpg',
    category: 'Dry Cat Food',
    brand: 'Purina Pro Plan',
    price: 28.99,
    countInStock: 35,
    description: 'For feline 2 months to 1 year old.',
    rating: 4.6,
    numberReviews: 57,
  },

  {
    name: 'Purina One Cat Dry Food 6.53 KG',
    slug: 'purina-one-adult-cat-dry-food',
    image: '../images/purina-one-adult-cat.jpg',
    category: 'Dry Cat Food',
    brand: 'Purina One',
    price: 45.99,
    countInStock: 40,
    description: 'Feed the instinct of your cat to choose protein-rich food.',
    rating: 4.8,
    numberReviews: 40,
  },

  {
    name: 'Purina Pro Plan Complete Essentials Cat Dry Food 3.5 LB',
    slug: 'purina-pro-plan-complete-essentials-cat-dry-food',
    image: '../images/purina-pro-plan-complete-essentials.jpg',
    category: 'Dry Cat Food',
    brand: 'Purina Pro Plan',
    price: 31.99,
    countInStock: 35,
    description:
      'Our formula is made with high-quality protein, including chicken as the first ingredient, and contains guaranteed live probiotics to support digestive and immune health.',
    rating: 5.0,
    numberReviews: 45,
  },

  {
    name: 'Purina Pro Plan Focus Indoor Adult Dry Cat Food 3.5 LB',
    slug: 'purina-pro-plan-focus-indoor-cat-dry-food',
    image: '../images/purina-pro-plan-focus-indoor.jpg',
    category: 'Dry Cat Food',
    brand: 'Purina Pro Plan',
    price: 31.99,
    countInStock: 33,
    description:
      'For special nutritional needs for your indoor cat and help control hairballs.',
    rating: 4.7,
    numberReviews: 50,
  },

  {
    name: 'Purina Pro Plan Complete Essentials Adult Cat Wet Food 3 OZ',
    slug: 'purina-pro-plan-complete essentials-cat-wet-food',
    image: '../images/purina-pro-plan-complete essentials.jpg',
    category: 'Wet Cat Food',
    brand: 'Purina Pro Plan',
    price: 2.39,
    countInStock: 70,
    description: 'For antioxidants and high protein',
    rating: 4.6,
    numberReviews: 39,
  },

  {
    name: 'Royal Canin Instinctive Loaf in Sauce Adult Cat Wet Food 3 OZ',
    slug: 'royal-canin-instinctive-adult-cat-wet-food',
    image: '../images/royal-canin-instinctive-adult.jpg',
    category: 'Wet Cat Food',
    brand: 'Royal Canin',
    price: 3.49,
    countInStock: 60,
    description:
      'A great appetite stimulator which guarantees exceptional palatability and long term preference.',
    rating: 4.5,
    numberReviews: 49,
  },
]

export const sampleUsers: User[] = [
  {
    name: 'Joe',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'John',
    email: 'user@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
]
