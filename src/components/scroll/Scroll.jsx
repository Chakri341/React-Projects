import React, { useEffect, useState } from "react";
import "./scroll.css";

const Scroll = () => {
  const [products, setProducts] = useState([]);
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("https://dummyjson.com/products/?limit=150");
    const data = await res.json();
    setProducts(data.products);
  };

  function handleScrollPercentage() {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );
    const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

    const height =document.documentElement.scrollHeight - document.documentElement.clientHeight;

    setPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (!products) return;

  return (
    <div>
      <div className="top-container">
        <div className="header">
        <h1>Custom Scroll Indicator</h1>
        </div>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {products?.map((d) => {
          return (
            <div className="">
              <ul key={d.id}>
                <li className="item">{d.title}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Scroll;
