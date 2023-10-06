import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  const router = useRouter();
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.fbUser.displayName}</h1>
      <Button
        className="white-button"
        type="button"
        size="lg"
        onClick={() => {
          router.push('/recipes/new');
        }}
      >
        Add Recipe
      </Button>
      <Button
        className="white-button"
        onClick={() => {
          router.push('/ingredients/new');
        }}
      >
        Add Ingredient
      </Button>
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}

export default Home;
