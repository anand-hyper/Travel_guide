import axios from "axios";
const URL = 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng';



const getAttractions = async (lt,ln) =>
{
    try {
        const {data:{data}} = await axios.get(URL, 
          {
          params: {
            latitude: lt,
            longitude: ln,
          },
          headers: {
            'X-RapidAPI-Key': '81a0d179aemshd22cc26f1de1e91p1c85ebjsn9166402f8aa4',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}


export default getAttractions

// const options = {
//   method: 'GET',
//   url: 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng',
//   params: {
//     longitude: '109.19553',
//     latitude: '12.235588',
//     lunit: 'km',
//     currency: 'USD',
//     lang: 'en_US'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'f61e08c61amsh257539127a3468fp14c5b9jsnaba738ad21a1',
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });