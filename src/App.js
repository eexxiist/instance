import './App.css';
import {InputComp, ButtonComp, SocialsComp} from './components/UI';
import CheckBox from './components/UI/checkBox';
import RadioButton from './components/UI/radioButton';
import TextArea from './components/UI/textArea';


function App() {
  return (
    <div className="App">
      <form>
        <ButtonComp text='Text' bg_color='black' type='button'/>
        <InputComp id='pass' type='password' label_text='Your name' required={true}/>
        <SocialsComp type='ynd'/>
        <CheckBox labelText='Я ЧЕКБОКС'/>
        <RadioButton/>
        <TextArea/>
      </form>
    </div>
  );
}

export default App;
