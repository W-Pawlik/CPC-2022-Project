import { useState } from "react"
import { Card } from "react-bootstrap"
import { DeletePost } from "../services/ApiService"
import "../Styles/Post.css"

type PostProps = {
    id: number
    title: string
    description: string
}

export function Post({ id, title, description }:
    PostProps) {
    return (
        <div className="post_container">
            <span id="title">{title}<br /></span>
            <span id="description">{description}<br /></span>
            <span id="post_number">Post number: {id}<br /></span>
            <button onClick={(e) => {
                DeletePost(id)
                
            }}>Delete Post {id}</button>
        </div>
    )
}
