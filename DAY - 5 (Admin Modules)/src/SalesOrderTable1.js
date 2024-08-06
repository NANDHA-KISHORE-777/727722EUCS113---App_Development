// SalesOrderTable1.js
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useCart } from './CartContext';
import './SalesOrderTable.css';

const SalesOrderTable1 = () => {
  const { addToCart } = useCart();
  const [addedToCartState, setAddedToCartState] = useState({});

  const handleAddToCart = (order, index) => {
    addToCart(order);
    console.log('Added to cart:', order);
    
    // Set the state to show "Added to cart" message for the item
    setAddedToCartState((prevState) => ({
      ...prevState,
      [index]: true
    }));

    // Revert back to "Add to Cart" after 2 seconds
    setTimeout(() => {
      setAddedToCartState((prevState) => ({
        ...prevState,
        [index]: false
      }));
    }, 2000);
  };

  const salesOrders = [
    { productName: 'Puma sneaker', productSKU: '5', productPrice: '6000', description: 'For Male' },
    { productName: 'Himalaya', productSKU: '60', productPrice: '150', description: 'Body soap' },
    { productName: 'Jockey vest', productSKU: '17', productPrice: '200', description: 'All size' },
    { productName: 'MI PowerBank', productSKU: '15', productPrice: '2250', description: '20000mah' },
  ];

  return (
    <table className="sales-order-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Product SKU</th>
          <th>Product Price</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {salesOrders.map((order, index) => (
          <tr key={index}>
            <td>{order.productName}</td>
            <td>{order.productSKU}</td>
            <td>{order.productPrice}</td>
            <td>{order.description}</td>
            <td>
              <Button
                variant="contained"
                className="custom-purchase-button"
                onClick={() => handleAddToCart(order, index)}
                disabled={addedToCartState[index]}
              >
                {addedToCartState[index] ? 'Added to cart' : 'Add to Cart'}
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesOrderTable1;
