import { useNavigate } from "react-router-dom";

function Result() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/')
  };

  return (
    <div>
      <h2>Success!</h2>
      <p>Your form has been submitted.</p>
      <button onClick={handleReturnHome}>Return to Homepage</button>
    </div>
  );
}

export default Result;