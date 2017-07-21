import { InMemoryDbService, InMemoryBackendConfig } from 'angular-in-memory-web-api';

import { IProduct } from './product';

export class ProductData implements InMemoryDbService, InMemoryBackendConfig {
    createDb() {
        let products: IProduct[] = [
            {
                'id': 1,
                'productName': 'Mongo Hoodie',
                'productCode': 'MGA-0011',
                'releaseDate': 'March 19, 2016',
                'description': 'Gray Hooded Sweatshirt',
                'price': 29.99,
                'starRating': 3.2,
                'imageUrl': './app/assets/images/products/hoodie.jpg',
                'category': 'Apparel',
                'tags': ['hoodie', 'leaf', 'clothing']
            },
            {
                'id': 2,
                'productName': 'Coffee Mug',
                'productCode': 'MGK-0023',
                'releaseDate': 'March 18, 2016',
                'description': 'Keep your coffee hot!',
                'price': 12.5,
                'starRating': 4.2,
                'imageUrl': './app/assets/images/products/mug.jpg',
                'category': 'Kitchen'
            },
            {
                'id': 7,
                'productName': 'Stress Ball',
                'productCode': 'MGS-0048',
                'releaseDate': 'May 21, 2016',
                'description': 'Squeeze your stress away',
                'price': 8.9,
                'starRating': 4.8,
                'imageUrl': './app/assets/images/products/stress-ball.jpg',
                'category': 'Swag',
                'tags': ['tools', 'swag', 'stress management']
            },
            {
                'id': 8,
                'productName': 'Track Jacket',
                'productCode': 'TBX-0022',
                'releaseDate': 'May 15, 2016',
                'description': 'Go to the track in style!',
                'price': 55.55,
                'starRating': 4.7,
                'imageUrl': './app/assets/images/products/track-jacket.jpg',
                'category': 'Apparel',
            },
            {
                'id': 10,
                'productName': 'MongoDB The Definitive Guide',
                'productCode': 'MGB-0042',
                'releaseDate': 'October 15, 2015',
                'description': 'MongoDB The Definitive Guide',
                'price': 35.95,
                'starRating': 4.6,
                'imageUrl': './app/assets/images/products/guide-book.jpg',
                'category': 'Book',
            }
        ];
        return { products };
    }
}
