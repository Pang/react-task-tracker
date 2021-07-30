import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(!text) {
            alert('Please add a task');
            return;
        }
        onAdd({ text, day, reminder });

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className='m-3 p-4 justify-content-center' onSubmit={onSubmit}>
            <input 
                data-testid="newTaskForm"
                className='form-control my-1' 
                type='text' 
                placeholder='Add Task' 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
            />
            <input 
                className='form-control my-1' 
                type='text' 
                placeholder='Add Day & Time' 
                value={day} 
                onChange={(e) => setDay(e.target.value)} 
            />
            <div className='my-1 form-check'>
                    <input 
                        className='form-check-input'
                        data-testid="reminderCheckbox"
                        type='checkbox'
                        checked={reminder}
                        value={reminder} 
                        onChange={(e) => setReminder(e.currentTarget.checked)} 
                    />
                <label className='mb-0'>Set reminder</label>
                
            </div>
            <input className='btn btn-success w-100' type='submit' value='Save Task' />
        </form>
    )
}

export default AddTask;