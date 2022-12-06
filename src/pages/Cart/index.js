import { useState, useEffect } from 'react'
import Card from '../../components/Card';

export default function Cart({ searchTerm}) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      setCart(cart);
    }
  }, [cart]);

  const filteredData = cart.filter((val) => {
    return val.title.toLowerCase().includes(searchTerm.toLowerCase());
  });


  return (
    <>
      <h1>Cart</h1>
      <div className='grid grid-cols-2 gap-2'>
        {filteredData.map(item => (
          <div key={item.id}>
            <Card
              item={item}
            />
          </div>
        ))}
      </div>
    </>
  )
}
