import axios from "axios";
import { useState } from "react"

function CommentCreate({ postId }) {
    const [ content, setContent ] = useState('');
    const [ author, setAuhtor ] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content,
            author
        });

        setContent('');
        setAuhtor('');
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <div className="col">
                        <label className="mx-2">Add Comment</label>
                        <input
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            className="form-control mt-2"
                            type="text" />
                    </div>
                    <div className="col">
                        <label className="mx-2">Name</label>
                        <input
                            value={author}
                            onChange={e => setAuhtor(e.target.value)}
                            className="form-control mt-2"
                            type="text" />
                    </div>
                </div>
                <button className="btn btn-dark btn-sm mt-3" type="submit">Submit</button>
            </form>
        </>
    )
}

export default CommentCreate