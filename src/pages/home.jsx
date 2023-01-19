import Header from '../components/header/header'
import Main from '../components/main/main'
import Particle from '../components/particle/particle';

export const HomePage = () => {
    return (
        <div>
          <Particle />
          <Header />
          <Main />
        </div>
    );
}