 const astro={ 
     "people": [
         {"name": "Sergey Prokopyev", "craft": "ISS","country":"Russia","text":"Российский космонавт-испытатель отряда космонавтов «Роскосмоса», 122-й космонавт СССР/России. До поступления в отряд космонавтов служил военным лётчиком, подполковник запаса. Герой Российской Федерации","image":"images/1.jpg"},
          {"name": "Dmitry Petelin", "craft": "ISS", "country":"Russia"},
           {"name": "Frank Rubio", "craft": "ISS"},
            {"name": "Nicole Mann", "craft": "ISS"},
             {"name": "Josh Cassada", "craft": "ISS"},
              {"name": "Koichi Wakata", "craft": "ISS"},
               {"name": "Anna Kikina", "craft": "ISS"},
                {"name": "Fei Junlong", "craft": "Shenzhou 15","country":"China"},
                 {"name": "Deng Qingming", "craft": "Shenzhou 15"},
                  {"name": "Zhang Lu", "craft": "Shenzhou 15"}],
            };



/* ДОБАВЛЕНИЕ БЛОКА ПРИ ПОМОЩИ JS */

  



const addBtn=document.querySelector('.addText');

addBtn.addEventListener('click',function(){ /* добавляем обработчик события для кнопки */
    /* добавим карточку */
    document.querySelector('#astroHeader').innerHTML='Земля в иллюминаторе!'; /* что делаем, когда кнопка нажата? */
    const card=document.createElement('div'); /* создаем элемент div  и сохраняем его в переменную card */
    card.classList.add('card'); /* добавить нашему диву класс card */
    card.innerHTML=`
                <div class="card__img" style="background-image:url(${astro.people[0].image=astro.people[0].image?astro.people[0].image:'images/default.png'})"></div> <!-- фото космонавта -->
                <h1 class="card__name">${astro.people[0].name}</h1>
                <div class="card__country">${astro.people[0].country}</div>
                <div class="card__text">${astro.people[0].text}</div>`;
    document.body.appendChild(card); /* добавить в body мою карточку */ 

    /* добавим надпись */

    const banner=document.createElement('div'); /* создали див */
banner.classList.add('banner'); /* дали класс */
banner.innerHTML='<h3>Внимание! Новый астронавт в космосе!</h3>'; /* добавили текст */
document.body.appendChild(banner); /* добавили на страницу */
})






    /* astro.people.forEach(item => {
    const card=document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <div class="card__img" style="background-image:url(${item.img=item.img?item.img:'images/default.png'})"></div>
    <h1>${item.name}</h1>
    <div class="card__country">${item.country=item.country?item.country:'Человек мира'}</div>
    <div class="card__text">${item.text=item.text?item.text:'Выдающийся космонавт'}</div>
    `
   document.body.appendChild(card);
}); */
