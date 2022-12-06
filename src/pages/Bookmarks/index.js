import { useState, useEffect } from 'react'
import Card from '../../components/Card';

export default function Bookmarks({ searchTerm }) {
    const [bookmark, setBookmark] = useState([]);

    useEffect(() => {
        const bookmark = JSON.parse(localStorage.getItem('bookmark'));
        if (bookmark) {
            setBookmark(bookmark);
        }
    }, [bookmark]);

    
  const filteredData = bookmark.filter((val) => {
    return val.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

    return (

        <>
            <h1>Bookmarks</h1>
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
