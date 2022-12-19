import { Col, Row } from "react-bootstrap"
import { Post } from "../components/Post"
import { CreatePost, DeletePost, GetPosts } from "../services/ApiService"
import { useState, useEffect } from 'react';
import { PostModel } from "../models/Post";
import "../Styles/Home.css"
import "../Styles/Post.css"

import { useForm, SubmitHandler } from "react-hook-form";

export function Home() {
    const [posts, setPosts] = useState<PostModel[]>([]);
    const { register, handleSubmit } = useForm<PostModel>();
    const onSubmit: SubmitHandler<PostModel> = async data => {
        if (!data) {
            alert("can not read body");
        } else {
            const id = await CreatePost(data);
            const newPost = structuredClone(data);
            newPost.id = id;
            const newPosts = posts.slice();
            newPosts.push(newPost);
            setPosts(newPosts);
        }
    };


    useEffect(() => {

        const fetchData = async () => {
            const postsFromResponse = await GetPosts();
            setPosts(postsFromResponse);
        }
        fetchData();
    }, []);


    return (
        <>
            <div className="main_container">
                <span className="header">HOME, SWEET HOME</span>
                <span className="text1">You characters rest in your base. They can do somethig interesting. Tell me what they gonna do.</span>

                <div id="form_container">

                <form onSubmit={handleSubmit(onSubmit)}>
                    Title: <input className="input_title" placeholder="Title" {...register("title")} />< br/>
                    Description: <input className="input_description" placeholder="Description" type="text"{...register("description")} />< br/>
                    <button id="submit_button" type="submit">Submit</button>
                </form>
                </div>

                <Row md={1} xs={1} lg={1} className="g-3">
                    {posts.map(item => (
                        <Col key={item.id}>
                            <div className="post_container">
                                <span id="title">{item.title}<br /></span>
                                <span id="description">{item.description}<br /></span>
                                <span id="post_number">Post number: {item.id}<br /></span>
                                <button id="delete_button" onClick={(e) => {
                                    DeletePost(item.id)
                                    const newPosts = posts.filter(x => (x.id !== item.id));
                                    setPosts(newPosts);
                                }}>Delete Post {item.id}</button>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}