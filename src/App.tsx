import Home from './Pages/Home';
import All from './Pages/All';

import { SideMenu } from './Components/SideMenu';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <>
      <SideMenu>
        <header className='App-header'>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap'
          />
        </header>
        
        <Outlet/>
      </SideMenu>
    </>
  );
}
