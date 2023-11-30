import axios from 'axios'
import { useState } from 'react';

function PostCreate() {
    const [ title, setTitle ] = useState('');
    const [ text, setText ] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        await axios.post('http://localhost:4000/posts', {
            title,
            text
        });

        setTitle('');
        setText('');
    };

    return (
        <>
            <div className="container-fluid p-5 mt-5 border rounded" style={{ backgroundColor: 'antiquewhite' }}>
                <h3>Create New Post</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label mt-3">Title</label>
                        <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control" />
                        <label className="form-label mt-3">Text</label>
                        <textarea value={text} onChange={e => setText(e.target.value)} rows={5} className="form-control" />
                    </div>
                    <button type='submit' className="btn btn-dark mt-3 pt-2">Submit Post</button>
                </form>
            </div>
        </>
    )
}

export default PostCreate