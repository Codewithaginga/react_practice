interface Props {
  jina: string;
  classOf: number;
  Mahali: string;
}

export default function Profile(props: Props) {
  return (
    <>
      <h1>{props.Mahali}</h1>
      <h2>{props.classOf}</h2>
      <h3>{props.jina}</h3>
    </>
  );
}
//   In this example, we define an interface called Props that specifies the types for the props that the Profile component expects to receive: jina as a string, classOf as a number, and Mahali as a string.

//   Then, we declare the Profile component as a function that takes a parameter of type Props and returns JSX elements that display the values of the props.

//   By using TypeScript to declare the props, you can catch any type errors during development and make your code more robust and maintainable.
