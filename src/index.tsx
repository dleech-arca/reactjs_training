import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Posts, {loader as postsLoader} from './routes/Posts';
import reportWebVitals from './reportWebVitals';
import NewPost, { action as newPostAction} from './routes/NewPost';
import RootLayout from './routes/RootLayout'



// interface Post {
//     body: string;
//     author: string;
// }

const router= createBrowserRouter([
    { path: '/', element: <RootLayout />, children: [
            {
                path: '/',
                element: <Posts />,
                // loader: () => {},
                loader: postsLoader,
                children: [
                    // { path: '/create-post', element: <NewPost onCancel={function(): void {
                    //         throw new Error('Function not implemented.');
                    {
                        path: '/create-post',
                        // element: <NewPost onAddPost={function(post: Post): void {
                        //     throw new Error('Function not implemented.');
                        // } } />,
                        element: <NewPost />,
                        // action: () => {},
                        action: newPostAction,
                    }],
            }, // our domain

        ],
    },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/*<App />*/}
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
