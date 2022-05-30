import Home from "../components/home-page/home";

export default function HomePage({ matches }) {
  return <Home matches={matches} />;
}

export async function getServerSideProps() {
  const responseMatches = await fetch("http://localhost:3000/api/matches", {
    method: "get",
    headers: { "Content-Type": "application/json" },
  });

  const matches = await responseMatches.json();

  return {
    props: {
      matches,
    },
  };
}
