import Shooters from "../components/shooters-page/shooters";

export default function ShootersPage({ shooters }) {
  return <Shooters shooters={shooters} />;
}

export async function getServerSideProps() {
  const responseShooters = await fetch("http://localhost:3000/api/shooters", {
    method: "get",
    headers: { "Content-Type": "application/json" },
  });

  const shooters = await responseShooters.json();

  return {
    props: {
      shooters,
    },
  };
}
