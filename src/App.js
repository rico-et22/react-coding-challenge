import './App.css';
import styled from 'styled-components'
import FileHistory from './components/FileHistory'
import DropZone from './components/DropZone'

const DropZoneWrapper = styled.div`
  margin-bottom: 5rem;
`

const App = () => {
  return (
    <div className="App">
      <DropZoneWrapper>
        <h2>Drop Zone</h2>
        <DropZone/>
      </DropZoneWrapper>
      <FileHistory/>
    </div>
  );
}

export default App;
