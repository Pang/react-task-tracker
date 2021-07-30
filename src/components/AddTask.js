const AddTask = () => {
    return (
        <form className='m-3 p-4 justify-content-center'>
            <div>
                <input className='form-control' type='text' placeholder='Add Task' />
            </div>
            <div>
                <input className='form-control' type='text' placeholder='Add Day & Time' />
            </div>
            <div className='input-group'>
                <div className='input-group-prepend'>
                    <div className="input-group-text">
                        <input type='checkbox' />
                    </div>
                </div>
                <label className='mb-0 ml-2'>Set reminder</label>
                
            </div>
            <input className='btn float-right' type='submit' value='Save Task' />
        </form>
    )
}

export default AddTask;