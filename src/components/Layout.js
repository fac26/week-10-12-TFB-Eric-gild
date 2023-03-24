import NavBar from "@components/NavBar";

export default function Layout({ children, home }) {
  return (
    <>
      <header></header>
      <div>
        <main>{children}</main>
        {!home ? <NavBar /> : null}
      </div>
    </>
  );
}
