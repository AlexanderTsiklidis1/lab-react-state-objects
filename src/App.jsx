import { useState } from "react";
import Footer from "./Footer";
import menuItems from "./data";
import Header from "./Header";



function App() {
 const [order, setOrder] = useState([])
 const [totalAmt, setTotalAmt] = useState(0);

function addToOrder (menuItem) {
  const menuOrder = {
    name: menuItem.name,
    price: menuItem.price,
    id: order.length-1
  }
  setOrder([...order, menuOrder])
  setTotalAmt(totalAmt + menuItem.price)

}


function removeFromOrder ({id, price}) {
  const removedOrders = order.filter((menuItem) => menuItem.id !== id)
  setOrder(removedOrders)
  setTotalAmt(totalAmt-price)

}

  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <table>
            <tbody>
              {menuItems.map((menuItem) => {
                return (
                  <tr key= {menuItem.id} onClick = {() => addToOrder(menuItem)}>
                    <td>{menuItem.image}</td>
                    <td className="item-name">
                    <span>{menuItem.name}</span> <br></br> 
                    {/* line 26 ending --> this adds a line break */}
                    <span>{"🌶️".repeat(menuItem.spiceLevel)}</span>
                    </td>
                    <td>{"$" + (menuItem.price)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </aside>
        <section>
          <div>
            <h2>Current Order</h2>
            <ul>
              {order.map((menuItem) => {
                return (
                  <li key= {menuItem.id}>
                    <span onClick={()=> removeFromOrder(menuItem)}>❌</span>
                    <span>{menuItem.name}</span>
                    <span>{menuItem.price}</span>
                  </li>
                )
              })}
            </ul>
            <h4>Total: {totalAmt}</h4>
            <div>
              <button>Tidy order</button>
              <button>Close order</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
