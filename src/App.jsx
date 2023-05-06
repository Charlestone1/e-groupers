import AllGroupsContainer from './components/AllGroupsContainer';
import Aside from './components/Aside';
import MainTableContainer from './components/MainTableContainer';
import { Route, Routes } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <Aside/>
      <Routes>
        <Route path="/" element={<MainTableContainer />} />
        <Route path="/groups" element={<AllGroupsContainer />} />
      </Routes>      
    </>
  )
}

export default App
