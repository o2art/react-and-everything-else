export const fetchPlayerVehiclesData = async (id) => {
  await fetch(
    `https://api.worldoftanks.eu/wot/account/tanks/?application_id=254f815bda44b4c204467032a61f6836&account_id=${id}`
  )
    .then((res) => res.json())
    .then(({ data }) => {
      let obj = Object(data);
      return Object.values(obj)[0];
    });
};
