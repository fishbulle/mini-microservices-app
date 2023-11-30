import axios from "axios";
import { useEffect, useState } from "react"
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

function PostList() {
    const [ posts, setPosts ] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts');
        if (res?.status == 200)
            setPosts(res.data);
        else
            console.error('Something went wrong!')
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderedPosts = Object.values(posts);

    return (
        <>
            <div className="container-fluid p-5 mt-5 border rounded" style={{ backgroundColor: 'antiquewhite' }}>
                <h3>List of Posts</h3>
                <div className="row p-2">
                    {renderedPosts.map((post) => (
                        <div className="card mt-3" key={post.id}>
                            <div className="card-body">
                                <h4 className="card-title fw-bold mt-2">{post.title}</h4>
                                <p className="card-text">{post.text}</p>
                                <hr style={{ borderStyle: 'dashed' }} />
                                <CommentList comments={post.comments} />
                                <CommentCreate postId={post.id} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PostList