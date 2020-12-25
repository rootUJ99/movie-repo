import {useState} from 'react';
import './styles.css';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Login = ({authModal, setAuthModal}) => {
  const [mode, setMode] = useState('LOGIN');
  const [authForm, setAuthForm] = useState({
    username: '',
    password: '',
  });
  const switchMode = () => mode==='LOGIN' ? 'REGISTER' : 'LOGIN';
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiType = mode === 'LOGIN' ? 'token' : 'create';
      const apiData = await fetch(`/api/user/${apiType}`, {
        method: 'POST',
        body: JSON.stringify(authForm),
      });
      const data = await apiData.json();
      if (mode === 'LOGIN'){
        console.log(data);
      }
    } catch (error) {
        console.log(error);
    }
  }

  const handleChange = (e) => {
    setAuthForm({
      ...authForm,
      [e.target.name]: e.target.value,
    });
  }

  const handleCancel = () => {
    setAuthModal(false);
  }

  return (
    <Modal 
      toggle={authModal}
      onClose={handleCancel}
    >
      <form onSubmit={handleSubmit}>
        <div className="auth-form">
        <Input name="username" placeholder="username" value={authForm.username} onChange={handleChange}/>
        <Input name="password" placeholder="password" value={authForm.password} onChange={handleChange} type="password"/>
        <Button type="submit">{mode}</Button><br/>
        --or--
        <Button onClick={()=> setMode(switchMode())}>{switchMode()}</Button>
        </div>
      </form>
    </Modal>
  )
}

export default Login; 
