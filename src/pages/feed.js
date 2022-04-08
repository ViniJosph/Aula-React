import React from 'react';
import Layout from '../components/shared/Layouts';
import { getPost } from '../data';
import Post from '../components/feed/Post';

import { UserContext } from '../auth';


export default function FeedPage(){
    const posts = [getPost(), getPost(), getPost()];
    const { currentUser } = React.useContext(UserContext);

    console.log(currentUser);

    return (
        <Layout>
            <div className="row">
                <div className="col-10 mx-auto">
                    { posts.map((post) => <Post key={post.id} post={post} />) }
                </div>
            </div>
        </Layout>
    );
    
        
}