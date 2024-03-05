export class ProductService {
    static async getProductsMini() {
        // Simulated asynchronous data fetching (replace with your actual data fetching logic)
        return new Promise(resolve => {
            setTimeout(() => {
                const data = [
                    { code: 'P101', name: 'Product 1', category: 'Category 1', quantity: 10 },
                    { code: 'P102', name: 'Product 2', category: 'Category 2', quantity: 20 },
                    { code: 'P103', name: 'Product 3', category: 'Category 1', quantity: 15 },
                    { code: 'P104', name: 'Product 4', category: 'Category 3', quantity: 5 },
                ];
                resolve(data);
            }, 1000); // Simulate a delay of 1 second (1000 milliseconds)
        });
    }
}