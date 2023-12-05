// import {useState} from 'react';
// import { ChangeEventHandler } from 'react';
// import {MouseEventHandler} from 'react';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Link, Form, redirect, ActionFunction } from 'react-router-dom';
interface Post {
    body: string;
    author: string;
}

// interface ComponentProps {
//     // onCreatePost: (open: boolean) => void;
//     onCancel: () => void;
//     onBodyChange: ChangeEventHandler<HTMLTextAreaElement> | undefined;
//     onAuthorChange: ChangeEventHandler<HTMLInputElement> | undefined;
// }
// interface ComponentProps {
//     // onCreatePost: (open: boolean) => void;
//     // onCancel: () => void;
//     onAddPost: (post: Post) => void;
// }

// function NewPost(props: ComponentProps) {
function NewPost() {
    // let enteredBody = '';
    // const [enteredBody, setEnteredBody] = useState('');
    //
    // function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    //     // console.log(event.target.value);
    //     // enteredBody = event.target.value;
    //     setEnteredBody(event.target.value);
    // }

    // const [enteredBody, setEnteredBody] = useState('');
    // const [enteredAuthor, setEnteredAuthor] = useState('');

    // function hideModalHandler() {
    //     setModalIsVisable(false);
    // }

    // function bodyChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>){
    //     setEnteredBody(event.target.value);
    // }
    //
    // function authorChangeHandler(event: React.ChangeEvent<HTMLInputElement>){
    //     setEnteredAuthor(event.target.value);
    // }

    // function submitHandler(event: { preventDefault: () => void; }) {
    //     event.preventDefault();
    //     const postData = {
    //         body: enteredBody,
    //         author: enteredAuthor
    //     };
    //     // fetch(
    //     //     'http://localhost:8080/posts', {
    //     //         method: 'POST',
    //     //         body: JSON.stringify(postData),
    //     //         headers: {
    //     //             'Content-Type': 'application/json'
    //     //         }
    //     //     });
    //     // console.log(postData);
    //     // props.onAddPost(postData);
    //     // props.onCancel();
    // }

    return (
        // <Modal  onClose={undefined}>
        <Modal>
            {/*<form className={classes.form} onSubmit={submitHandler}>*/}
            {/*<form className={classes.form}>*/}
            <Form method='post' className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    {/*<textarea id="body" required rows={3} onChange={changeBodyHandler}/>*/}
                    {/*<textarea id="body" required rows={3} onChange={props.onBodyChange}/>*/}
                    {/*<textarea id="body" required rows={3} onChange={bodyChangeHandler}/>*/}
                    <textarea id="body" name="body" required rows={3}/>
                </p>
                {/*<p>{enteredBody}</p>*/}
                <p>
                    <label htmlFor="name">Your name</label>
                    {/*<input type="text" id="name" required onChange={props.onAuthorChange}/>*/}
                    {/*<input type="text" id="name" required onChange={authorChangeHandler}/>*/}
                    <input type="text" id="name" name="author" required/>
                </p>
                <p className={classes.actions}>
                    {/*<button type="button" onClick={() => props.onCancel()}>Cancel</button>*/}
                    <Link to=".." type="button" >Cancel</Link>
                    <button>Submit</button>
                </p>
            {/*</form>*/}
            </Form>
        </Modal>
    );
}

export default NewPost;

//ask about this
export const action: ActionFunction = async ({request}) =>  {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    await fetch(
        'http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

    return redirect('/');
}