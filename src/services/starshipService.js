//cemtralise al your API logic in a service module, put all your fetch calls in this component

//fyi they said it may be this: The official, actively maintained SWAPI is now at https://swapi.dev/api.
const BASE_URL = "https://swapi.info/api";

//index endpoint ususally fetches all resources of a type, get all the starship data, declare function, async means will return a promise,
export async function index() {
  try {
    //res = response
    const res = await fetch(`${BASE_URL}/starships`);

    //res.ok is a boolean (true or false), !true = false , eg. 200 = true, 404 = false
    if (!res.ok) {
      throw new Error("Failed to fetch starthship data");
    }

    //converts the response / data got from server into a JSON object, object contains all the starthisp dataa
    return res.json();
  } catch (error) {
    console.log(error); //prints the error message to browser cosole
    throw error; //passes the error back up to the code that called this function, so the caller know theres a problem
  }
}
