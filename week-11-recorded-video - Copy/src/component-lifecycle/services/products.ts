import Item from '../models/Item';

const products = {
    1: [
        { id: 1, name: 'iPhone 12' },
        { id: 2, name: 'iPad Pro' },
        { id: 3, name: 'MacBook Air' }
    ],
    2: [
        { id: 4, name: 'iPhone X' },
        { id: 5, name: 'Apple Watch' },
        { id: 6, name: 'MacBook Pro' }
    ]
};

const fetchProductsOfPage = ( page : number ) => {
    if( page === 1 || page === 2 ) {
        return new Promise<Item[]>( ( resolve, reject ) => {
            setTimeout(() => {
                resolve( products[page] );
            }, 2000);
        });
    } else {
        return new Promise<Item[]>( ( resolve, reject ) => {
            setTimeout(() => {
                reject( new Error( 'No products' ) );
            }, 2000);
        });
    }
}

export {
    fetchProductsOfPage
};