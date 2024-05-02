const filmRow = document.querySelector(".filmRow");
const inp = document.querySelector(".form-control");
const forSearch = document.querySelector(".forSearch")

const url = "https://api.tvmaze.com/shows";



fetch(url)
    .then(res=> res.json())
    .then(datas => {
        console.log(datas)
        for(let i = 0; i < datas.length; i++) {
            filmRow.innerHTML += `
            <div class="col-sm-12 col-md-4 col-lg-4 card mt-5 ">
                    <img src="${datas[i].image.medium}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${datas[i].name}</h5>
                      <p class="card-text">${datas[i].summary.length > 90 ? datas[i].summary.substring(3,90): datas[i].summary}</p>
                      <a href="${datas[i].officialSite}" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
            `
        }
    })  

    forSearch.addEventListener("click", function() {
        const searchItem = inp.value.toLowerCase().trim()
      
        fetch(url)
        .then(res=> res.json())
        .then(datas => {
      
          filmRow.innerHTML = ''
      
          datas.forEach(data => {
            if(data.name.toLowerCase().includes(searchItem)) {
              filmRow.innerHTML += `
              <div class="col-sm-12 col-md-4 col-lg-4 card mt-5 ">
                      <img src="${data.image.medium}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${data.name}</h5>
                        <p class="card-text">${data.summary.length > 90 ? data.summary.substring(3,90): data.summary}</p>
                        <a href="${data.officialSite}" class="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
              `
            }
          });
         })  
      })

  
    
