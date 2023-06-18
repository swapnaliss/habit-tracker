import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const HabitList = () => {
    const habits = [
      // Replace this array with your own sample JSON data containing habits
      // Each habit object should have properties like 'name', 'goal', 'times', 'startDate', 'endDate'
        { name: 'Drink 8 glasses of water', goal: 8, times: 0, startDate: '2020-01-01', endDate: '2020-01-31' },
        { name: 'Walk 10,000 steps', goal: 10000, times: 0, startDate: '2020-01-01', endDate: '2020-01-31' },
        { name: 'Get 8 hours of sleep', goal: 8, times: 0, startDate: '2020-01-01', endDate: '2020-01-31' },
        { name: 'Read 30 minutes', goal: 30, times: 0, startDate: '2020-01-01', endDate: '2020-01-31' },
        { name: 'Eat 3 servings of vegetables', goal: 3, times: 0, startDate: '2020-01-01', endDate: '2020-01-31' },
        { name: 'Eat 2 servings of fruit', goal: 2, times: 0, startDate: '2020-01-01', endDate: '2020-01-31' },
        { name: 'Eat 3 servings of whole grains', goal: 3, times: 0, startDate: '2020-01-01', endDate: '2020-01-31' },
        { name: 'Eat 2 servings of dairy', goal: 2, times: 0, startDate: '2020-01-01', endDate: '2020-01-31' },
        { name: 'Eat 2 servings of fish', goal: 2, times: 0, startDate: '2020-01-01', endDate: '2020-01-31' },
        { name: 'Eat 1 serving of nuts', goal: 1, times: 0, startDate: '2020-01-01', endDate: '2020-01-31' },
        { name: 'Eat 1 serving of legumes', goal: 1, times: 0, startDate: '2020-01-01', endDate: '2020-01-31' },

    ];
    
  
    return (
      <div>
        <h2>Habit Listing Page</h2>
        <ListGroup>
          {habits.map((habit, index) => (
            <ListGroup.Item key={index}>
              <Button variant="link">{habit.name}</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  };
  
  export default HabitList;

  