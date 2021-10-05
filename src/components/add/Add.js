import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Cut from '../Cut/Cut';
import List from '../list/List';
import './Add.css'

const Add = () => {
    const [lists, setlists] = useState([]);

    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./lists.JSON')
            .then(res => res.json())
            .then(data => setlists(data))
    }, [])

    const handleAddToCart = (list) => {
        const newCart = [...cart, list];
        setCart(newCart);
    }
    return (
        <div className='add'>
            <div className='friend-name'>

                {
                    lists.map(list => <List
                        handleAddToCart={handleAddToCart}
                        list={list}></List>)

                }
            </div>
            <div className='name'>
                <Cut cut={cart}></Cut>
            </div>
        </div>
    );
};

export default Add;