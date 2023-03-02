import './home.css';

const Home = () => {
  const app_name = 'Placeholder';

  return (
    <div className="Home">
      <header className="Home-header">
        <p>
          Home page for {app_name}
        </p>
      </header>
    </div>
  );
}

export default Home;