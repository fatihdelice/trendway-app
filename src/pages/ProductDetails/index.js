import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import data from '../../api/data.json';



export default function ProductDetails() {
  const { id } = useParams();
  const item = data.find(item => item.id === id);

  const [cart, setCart] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [added, setAdded] = useState([]);
  const [marked, setMarked] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const added = JSON.parse(localStorage.getItem('added'));

    if (cart) {
      setCart(cart);
    }

    if (added) {
      setAdded(added);
    }

  }, [cart, added]);

  useEffect(() => {
    const bookmark = JSON.parse(localStorage.getItem('bookmark'));
    const marked = JSON.parse(localStorage.getItem('marked'));

    if (bookmark) {
      setBookmark(bookmark);
    }
    if (marked) {
      setMarked(marked);
    }

  }, [bookmark, marked]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setAdded([...added, item.id]);

    localStorage.setItem('cart', JSON.stringify([...cart, item]));
    localStorage.setItem('added', JSON.stringify([...added, item.id]));
  }

  const removeFromCart = (item) => {
    const newCart = cart.filter(i => i.id !== item.id);
    setCart(newCart);
    const newAdded = added.filter(i => i !== item.id);
    setAdded(newAdded);

    localStorage.setItem('cart', JSON.stringify(newCart));
    localStorage.setItem('added', JSON.stringify(newAdded));
  }

  const addToBookmark = (item) => {
    setBookmark([...bookmark, item]);
    setMarked([...marked, item.id]);

    localStorage.setItem('bookmark', JSON.stringify([...bookmark, item]));
    localStorage.setItem('marked', JSON.stringify([...marked, item.id]));
  }

  const removeFromBookmark = (item) => {
    const newBookmark = bookmark.filter(i => i.id !== item.id);
    setBookmark(newBookmark);
    const newMarked = marked.filter(i => i !== item.id);
    setMarked(newMarked);

    localStorage.setItem('bookmark', JSON.stringify(newBookmark));
    localStorage.setItem('marked', JSON.stringify(newMarked));
  }


  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container py-12 mx-auto">
        <div className="mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={item.image} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{item.title}</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">{item.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">${item.price}</span>

              {
                added.includes(item.id)
                  ?
                  <button
                    className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 uppercase rounded"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove to Card
                  </button>
                  :
                  <button
                    className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 uppercase rounded"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
              }

              {
                marked.includes(item.id)
                  ?
                  <button
                    className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                    onClick={() => removeFromBookmark(item)}
                  >
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 text-orange-500" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                  :
                  <button
                    className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                    onClick={() => addToBookmark(item)}
                  >
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
