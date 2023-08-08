
import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import './theme/variables.scss';
import './theme/rules.scss';

setupIonicReact();

import AppRouter from './app/Router';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    <AppRouter />
    </IonReactRouter>
  </IonApp>
);

export default App;
