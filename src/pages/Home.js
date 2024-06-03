import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card";

const Home = () => {
  const navigate = useNavigate();
  function redirectToAbout() {
    navigate("/about", { state: "Alpit" });
  }
  const [products, setProducts] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          credentials: "same-origin",
        });
        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setProducts(json);
        } else {
          alert(response.status);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h2>Home</h2>
      <button onClick={redirectToAbout}>Go to About</button>
      <div style={{ display: "flex", flexWrap: "wrap", margin: 10 }}>
        {/* {products &&
          products.map((product) => {
            return (
              <Card
                imageUrl={product.image}
                key={product.id}
                category={product.category}
                price={product.price}
              />
            );
          })} */}
      </div>
    </>
  );
};
export default Home;
