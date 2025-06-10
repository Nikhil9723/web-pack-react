import '@styles/index.css';
import '@styles/test.css';

import image from '@assets/image.jpg';
import reactIcon from '@assets/react.svg';

import Counter from '@/components/Counter';

// const x: number = "abcd";
// alert(x);

function App() {
    console.log(image);
    return (
        <>
            <h1>Hello, World</h1>
            <Counter />
            <br />
            <img src={reactIcon} alt="" />
            <br />
            <img src={image} alt="" />
        </>
    );
}

console.log(App());
export default App;
