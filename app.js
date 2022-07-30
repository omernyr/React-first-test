import axios from "axios";

export async function getData(userId) {

    
    try {

        const user = await axios("https://jsonplaceholder.typicode.com/users/"+userId);
        const post = await axios("https://jsonplaceholder.typicode.com/posts/"+userId);
        
        user.data.posts = post.data;

        console.log("User-->",user.data)

    } catch (e) {
        console.log(e);
    }

};