import { getUsers } from "./apisFetch.js";
import { getPost } from "./apisFetch.js";

const users = await getUsers();
const posts = await getPost();

const usersNew = users.map((user) => ({ id: user.id,name: user.name, userName: user.username }));
const postsNew = posts.map((post) => ({ userId: post.userId, title: post.title, postId: post.id }));

const userWithPost = usersNew.map((user) => {
    const post = postsNew.filter((post) => post.userId === user.id);
    const titles = post.map((titlePost) => titlePost.title);
    return { ...user, titlesPost: titles}
});

console.log(userWithPost);
