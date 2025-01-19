import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import './styles/GlobalStyles.css';
import { store } from './app/store';
import { Toaster } from 'react-hot-toast';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';

function App() {
  return (
    <>
      <div className="container">
        <PageTitle> TODO List </PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader/>
          <AppContent/>
        </div>
      </div>
      <Toaster position="bottom-right" toastOptions={{ style: { fontSize: '1.4rem' } }} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  // </React.StrictMode>
);