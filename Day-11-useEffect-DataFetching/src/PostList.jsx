import React,{useEffect,useState} from 'react'

function PostList() {
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then((res) => res.json())
        .then((data) => {
            setPosts(data);
            setLoading(false);
        });
    },[]);
  return (
    <div style={{padding:'20px'}}>
        <h2>Latest Posts</h2>
        {loading ? (
            <p>Loading posts...</p>
        ) : (
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        ) }
    </div>
  );
}

export default PostList