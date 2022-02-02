const paginate = (dogs) => {
    const itemsPerPage = 20
    const numberOfPages = Math.ceil(dogs.length / itemsPerPage)
    const newDogs = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * itemsPerPage
        return dogs.slice(start, start + itemsPerPage)
    })
    return newDogs
}
export default paginate