import React from 'react';
import './Cut.css'

const Cut = (props) => {
    const { cut } = props;
    let total = 0;
    for (const list of cut) {

        total = total + list.salary;
    }
    return (
        <div>
            <h2>summary Score</h2>
            <h5>
                List: {props.cut.length}
            </h5>
            <br />
            <p>Total Salary: {total}</p>
        </div>
    );
};

export default Cut;