import { FaUserPen } from 'react-icons/fa6'

function CommentList({ comments }) {

    return (
        <>
            <div className="text-end">
                <p className="fw-bold">
                    What others have said about this post:</p>
                <ul>
                    {comments.map(comment => {
                        let content;

                        switch (comment.status) {
                            case 'approved':
                                content = comment.content;
                                break;
                            case 'pending':
                                content = 'This comment is awaiting moderation.';
                                break;
                            case 'rejected':
                                content = 'This comment has been rejected, you foul creature.';
                                break;
                        }

                        return <li key={comment.id}
                            className="font-monospace">
                            {content} <br />
                            <p className="fst-italic"><FaUserPen /> {comment.author}</p>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}

export default CommentList