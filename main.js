var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      520: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }
  });


fetch("https://rapidapi.p.rapidapi.com/", {
  "method": "GET",
  "headers": {
      "x-rapidapi-key": "40c36262b2mshd6c5b516b1c8c81p19b71fjsn2c4f4d68e060",
      "x-rapidapi-host": "free-football-soccer-videos.p.rapidapi.com"
  }
})
.then(response => response.json())
.then(response => {
// console.log(response[0])
const vu = document.getElementById('main-container');
const img = document.getElementById('img');
vu.backgroundImage = response[0].thumbnail;

// vu.document.body.style.BackgroundImage = response[0].thumbnail

for(var i = 0; i<=5 ; i++){
  let view = document.createElement('div')
  let div = document.createElement('div')

  let title = document.createElement('p')
  title.innerHTML = response[i].title;

  div.innerHTML = response[i].embed
   view.appendChild(div);
  view.appendChild(title);
  vu.appendChild(view);
}
})
.catch(err => {
  console.error(err);
});

fetch("https://webit-news-search.p.rapidapi.com/search?q=soccer&language=en", {
  "method": "GET",
  "headers": {
      "x-rapidapi-key": "40c36262b2mshd6c5b516b1c8c81p19b71fjsn2c4f4d68e060",
      "x-rapidapi-host": "webit-news-search.p.rapidapi.com"
  }
}).then(response => response.json())
.then(response => {
  console.log(response.data.results[0]);
const news = document.getElementById('news-container');

for(var i = 0; i <=6 ; i++){


let title =  document.createElement('div');
let nImg =  document.createElement('img');
nImg.setAttribute('src',response.data.results[i].image);
// let text = document.createElement('p');

//   title.append?Child(text)
  title.appendChild(nImg)
  title.classList.add('swiper-slide');
  

  news.appendChild(title);
  console.log(response.data.results[i].image);

//   console.log(title);
}
// console.log(news)


})
.catch(err => {
  console.error(err);
});