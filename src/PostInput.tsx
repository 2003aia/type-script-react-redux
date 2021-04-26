import React, { ChangeEvent } from 'react'
import { addEmitHelpers } from 'typescript'
interface PostInputProps {
    addPost(note: string): void;
}

export const PostInput: React.FC<PostInputProps> = ({addPost}) => {
    const [post, setPost] = React.useState('')
    const updatePost = (event:ChangeEvent<HTMLInputElement>) => {
        setPost(event.target.value)
    }

    const OnAddPostClick = () => {
        addPost(post)
        setPost('')
    }

    return (
        <div>
            <div className="input-group mb-3">
                
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <input onChange={updatePost} value={post} type='text' name='post' placeholder='post'/>
            <button type='button' className='btn btn-info' onClick={OnAddPostClick} >add post</button>
        </div>
      
    )
}