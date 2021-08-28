// import React, { useState } from 'react';
// import Card from '../UI/Card';
// import ExpenseDate from './ExpenseDate';

//  import './ExpenseItem.css'
 
//  function ExpenseItem(props){ 
//     const [title,setTitle] = useState('');
//     setTitle(props.title);
//   return (
//     <Card className="expense-item"> 
//     <ExpenseDate date={props.date}/>
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//     </Card> 
//   ); 
// }
// export default ExpenseItem;
import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
