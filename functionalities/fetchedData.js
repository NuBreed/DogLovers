//fetching data
const url = 'https://api.TheDogAPI.com/v1/breeds'
const fetchedData = async() => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}
export default fetchedData