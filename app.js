// axios.get("https://swapi.dev/api/people/1/")
// .then(res => {
//     console.log("RESPONSE: ", res)
// })
// .catch((e) => {
//     console.log("ERROR! ", e);
// })

const getStarWarsPerson = async (id)=> {
    try{
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data);
    }
    catch(e){
        console.log("Error", e);
    }
    
}

getStarWarsPerson(3);


const getDadJoke = async () => {
    const config = {headers: { Accept: 'application/json' }}
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    console.log(res.data.joke);
}