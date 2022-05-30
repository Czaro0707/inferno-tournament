import Groups from "../components/groups-page/groups";

export default function GroupsPage({ matches, groups }) {
  return <Groups matches={matches} groups={groups} />;
}

export async function getServerSideProps() {
  const responseMatches = await fetch("http://localhost:3000/api/matches", {
    method: "get",
    headers: { "Content-Type": "application/json" },
  });

  const responseGroups = await fetch("http://localhost:3000/api/groups", {
    method: "get",
    headers: { "Content-Type": "application/json" },
  });

  const matches = await responseMatches.json();

  const groups = await responseGroups.json();

  return {
    props: {
      matches,
      groups,
    },
  };
}
