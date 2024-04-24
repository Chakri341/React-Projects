import React, { useEffect, useState } from "react";
import "./loadmore.css";

const LoadMore = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount]=useState(1);

  useEffect(() => {
    getData();
  }, [count]);

  const getData = async () => {
    const res =await  fetch(`https://dummyjson.com/products?limit=10&skip=${count*10}`);
    const data=await res.json();
    console.log(data.products);
    setProducts(data.products);
  };

  const handleClick=()=>{
    setCount(count+1);
  }

  if (!products) return null;

  return (
    <>
      <div >
        <h1 className="">Load More</h1>
      </div>
      <div className="img-container">
        {products?.map((p) => (
          <div className="img" key={p.id}>
            <img src={p.thumbnail} alt={p.brand} width={250} height={250}  style={{borderRadius:"50%"}}/>
          </div>
        ))}
      </div>
      {count>=9 && <h1>You reached the End of the Products List !!!</h1>}

      <div className="custom-btn">
        <button className="button" disabled={count >= 9 ? true : false} onClick={handleClick}><span><h1>Load More</h1></span></button>
      </div>
    </>
  );
};

export default LoadMore;
