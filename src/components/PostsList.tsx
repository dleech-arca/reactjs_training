// import {MouseEventHandler, useState, useEffect} from 'react';
import { Key } from 'react';
import Post from './Post';
import classes from './PostsList.module.css';
import {useLoaderData} from 'react-router-dom';
import { loader } from '../routes/Posts';

// import NewPost from "./NewPost";
// import Modal from './Modal';

// interface ComponentProps {
//     onStopPosting: (open: boolean) => void
//     isPosting: boolean
// }
// function PostsList({ isPosting, onStopPosting}: ComponentProps){
function PostsList() {

    // const [modalIsVisable, setModalIsVisable] = useState(true);
    // const [enteredBody, setEnteredBody] = useState('');
    // const [enteredAuthor, setEnteredAuthor] = useState('');
    //
    // // function hideModalHandler() {
    // //     setModalIsVisable(false);
    // // }
    //
    // function bodyChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>){
    //     setEnteredBody(event.target.value);
    // }
    //
    // function authorChangeHandler(event: React.ChangeEvent<HTMLInputElement>){
    //     setEnteredAuthor(event.target.value);
    // }

    const posts = useLoaderData() as Awaited<ReturnType<typeof loader>>;

    // const [posts, setPosts] = useState<Array<{body: string; author: string}>>([]);
    // const [isFetching,setIsFetching] = useState(false);

    //what not to do - will cause an infinite loop:
    // fetch('http://localhost:8080/posts').then(response => response.json()).then(data => {
    //setPosts(data.posts);
    // });

    // useEffect(() => {
    //     async function fetchPosts() {
    //         setIsFetching(true);
    //         // const response = await fetch('http://localhost:8080/posts');
    //         // const resData = await response.json();
    //         setPosts(resData.posts);
    //         setIsFetching(false);
    //     }
    //
    //     fetchPosts();
    // }, []);

    // function addPostsHandler(postData: {body: string; author: string}) {
    //     // console.log(postData)
    //     // setPosts([postData, ...posts]);
    //     fetch(
    //         'http://localhost:8080/posts', {
    //             method: 'POST',
    //             body: JSON.stringify(postData),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         });
    //     // setPosts((existingPosts) => [postData, ...existingPosts]);
    //     // console.log(posts)
    // }

    return (
        <>
            {/*{modalIsVisable ? (*/}
            {/*{isPosting && (*/}
            {/*    // <Modal onClose={hideModalHandler}>*/}
            {/*    // <Modal onClose={() => onStopPosting(false)}>*/}
            {/*    //     <NewPost onBodyChange={bodyChangeHandler}*/}
            {/*    //              onAuthorChange={authorChangeHandler}*/}
            {/*    //              onCancel={() => onStopPosting(false)}/>*/}
            {/*    // </Modal>*/}
            {/*    <Modal onClose={() => onStopPosting(false)}>*/}
            {/*        <NewPost onCancel={() => onStopPosting(false)} onAddPost={addPostsHandler}/>*/}
            {/*    </Modal>*/}
            {/*    )}*/}

            {/*{!isFetching && posts.length > 0 && (*/}
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {/*<Post author="Maximilian" body="React.js is awesome!"/>*/}
                    {/*<Post author={enteredAuthor} body={enteredBody}/>*/}
                    {/*<Post author="Manuel" body="Check out the full course!"/>*/}
                    {posts.map((post: {id:string; body: string; author: string; }) => (<Post key={post.id} id={post.id} author={post.author} body={post.body} />))}
                </ul>
            )}
            {/*{!isFetching && posts.length === 0 && (*/}
            {posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
            {/*{isFetching && <div style={{textAlign: 'center', color: 'white'}}><p>Loading Posts...</p></div>}*/}
        </>
    );
}

export default PostsList;