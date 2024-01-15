import { useEffect, useState } from 'react';
import data from '../../data/post';
import './App.scss';
import axios from 'axios';
import Post from '../map';

function App() {
  const [text, settext] = useState('ecrivez dans la barre de recherche');
  const [color, setcolor] = useState(false);
  const [api, setapi] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await axios.get(
        'https://oblog-react.vercel.app/api/posts'
      );

      setapi(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className={color ? 'dark' : 'red'}>
      <h1>{text}</h1>
      <input
        type="text"
        placeholder="test"
        onChange={(e) => settext(e.target.value)}
      />

      <div>
        {api?.map((e) => (
          <Post key={e.id} post={e} />
        ))}
      </div>

      <div>
        <button type="button" onClick={() => setcolor((prev) => true)}>
          dark mode
        </button>
        <button type="button" onClick={() => setcolor((prev) => false)}>
          red mode
        </button>
      </div>
    </div>
  );
}

export default App;
