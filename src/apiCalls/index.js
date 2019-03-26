export const getPlayers = async () => {
  const response = await fetch(
    "https://long-shot-league-be.herokuapp.com/api/v1/longshotleague/players"
  );
  const data = await response.json();
  return data;
};

export const getTeams = async () => {
  const response = await fetch(
    "https://long-shot-league-be.herokuapp.com/api/v1/longshotleague/teams"
  );
  const data = await response.json();
  return data;
};
