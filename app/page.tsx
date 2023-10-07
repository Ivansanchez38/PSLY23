import Hero from "./components/Hero";
import Products from "./components/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <Products id={1} />
      <Products id={2} />
      <Products id={3} />
      <Products id={4} />
      <Products id={5} />
      <Products id={6} />
    </>
  );
}
