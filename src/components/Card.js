import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Card({ item }) {
    const [cart, setCart] = useState([]);
    const [added, setAdded] = useState([]);

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

    return (
        <div className="py-6">
            <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-1/3 bg-cover" style={{ backgroundImage: `url(${item.image})` }}>
                </div>
                <div className="w-2/3 p-4">
                    <Link to={`/products/${item.id}`}>
                        <h1 className="text-gray-900 font-bold text-2xl">{item.title}</h1>
                    </Link>
                    <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
                    <div className="flex item-center mt-2">
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                    </div>
                    <div className="flex item-center justify-between mt-3">
                        <h1 className="text-gray-700 font-bold text-xl">${item.price}</h1>
                        {
                            added.includes(item.id)
                                ?
                                <button
                                    className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-xs font-bold uppercase rounded"
                                    onClick={() => removeFromCart(item)}
                                >
                                    Remove to Card
                                </button>
                                :
                                <button
                                    className="px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase rounded"
                                    onClick={() => addToCart(item)}
                                >
                                    Add to Cart
                                </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
