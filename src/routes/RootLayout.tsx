import MainHeader from '../components/MainHeader';
import { Outlet } from 'react-router-dom';

function RootLayout() {
    return <>
        <MainHeader onCreatePost={function(): void {
            throw new Error('Function not implemented.');
        } } />
        <Outlet />
    </>
}

export default RootLayout;