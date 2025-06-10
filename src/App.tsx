import '@styles/index.css';
import '@styles/test.css';

import image from '@assets/image.jpg';
import reactIcon from '@assets/react.svg';

import Counter from '@/components/Counter';

function App() {
    return (
        <>
            <h1>Hello, World</h1>
            <Counter />
            <br />
           <h1> Nikhil + React</h1>
        </>
    );
}

console.log(App());
export default App;
