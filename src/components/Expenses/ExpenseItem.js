import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

//   const [newTitle, setNewTitle] = useState('');
//   const [title, setTitle] = useState(props.title);

//   const clickhandler = () => {
//     setTitle(newTitle);
//   }
// const changeHandler = (event) => {
//   setNewTitle(event.target.value);
// }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <input type="text" value={newTitle} onChange={changeHandler} />
      <button onClick={clickhandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;