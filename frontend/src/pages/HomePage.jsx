import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

function HomePage() {
  return (
    <>
      <Header />
      <div>
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p> {/* Texto adicional para verificar renderización */}
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
