// CustomerService.js
export const CustomerService = {
    getCustomersMedium() {
        return new Promise((resolve) => {
            const customers = [
                { id: 1000, name: 'James Butt', country: { name: 'USA', code: 'us' }, representative: { name: 'Amy Elsner', image: 'amyelsner.png' }, status: 'unqualified', verified: false },
                { id: 1001, name: 'Josephine Darakjy', country: { name: 'Canada', code: 'ca' }, representative: { name: 'Anna Fali', image: 'annafali.png' }, status: 'qualified', verified: true },
                { id: 1002, name: 'Art Venere', country: { name: 'USA', code: 'us' }, representative: { name: 'Asiya Javayant', image: 'asiyajavayant.png' }, status: 'new', verified: false },
                { id: 1003, name: 'Lenna Paprocki', country: { name: 'USA', code: 'us' }, representative: { name: 'Bernardo Dominic', image: 'bernardodominic.png' }, status: 'negotiation', verified: false },
                { id: 1004, name: 'Donette Foller', country: { name: 'Canada', code: 'ca' }, representative: { name: 'Elwin Sharvill', image: 'elwinsharvill.png' }, status: 'new', verified: true },
                { id: 1005, name: 'Simona Morasca', country: { name: 'Canada', code: 'ca' }, representative: { name: 'Ioni Bowcher', image: 'ionibowcher.png' }, status: 'qualified', verified: true },
                { id: 1006, name: 'Mitsue Tollner', country: { name: 'USA', code: 'us' }, representative: { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' }, status: 'unqualified', verified: true },
                { id: 1007, name: 'Leota Dilliard', country: { name: 'USA', code: 'us' }, representative: { name: 'Onyama Limba', image: 'onyamalimba.png' }, status: 'new', verified: true },
                { id: 1008, name: 'Sage Wieser', country: { name: 'Canada', code: 'ca' }, representative: { name: 'Stephen Shaw', image: 'stephenshaw.png' }, status: 'renewal', verified: false },
                { id: 1009, name: 'Kris Marrier', country: { name: 'France', code: 'fr' }, representative: { name: 'XuXue Feng', image: 'xuxuefeng.png' }, status: 'new', verified: false }
            ];

            resolve(customers);
        });
    }
};
