import { ColorModeContext, useMode } from './theme';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team/team";
import Contacts from "./scenes/contacts/contacts";
import Invoices from "./scenes/invoices/invoices";
import Form from "./scenes/form/form";
import Calendar from "./scenes/calendar/calendar";
import FAQ from "./scenes/faq/faq";
import Bar from "./scenes/bar/bar";
import Pie from "./scenes/pie/pie";
import Line from "./scenes/line/line";
import Geography from "./scenes/geography/geography";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <Router basename='/BizView-An_Admin_Dashboard'>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app" >

            <Sidebar isSidebar={isSidebar} />

            <main className="content" style={{ flexGrow: 1, height: '100%', overflow: 'auto' }}>
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>

  );
}

export default App
