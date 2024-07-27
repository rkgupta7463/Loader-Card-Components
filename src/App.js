import './App.css';
import CardComp from './Components/CardComp';
import SquareLoader from './Components/SquareLoader';

function App() {
  return (
    <>
    <h1>Leveraging the Cards & Loader Components............</h1>
    <hr />
    <div className='container'>
    <SquareLoader/>
    </div>
    
    <div className='Card-Container'>
    <CardComp quote="When i have patience what god makes you wait for, then only will get success." author="Rishu Kumar Gupta"/>
    <CardComp quote="The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." author="Helen Keller"/>
    <CardComp quote="Beauty is not in the face; beauty is a light in the heart." author="Kahlil Gibran"/>
    <CardComp quote="The future belongs to those who believe in the beauty of their dreams." author="Eleanor Roosevelt"/>
    <CardComp quote="Everything has beauty, but not everyone sees it." author="Confucius"/>
    <CardComp quote="The only way to do great work is to love what you do." author="Steve Jobs"/>
    <CardComp quote="To love and be loved is to feel the sun from both sides." author="David Viscott"/>
    <CardComp quote="In the end, we will remember not the words of our enemies, but the silence of our friends." author="Martin Luther King Jr"/>
    <CardComp quote="Happiness is not something ready-made. It comes from your own actions." author="Dalai Lama"/>
    <CardComp quote="The only limit to our realization of tomorrow will be our doubts of today." author="Franklin D. Roosevelt"/>
    </div>
    </>
  );
}

export default App;
