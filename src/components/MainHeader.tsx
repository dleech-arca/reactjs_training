import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from './MainHeader.module.css';
import { Link } from 'react-router-dom';


// interface ComponentProps {
//     // onCreatePost: (open: boolean) => void;
//     onCreatePost: () => void;
// }

// function MainHeader({onCreatePost}: ComponentProps) {
function MainHeader() {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <MdMessage />
                React Poster
            </h1>
            <p>
                {/*onClick={onCreatePost}*/}
                {/*<button className={classes.button} onClick={onCreatePost}>*/}
                {/*<a href="/create-post" className={classes.button}>*/}
                <Link to="/create-post" className={classes.button}>
                    <MdPostAdd size={18} />
                    New Post
                {/*</a>*/}
                </Link>
            </p>
        </header>
    );
}

export default MainHeader;