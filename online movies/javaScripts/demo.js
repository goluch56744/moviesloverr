let newsPro = document.getElementById('content');



const xhr = new XMLHttpRequest();
xhr.open('GET','https://json.extendsclass.com/bin/8fe96b1f92fb',true);
// xhr.open('GET','https://api.publicapis.org/entries',true);
xhr.getResponseHeader('Content-type','application/json');

xhr.onload= function(){
    if(this.status === 200){
       let json = JSON.parse(this.responseText);
       let results = json.images;
       console.log(results);
       let newsHtml= "";
       
       results.forEach(function(element){
        //   console.log(results[news]);
           let news=`
            <style>
            .watch${element.Id}{
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                z-index: 10000;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                visibility: hidden;
                backdrop-filter: blur(5px);
                opacity: 0;
            }
            .watch${element.Id}.active{
                visibility: visible;
                opacity: 1;
            }
            .watch${element.Id} video {
                position: relative;
                max-width: 900px;
                outline: none;
            }
            .watch${element.Id} img{
                position: absolute;
                top: 30px;
                background-color: rgb(0, 225, 255);
                border-radius: 50%;
                padding: 6px;
                right: 30px;
                cursor: pointer;
                filter: invert(1);
                max-width: 32px;
            }
            @media(max-width :991px) {
                .watch${element.Id} video{
                    max-width: 90%;
                }
            }
            </style>
                <div class="items">
                    <img class="image" src="${element["ImageURL"]}" alt="${element["Name"]}" onclick = "myvideo${element.Id}()">
                    <div class="overlay">
                    <div class="text" id="bottom">
                        <a href="${element.VideoUrl}"><button>Watch Now</button></a>
                        <h3>${element["Name"]}</h3>
                        <span class="year">2022</span>
                        <p>${element["Rating"]}<span>/10</span></p>
                    </div>
                    </div>
                </div>
        `
        ;
            newsHtml +=news;

        });
       newsPro.innerHTML = newsHtml;
    }
    else{
        console.log("Error occured")
    }
}
xhr.send()
function myvideo() {
    var watch = document.querySelector(".watch")
    var video = document.querySelector(".video")
    watch.classList.toggle("active");
  }





