import logo from './logo.svg';
import './App.css';
import Upload from './components/Upload';
import ImageGallery from './components/ImageGallery';
import Title from './components/Title';

function App() {
  return (
    <div className='container'>
      <Title />
      <Upload />
      <ImageGallery />
    </div>
  );
}

export default App;
