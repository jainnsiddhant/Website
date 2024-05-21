import React from 'react';

const ViewListings = () => {
  // Dummy data for demonstration
  const listings = [
    {
      name: "Product A",
      image: "image_url",
      price: "$50",
      sold: true,
      soldTo: "John Doe",
      paymentDateTime: "2024-05-10 14:30",
      description: "Description of Product A"
    },
    {
      name: "Product B",
      image: "image_url",
      price: "$30",
      sold: false,
      soldTo: "",
      paymentDateTime: "",
      description: "Description of Product B"
    }
    // Add more listings as needed
  ];

  return (
    <div className="flex flex-col flex-1 p-4 h-full overflow-auto">
      <h1 className="text-2xl font-bold p-4">VIEW YOUR LISTINGS</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name of the product</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image of the product</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sold or not</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sold to whom</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date and time of payment received</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {listings.map((listing, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{listing.name}</td>
                <td className="px-6 py-4 whitespace-nowrap"><img src={listing.image} alt={listing.name} className="h-10 w-10 rounded-full" /></td>
                <td className="px-6 py-4 whitespace-nowrap">{listing.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">{listing.sold ? "Sold" : "Not Sold"}</td>
                <td className="px-6 py-4 whitespace-nowrap">{listing.soldTo}</td>
                <td className="px-6 py-4 whitespace-nowrap">{listing.paymentDateTime}</td>
                <td className="px-6 py-4 whitespace-nowrap">{listing.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewListings;
