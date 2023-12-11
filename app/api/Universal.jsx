export const universalGet = async (route) => {
  let API = process.env.NEXT_PUBLIC_UAT_URL;
  let asd;

  try {
    asd = await fetch(`${API}/${route}`)
      .then(function (response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.json();
      })
      .then(function (data) {
        // `data` is the parsed version of the JSON returned from the above endpoint.

        return data;
      });
  } catch (error) {
    console.log("error", error);
  }
  return asd;
};
export const getUnisex = async (gender) => {
  let API = process.env.NEXT_PUBLIC_UAT_URL;
  let asd;
  try {
    asd = await fetch(`${API}/products/gender?gender=${gender}`)
      .then(function (response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.json();
      })
      .then(function (data) {
        // `data` is the parsed version of the JSON returned from the above endpoint.

        return data;
      });
  } catch (error) {
    console.log("error", error);
  }
  return asd;
};
