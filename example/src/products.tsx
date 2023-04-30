export default function Products() {
  const prod = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];

  const items = prod.map((item) => <li key={item.id}>{item.title}</li>);

  return (
    <>
      <ul>{items}</ul>
    </>
  );
}
