import React from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom'


const ExpenseListItem = ({ id, description, amount, createdAt}) => (

  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">Description: {description}</h3>
      <span className="list-item__sub-title">{moment(createdAt).format('MMM Do, YYYY')}</span>
    </div>
      <h3 className="list-item__data">${amount / 100}</h3>
  </Link>

)

export default ExpenseListItem
