
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/CartSlice";

const categories = [
  {
    name: "Air Purifying Plants",
    plants: [
      {
        id: 1,
        name: "Snake Plant",
        price: 350,
        image: "photo-1501004318641-b39e6451bec6"
      },
      {
        id: 2,
        name: "Peace Lily",
        price: 450,
        image: "photo-1497250681960-ef046c08a56e"
      },
      {
        id: 3,
        name: "Spider Plant",
        price: 300,
        image: "photo-1485955900006-10f4d324d411"
      },
      {
        id: 4,
        name: "Areca Palm",
        price: 550,
        image: "photo-1509423350716-97f9360b4e09"
      },
      {
        id: 5,
        name: "Rubber Plant",
        price: 500,
        image: "photo-1509423350716-97f9360b4e09"
      },
      {
        id: 6,
        name: "Boston Fern",
        price: 400,
        image: "photo-1494438639946-1ebd1d20bf85"
      }
    ]
  },
  {
    name: "Succulents",
    plants: [
      {
        id: 7,
        name: "Aloe Vera",
        price: 250,
        image: "photo-1501004318641-b39e6451bec6"
      },
      {
        id: 8,
        name: "Echeveria",
        price: 220,
        image: "photo-1459411552884-841db9b3cc2a"
      },
      {
        id: 9,
        name: "Jade Plant",
        price: 280,
        image: "photo-1485955900006-10f4d324d411"
      },
      {
        id: 10,
        name: "Haworthia",
        price: 200,
        image: "photo-1459411552884-841db9b3cc2a"
      },
      {
        id: 11,
        name: "Echeveria Elegans",
        price: 260,
        image: "photo-1509423350716-97f9360b4e09"
      },
      {
        id: 12,
        name: "Burro's Tail",
        price: 320,
        image: "photo-1497250681960-ef046c08a56e"
      }
    ]
  },
  {
    name: "Flowering Plants",
    plants: [
      {
        id: 13,
        name: "Anthurium",
        price: 500,
        image: "photo-1494972308805-463bc619d34e"
      },
      {
        id: 14,
        name: "Orchid",
        price: 650,
        image: "photo-1487530811176-3780de880c2d"
      },
      {
        id: 15,
        name: "African Violet",
        price: 350,
        image: "photo-1490750967868-88aa4486c946"
      },
      {
        id: 16,
        name: "Kalanchoe",
        price: 300,
        image: "photo-1497250681960-ef046c08a56e"
      },
      {
        id: 17,
        name: "Begonia",
        price: 400,
        image: "photo-1494972308805-463bc619d34e"
      },
      {
        id: 18,
        name: "Bromeliad",
        price: 450,
        image: "photo-1487530811176-3780de880c2d"
      }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  return (
    <main className="page-container">
      <h1>Our Houseplants</h1>
      <p>
        Explore our collection and choose plants for
        your home.
      </p>

      {categories.map((category) => (
        <section
          className="category-section"
          key={category.name}
        >
          <h2>{category.name}</h2>

          <div className="plant-grid">
            {category.plants.map((plant) => {
              const isAdded = cartItems.some(
                (item) => item.id === plant.id
              );

              return (
                <article
                  className="plant-card"
                  key={plant.id}
                >
                  <img
                    src={`https://images.unsplash.com/${plant.image}?auto=format&fit=crop&w=500&q=80`}
                    alt={plant.name}
                  />

                  <h3>{plant.name}</h3>

                  <p className="plant-price">
                    ₹{plant.price}
                  </p>

                  <button
                    className="add-button"
                    disabled={isAdded}
                    onClick={() =>
                      dispatch(addToCart(plant))
                    }
                  >
                    {isAdded
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
