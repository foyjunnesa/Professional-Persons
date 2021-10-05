import React from 'react';
import './List.css'

const List = (props) => {
    // console.log(props)
    const { name, img, work, age, salary } = props.list
    return (
        <div className='bio'>

            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <h5>Work: {work}</h5>
            <h5> Age: {age}</h5>
            <h5>Salary: {salary}</h5>
            <button
                onClick={() => props.handleAddToCart(props.list)}
                className='purchas-btn'>Add to cart</button>
        </div>

    );
};

export default List;