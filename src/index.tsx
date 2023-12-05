import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NewPost from './components/NewPost';
import RootLayout from './routes/RootLayout'


interface Post {
    body: string;
    author: string;
}

const router= createBrowserRouter([
    { path: '/', element: <RootLayout />, children: [
            { path: '/', element: <App />}, // our domain
            { path: '/create-post', element: <NewPost onCancel={function(): void {
                    throw new Error('Function not implemented.');
                } } onAddPost={function(post: Post): void {
                    throw new Error('Function not implemented.');
                } } />}
        ]},
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
