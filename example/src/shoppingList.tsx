export default function ShoppingList() {
  const khetiasMall = [
    { item1: "Books", isFurniture: false, id: 1 },
    { item1: "Coach", isFurniture: true, id: 2 },
    { item1: "Melon", isFurniture: false, id: 3 },
  ];

  const listItems = khetiasMall.map((shop) => (
    <li
      key={shop.id}
      style={{ color: shop.isFurniture ? "magenta" : "palegreen" }}
    >
      {shop.item1}
    </li>
  ));

  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}
