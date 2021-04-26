import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { PostInput } from './PostInput';
import {addPost, PostState} from './postReducer'

function App() {
  const posts =useSelector<PostState, PostState['posts']>((state)=>state.posts)
  const dispatch= useDispatch()
  const OnaddPost=(post:string)=>{
    dispatch(addPost(post))
  }
  return (
    <div>
      <PostInput addPost={OnaddPost} />
      <div>
        {posts.map((post)=>{
          return <h1 key={post}>{post}</h1>
        })}
        
      </div>
    </div>
  );
}

export default App;
