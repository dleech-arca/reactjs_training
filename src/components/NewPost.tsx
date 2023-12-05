import {useState} from 'react';
import { ChangeEventHandler } from 'react';
import classes from './NewPost.module.css';
import {MouseEventHandler} from 'react';

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
interface ComponentProps {
    // onCreatePost: (open: boolean) => void;
    onCancel: () => void;
    onAddPost: (post: Post) => void;
}

function NewPost(props: ComponentProps) {
    // let enteredBody = '';
    // const [enteredBody, setEnteredBody] = useState('');
    //
    // function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    //     // console.log(event.target.value);
    //     // enteredBody = event.target.value;
    //     setEnteredBody(event.target.value);
    // }

    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    // function hideModalHandler() {
    //     setModalIsVisable(false);
    // }

    function bodyChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>){
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event: React.ChangeEvent<HTMLInputElement>){
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event: { preventDefault: () => void; }) {
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        };
        // console.log(postData);
        props.onAddPost(postData);
        props.onCancel();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                {/*<textarea id="body" required rows={3} onChange={changeBodyHandler}/>*/}
                {/*<textarea id="body" required rows={3} onChange={props.onBodyChange}/>*/}
                <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
            </p>
            {/*<p>{enteredBody}</p>*/}
            <p>
                <label htmlFor="name">Your name</label>
                {/*<input type="text" id="name" required onChange={props.onAuthorChange}/>*/}
                <input type="text" id="name" required onChange={authorChangeHandler}/>
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={() => props.onCancel()}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;