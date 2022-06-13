// fetch("https://json.extendsclass.com/bin/a9991053688c").then((data)=>{
//     //console.log(data);
//     return data.json();
// }).then ((completedata)=>{
//     // console.log(completedata.images[3].ImageURL);
//     let data1="";
//     completedata.map((values) => {
//         //template litrals
//         data1=`
//         <div class="items">
//             <img src="${values.images.ImageURL}" alt="movie1">
//             <div class="text" id="bottom">
//                 <h3>Fantastic Beasts: The Secrets of Dumbledore</h3>
//                 <span class="year">2022</span>
//                 <p>8<span>/10</span></p>
//                 <a href="#" onclick="myvideo()">watch now</a>
//             </div>
//         </div>`
//     });
//     document.getElementById("hollywood").innerHTML=data1;
// }).catch((err)=>{
//     console.log(err);
// })

let newsPro = document.getElementById('hollywood');



const xhr = new XMLHttpRequest();
xhr.open('GET','https://json.extendsclass.com/bin/a9991053688c',true);
// xhr.open('GET','https://api.publicapis.org/entries',true);
xhr.getResponseHeader('Content-type','application/json');

xhr.onload= function(){
    if(this.status === 200){
       let json = JSON.parse(this.responseText);
       let results = json.images;
       console.log(results);
       let newsHtml= "";
       
       results.forEach(function(element){
          // console.log(results[news]);
           let news=`
                <div class="items">
                    <img src="${element["ImageURL"]}" alt="${element["Name"]}" onclick = "myvideo()">
                   
                    <div class="text" id="bottom">
                        <h3>${element["Name"]}</h3>
                        <span class="year">2022</span>
                        <p>${element["Rating"]}<span>/10</span></p>
                        <a href="#" onclick="myvideo()"></a>
                    </div>
                </div>
                <div class="watch">
                <video src="https://drive.google.com/uc?export=download&id=${element["VideoUrl"]}" controls="true">
                </video>
                <img src="assets/close-icon-13612.png" alt="" onclick="myvideo()">
            </div>`;
            newsHtml += news;

        });
       newsPro.innerHTML = newsHtml;
    }
    else{
        console.log("Error occured")
    }
}
xhr.send()

function myvideo(){
    var watch = document.querySelector(".watch")
    var video = document.querySelector(".video")
    watch.classList.toggle("active");
    }