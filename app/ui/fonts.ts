import { Inter } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

// Import the Lusitana font from next/font/google
import { Lusitana } from 'next/font/google';

// Configure the Lusitana font with desired weights and subsets
export const lusitana = Lusitana({
  weight: ['400', '700'], // Specify font weights (e.g., regular and bold)
  subsets: ['latin'],     // Specify subsets (e.g., Latin characters)
});