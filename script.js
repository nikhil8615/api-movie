const searchbtn = document.querySelector("#Search-btn");
const movienameRef = document.querySelector("#movie-name");
const result = document.getElementById("result");

let getmovie = ()=>{
    let moviename  = movienameRef.value;
    let url = `http://www.omdbapi.com/?t=${moviename}&apikey=${key}`;
    if(moviename.length <= 0){
        result.innerHTML = `<h3 class="msg">please Enter A movie name</h3>`;
    }
    else{
        fetch(url).then((resp)=>resp.json())
        .then((data)=>{
            
            if(data.Response == 'True'){
                
                result.innerHTML = `
            <div class="info">
                <img src=${data.Poster} "class="poster">
                <div>
                    <h2>${data.Title}</h2>
                    <div class="rating">
                        
                        <h4>${data.imdbRating}</h4>
                    </div>
                    <div class="details">
                        <span>${data.Rated}</span>
                        <span>${data.Year}</span>
                        <span>${data.Runtime}</span>
                    </div>
                    <div class="genre">
                        <div>${data.Genre.split(",").
                        join("</div><div>")}</div>
                    </div>
                </div>
            </div>
            <h3>Plot:</h3>
            <p>${data.Plot}</p>
            <h3>Cast:</h3>
            <p>${data.Actors}</p>
            </div>
            `
            }
            else{
                result.innerHTML = `<h3 class="msg">${data.Error}</h3>`
            }
            
            
        })
        .catch(() =>{
            result.innerHTML = `<h3 class="msg">Error Occured</h3>`
        })
    }
}
searchbtn.addEventListener("click",getmovie);
window.addEventListener("load",getmovie);
{/* <img src="star-icon.svg"></img> */}