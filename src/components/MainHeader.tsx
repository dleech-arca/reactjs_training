import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from './MainHeader.module.css';


interface ComponentProps {
    // onCreatePost: (open: boolean) => void;
    onCreatePost: () => void;
}

function MainHeader({onCreatePost}: ComponentProps) {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <MdMessage />
                React Poster
            </h1>
            <p>
                {/*onClick={onCreatePost}*/}
                <button className={classes.button} onClick={onCreatePost}>
                    <MdPostAdd size={18} />
                    New Post
                </button>
            </p>
        </header>
    );
}

export default MainHeader;