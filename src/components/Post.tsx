import classes from './Post.module.css';

// const names = ["Maximilian", "Manuel"];

function Post(props: {author:string,body:string}) {
    // const chosenName = Math.random() > 0.5 ? names[0] : names[1];

    return (
      // <div style={{color:'red',textAlign:'left'}}>
      //   <div className={classes.post}>
         // {/*<p>Maximilian</p>*/}
         // {/*<p>{chosenName}</p>*/}
         // {/*<p>React.js is awesome!</p>*/}

         // {/*  <p className={classes.author}>{props.author}</p>*/}
       //   {/*  <p className={classes.text}>{props.body}</p>*/}
    <li className={classes.post}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
    </li>

        // </div>
    );
}

export default Post;