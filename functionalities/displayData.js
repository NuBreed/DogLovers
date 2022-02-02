const displayData = async(dogs) => {
    const newDogs = dogs
        .map((dog) => {
            const {
                id,
                name,
                history,
                image: { url },
                temperament,
                life_span,
                breed_group,
            } = dog
            return `<article class="featured-card">
   <h4 class="card-title"> ${name} </h4>
   <div class="animal-details">
       <div class="animal-img-wrapper">
           <img src="${url}" alt="dog-img" />
       </div>
       <div class="animal-info">
           <p class="animal-text">
               ${temperament}
           </p>
           <div class"divider"></div>
           <div class="card-footer">
               <span>
              life-span : ${life_span} </span>
                   <br/>
                  Breed-ground: <span>${breed_group}</span>
           </div>
       </div>
   </div>
   <a href='${url}'> <button class="btn featured-btn"> View More</button>
   </a>

</article>`
        })
        .join('')
    const section = document.querySelector('.featured-center')
    console.log(section)
    section.innerHTML = newDogs
}
export default displayData