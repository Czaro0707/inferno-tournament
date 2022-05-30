import Groups from "../components/groups-page/groups";

export default function GroupsPage() {
  return <Groups />;
}

// export async function getServerSideProps() {
//   const responseMatches = await fetch("/api/matches", {
//     method: "get",
//     headers: { "Content-Type": "application/json" },
//   });

//   const responseGroups = await fetch("/api/groups", {
//     method: "get",
//     headers: { "Content-Type": "application/json" },
//   });

//   const matches = await responseMatches.json();

//   const groups = await responseGroups.json();

//   return {
//     props: {
//       matches,
//       groups,
//     },
//   };
// }
