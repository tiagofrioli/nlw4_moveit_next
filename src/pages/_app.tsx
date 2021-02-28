import { ChallengesProvider } from '../context/ChallengeContext';
import '../styles-global/global.css';

function MyApp({ Component, pageProps }) {

  return (
  
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>

    );
}

export default MyApp;
