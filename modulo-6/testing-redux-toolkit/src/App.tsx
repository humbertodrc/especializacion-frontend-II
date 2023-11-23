import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { fetchUser } from "./store/userSlice";
import "./styles.css";

const App = () => {
  const {data, loading, error} = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentUser = data && data.results[0];
  console.log("loading: " + loading);
  if (loading === "loading") return <h1>Loading...</h1>
  if (error) return <h1>{error}</h1>

  return (
    <>
      <h2>Usuario</h2>
      {currentUser && (
        <article>
          <img src={currentUser.picture.large} alt={currentUser.name.first} />

          <h2>Nombre</h2>
          <p>{currentUser.name.first + " " + currentUser.name.last}</p>

          <h2>Email</h2>
          <p>{currentUser.email}</p>
        </article>
      )}
    </>
  );
};

export default App;

