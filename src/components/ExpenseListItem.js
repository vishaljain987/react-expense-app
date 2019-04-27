import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import { Card, CardHeader, Button, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';


/*
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{numeral(amount/100).format('$0,0.00')}</p>
    <p>{moment(createdAt).format('MMMM, Do, YYYY')}</p>
*/
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
<Card style={{ width: '600px', padding: '25px'}}>
    <CardHeader>{numeral(amount/100).format('$0,0.00')}</CardHeader>
    <CardBody>
      <CardTitle>{description}</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Link to={`/edit/${id}`}>
        <Button color='primary'>Edit</Button>
      </Link>
    </CardBody>
    <CardFooter>{moment(createdAt).format('MMMM, Do, YYYY')}</CardFooter>
</Card>
  </div>
);

export default ExpenseListItem;