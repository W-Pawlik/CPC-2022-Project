import App from "../App"
import posts from "../data/posts.json"
import {PostModel} from "../models/Post"


export async function GetPosts():Promise<PostModel[]>{
  const response = fetch("https://localhost:7031/api/Post")
  .then(res => res.json())
  .then(
    (result:PostModel[]) => {
      return result;
    },
    (error) => {
      console.log("Error")
      console.log(error)
      return []
    }
  )
    return response;
}

export async function CreatePost(newPost:PostModel):Promise<number>{
    console.log(newPost)
    const response = fetch("https://localhost:7031/api/Post",{
    method:'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',},
    body:JSON.stringify(newPost)
    })
    .then(res => res.json())
    .then(res => res)
    return response;
  }

  export async function DeletePost(postToDelete:PostModel["id"]):Promise<void>{
    console.log(postToDelete)
    fetch("https://localhost:7031/api/Post/"+ postToDelete,{
    method:'DELETE',
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }