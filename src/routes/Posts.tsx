// import {useState} from 'react';
// import logo from './logo.svg';
// import Post from './components/Post';
// import MainHeader from '../components/MainHeader';
// import Modal from '../components/Modal';
import React from 'react';
import './Posts.css';
import PostsList from "../components/PostsList";
import { Outlet } from 'react-router-dom';



function Posts() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  // return <h1>Hello World!</h1>;
  // return <Post />;

    // const [modalIsVisable, setModalIsVisable] = useState(false);

    // function hideModalHandler() {
    //     setModalIsVisable(false);
    // }
    //
    // function showModalHandler() {
    //     setModalIsVisable(true);
    // }

    return (
          <>
              {/*<MainHeader onCreatePost={showModalHandler}/>*/}
              < Outlet />
              <main>
                  {/*<Post author="Maximilian" body="React.js is awesome!"/>*/}
                  {/*<Post author="Manuel" body="Check out the full course!"/>*/}
                  {/*<PostsList isPosting={modalIsVisable} onStopPosting={setModalIsVisable}/>*/}
                  <PostsList />
              </main>
          </>
  );
}

export default Posts;
export async function loader() {
    const response = await fetch('http://localhost:8080/posts');
    const resData = await response.json();
    return resData.posts;
}