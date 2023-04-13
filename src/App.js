
import React from 'react';
import './App.css';


import Entry from './pages/Entry/Entry.page';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/dashboard/Dashboard.page';
import AddTicket from './pages/new-ticket/AddTicket.page';
import TicketLists from './pages/ticket-list/TicketLists.Page';

function App() {
  return (
    <div className="App">
      {/** <Entry/> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/*<AddTicket /> */}
        <TicketLists />
      </DefaultLayout>
    </div>
  );
}

export default App;
