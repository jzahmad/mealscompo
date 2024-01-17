import './App.css';
import Search from './Components/Search'
import Fav from './Components/Favourite'
import Meals from './Components/Meals'
import Modal from './Components/Modal'
import { useGlobalContext } from './Context';

function App() {
  const {showModal}=useGlobalContext()
  return (
    <main>
    <Search/>
    <Fav/>
    {!showModal && <Meals/>}
    {showModal &&  <Modal/>}
    </main>
  );
}
export default App;
