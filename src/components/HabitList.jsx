import React, { useEffect, useState, useMemo, useCallback } from 'react';

import { Button, ListGroup, Modal, Form } from 'react-bootstrap';
import Habit from './Habit';

const HabitList = () => {
    const [allHabits, setAllHabits] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selectedHabit, setSelectedHabit] = useState(null);
    const [editingHabit, setEditingHabit] = useState(null);


    const habits = useMemo(() => [
        { name: 'Drink 8 glasses of water', goal: 8, times: 0, startDate: '2020-01-01', endDate: '2020-01-31' },
        { name: 'Walk 10,000 steps', goal: 10000, times: 0, startDate: '2020-01-01', endDate: '2020-01-31' },
        { name: 'Get 8 hours of sleep', goal: 8, times: 0, startDate: '2020-01-01', endDate: '2020-01-31' },

    ], []);

    const handleAddNewHabit = useCallback((e) => {
        e.preventDefault();
      
        const newHabit = {
          name: e.target.elements.habitName.value,
          goal: e.target.elements.habitGoal.value,
          times: e.target.elements.habitTimes.value,
          startDate: e.target.elements.habitStartDate.value,
          endDate: e.target.elements.habitEndDate.value,
        };
      
        if (editingHabit) {
          const updatedHabits = allHabits.map((habit) =>
            habit === editingHabit ? newHabit : habit
          );
          setAllHabits(updatedHabits);
          setEditingHabit(null);
          setSelectedHabit(null)
        } else {
          setAllHabits([...allHabits, newHabit]);
        }
      
        setShow(false);
      }, [allHabits, editingHabit]);
      

    const handleHabitClick = (habit) => {
        setSelectedHabit(null); 
        setSelectedHabit(habit);
    };

    const handleDelete = (habit) => {
        const updatedHabits = allHabits.filter((h) => h !== habit);
        setAllHabits(updatedHabits);
        setSelectedHabit(null);
    };

    const handleEditHabit = (habit) => {
        setEditingHabit(habit);
        handleShow();
    };

    useEffect(() => {
        setAllHabits(habits);
    }, [habits]);

    return (
        <div>
            <h2>Habit Listing Page</h2>
            <ListGroup>
                {allHabits.map((habit, index) => (
                    <ListGroup.Item key={index}>
                        <Button variant="link" onClick={() => handleHabitClick(habit)}>{habit.name}</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            {selectedHabit && (
                <Habit
                    habit={selectedHabit}
                    onDelete={handleDelete}
                    onEdit={handleEditHabit}
                />
            )}

            <div>
                <Button variant="primary" onClick={handleShow}>
                    Add a new habit
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedHabit ? 'Edit Habit' : 'Add a Habit'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleAddNewHabit}>
                            <Form.Group controlId="habitName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter name"
                                    defaultValue={editingHabit ? editingHabit.name : ''}
                                />
                            </Form.Group>
                            <Form.Group controlId="habitGoal">
                                <Form.Label>Goal</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter goal"
                                    defaultValue={editingHabit ? editingHabit.goal : ''}
                                />
                            </Form.Group>
                            <Form.Group controlId="habitTimes">
                                <Form.Label>Times</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter times"
                                    defaultValue={editingHabit ? editingHabit.times : ''}
                                />
                            </Form.Group>
                            <Form.Group controlId="habitStartDate">
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter start date"
                                    defaultValue={editingHabit ? editingHabit.startDate : ''}
                                />
                            </Form.Group>
                            <Form.Group controlId="habitEndDate">
                                <Form.Label>End Date</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter end date"
                                    defaultValue={editingHabit ? editingHabit.endDate : ''}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                {editingHabit ? 'Update' : 'Add'}
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};

export default HabitList;

