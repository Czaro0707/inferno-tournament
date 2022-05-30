import Shooters from "../components/shooters-page/shooters";

export default function ShootersPage() {
  return <Shooters />;
}

// export async function getServerSideProps() {
//   const responseShooters = await fetch("/api/shooters", {
//     method: "get",
//     headers: { "Content-Type": "application/json" },
//   });

//   const shooters = await responseShooters.json();

//   return {
//     props: {
//       shooters,
//     },
//   };
// }

// usuwam shooters
