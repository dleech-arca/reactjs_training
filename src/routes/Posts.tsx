import {useState} from 'react';
import React from 'react';
// import logo from './logo.svg';
import '../App.css';
// import Post from './components/Post';
import PostsList from "../components/PostsList";
import MainHeader from '../components/MainHeader';
import Modal from '../components/Modal';

function App() {
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

    const [modalIsVisable, setModalIsVisable] = useState(false);

    function hideModalHandler() {
        setModalIsVisable(false);
    }

    function showModalHandler() {
        setModalIsVisable(true);
    }

    return (
          <>
              <MainHeader onCreatePost={showModalHandler}/>
              <main>
                  {/*<Post author="Maximilian" body="React.js is awesome!"/>*/}
                  {/*<Post author="Manuel" body="Check out the full course!"/>*/}
                  <PostsList isPosting={modalIsVisable} onStopPosting={setModalIsVisable}/>
              </main>
          </>
  );
}

export default App;