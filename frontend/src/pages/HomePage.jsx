import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

function HomePage() {
  return (
    <>
      <Header />
      <section id="home" className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="display-1 fw-bold mb-4">
            Welcome to <span className="display-1" style={{fontFamily: 'Great Vibes', fontStyle: 'cursive'}}>Blessing</span>
          </h2>
          <p className="h4 mb-4">Find exclusive services for your lifestyle.</p>
          <Link to={`/services`} className="btn btn-primary btn-lg">Explore</Link>
        </div>
      </section>

      <div>
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
