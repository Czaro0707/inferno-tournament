import Home from "../components/home-page/home";

export default function HomePage() {
  return <Home />;
}

// export async function getServerSideProps() {
//   const responseMatches = await fetch("/api/matches", {
//     method: "get",
//     headers: { "Content-Type": "application/json" },
//   });

//   const matches = await responseMatches.json();

//   return {
//     props: {
//       matches,
//     },
//   };
// }
