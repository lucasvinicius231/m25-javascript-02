import logoSenai from './assets/logo-senai.png';
import MenuHamburger from './assets/menu.svg';
import Login from './assets/login.svg';
import pesquisa from './assets/search.svg';
import './styles.css';

export default function Header(){
return (
<div className='cabecalho'>
    <img src={MenuHamburger} alt="imagem do menu" />
      <img src={logoSenai} alt="logotipo de senai" />
    <img src={Login} alt="imagem do login" />
    <img src={pesquisa} alt="imagem da pesquisa" />
</div>
);
}