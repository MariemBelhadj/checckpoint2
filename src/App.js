import './App.css';
import FullName from './component/profile/FullName.js'
import ProfilePhoto from './component/profile/ProfilePhoto';
import Adress from './component/profile/Adress';

function App() {
  return (
    <div className='app_bodyy'>
      <div className='border'>
        <ProfilePhoto />
        <FullName></FullName>
        <Adress />
      </div>
    </div>
  );
}

export default App;
