import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Habit = ({ habit, onEdit, onDelete, onArchive }) => {
  const handleEdit = () => {
    onEdit(habit);
    
  };

  const handleDelete = () => {
    onDelete(habit);
  };

  const handleArchive = () => {
    onArchive(habit);
  };

  return (
    <div>
      <h2>{habit.name}</h2>
      <Card>
        <Card.Body>
          <Card.Title>Goal: {habit.goal}</Card.Title>
          <Card.Text>
            Times: {habit.times}<br />
            Start Date: {habit.startDate}<br />
            End Date: {habit.endDate}
          </Card.Text>
          <Button variant="primary" onClick={handleEdit}>Edit</Button>{' '}
          <Button variant="danger" onClick={handleDelete}>Delete</Button>{' '}
          <Button variant="secondary" onClick={handleArchive}>Archive</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Habit;
