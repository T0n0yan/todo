import Form from "./Form";
import TodoForm from "./TodoForm"; 
import Welcome from "./Welcome";
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div > 
      <Routes>
          <Route path='/' element={<Welcome/>} />
          <Route path="/todos" element={<Form />} />
      </Routes>

   
        
    </div>
  );
}

export default App;
