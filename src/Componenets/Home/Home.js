import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';

const Home = () => {
    const [posts, setPosts] = useProduct('https://jsonplaceholder.typicode.com/posts');
    return (
        <div>
            <div className='flex gap-4'>
                {posts.map(post => <div key={post.id} className='mt-10  rounded-full w-8 h-8 bg-blue-300 items-center flex justify-center'>
                    <Link className='text-white ' to={`/${post.id}`}>{post.id}</Link>
                </div>)}


            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;