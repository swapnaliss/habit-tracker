import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Habit = ({ habit, onEdit, onDelete, onArchive, onUnarchive }) => {

    const handleEdit = () => {
        onEdit(habit);
    };


    const handleDelete = () => {
        onDelete(habit);
    };

    const handleArchive = () => {
        onArchive(habit);
    };

    const handleUnarchive = () => {
        onUnarchive(habit);
    };

    const renderArchiveButton = () => {
        if (habit.archived) {
            return (
                <Button variant="success" onClick={handleUnarchive}>
                    Unarchive
                </Button>
            );
        } else {
            return (
                <Button variant="secondary" onClick={handleArchive}>
                    Archive
                </Button>
            );
        }
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
                    {/* <Button variant="secondary" onClick={handleArchive}>Archive</Button> */}
                    {renderArchiveButton()}
                </Card.Body>
            </Card>
        </div>
    );
};

export default Habit;
