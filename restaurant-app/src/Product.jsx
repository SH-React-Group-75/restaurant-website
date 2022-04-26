import { useState, useEffect } from "react";
import { food, drinks, desserts } from "./data";
import lists from './productCategory'

function Product({ selected, setSelected }) {
  const [menus, setMenus] = useState([])
  useEffect(() => {
    switch (selected) {
      case 1:
        setMenus(food);
        break;
      case 2:
        setMenus(desserts);
        break;
      case 3:
        setMenus(drinks);
        break;
      default:
        break;
    }

  }, [selected])


  return (
    <div className="product-container">
      <ul className="lists">
        {lists.map((list) => {
          const { id, name } = list;
          return <li className={selected === id ? 'list-items active' : 'list-items' } key={id} onClick={() => setSelected(id)}>{name}</li>;
        })}
      </ul>
      <div className="container-fluid">
        {menus.map((menu) => {
          const { id, name, img, desc, price } = menu;
          return (
            <div className="menu-container" key={id}>
              <div className="menu-container-img">
                <img src={img} alt="" />
                <p>{name}</p>
              </div>
              <div className="menu-container-info">
                <div className="menu-container-info-title">
                  <p className="menu-container-info-desc">{desc}</p>
                  <h4>${price}</h4>
                </div>
                <button className="btn"> Add To Cart </button>
              </div>
            </div>
          )
         })}
            </div>
    </div>

      )
}

      export default Product;
