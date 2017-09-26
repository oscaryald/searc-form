
window.onload = function(){

  var searchList = {

      postList : [
      
          {
            name: 'Dimitry Vegas',
            title: 'test Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores minus eos aspernatur culpa voluptatibus voluptatem ab veritatis, et, quod eligendi perspiciatis error? Quaerat corporis ea excepturi adipisci. Eligendi, veniam, in!',
            date: '17.07.2017',
            img: 'img/pic1.jpg',
            avatar : 'img/us2.jpg' 
          },
          {
            name: 'Roberto Silva',
            title: 'Everyone needs better graphic design test',
            date: '25.07.2017',
            img: 'img/pic2.jpg',
            avatar : 'img/us2.jpg'
          },
          {
            name: 'Alex Morph',
            title: 'And no wonder it can turn a weekend hobby into a global phenomenon. test',
            date: '03.08.2017',
            img: 'img/pic3.jpg',
            avatar : 'img/us2.jpg'
          },
      ],

      blogList : [

        {
          name : 'Ferry Corsten',
          avatar : 'img/us1.jpg',
          postCount : '180',
          subject : '3',
          test: 'test'
        },

        {
          name: 'Marckus Shultz',
          avatar : 'img/us2.jpg',
          postCount : '23',
          subject : '5',
          test: 'test'
        },
        {
          name: 'Armin van Burren ',
          avatar : 'img/us3.jpg',
          postCount : '61',
          subject : '4',
          test: 'test'
        }

      ],

      tags : [

        {
          tag1 : '@adamlambert test',
          tag2 : '#turtles',
          tag3 : '#toronto',
          tag4 : '#iwanttobreakfree live in',
          tag5 : '#italy',
          tag6 : 'test1',
          tag7 : 'test2'
        }

      ]

    }

  var searchForm = {

    searchField : document.getElementById('search-field'),

    init : function(){

      searchForm.addEvent()

    },

    search : function(){

      var searchPosts = document.getElementById('search-posts'),
          searchBlogers = document.getElementById('search-blogers'),
          searchTags = document.getElementById('search-tags'),
          searchContent = document.querySelectorAll('.search-content'),
          searchWrapper = document.getElementById('search-wrapper'),

          searchValue = this.value.toLowerCase(),
          li = '',
          result = false;

          function parseSubject(num){
                      var arr = [];

                      for(var j = 0; j < num; j++){
                        arr.push('<span class="ic ic-'+j+'" ></span>');
                      }

                     return arr.join('')   
          }

          
          searchContent.forEach(function(item){
            item.innerHTML = ''
          });

          searchWrapper.style.display = 'none';


        for (var arrKey in searchList){

            searchList[arrKey].forEach(function(searchItem, index){

              li = document.createElement('li');

              for (var key in searchItem){

                if(typeof searchItem[key] !== 'string') continue;

                if(searchItem[key].toLowerCase().indexOf(searchValue) != -1 &&
                 searchValue != '' && searchValue != ' '){

                  searchWrapper.style.display = 'block';

                  if(arrKey == 'postList'){

                    searchPosts.appendChild(li);

                    li.innerHTML = '<a href="#"><img class="img-post" src="'+ searchItem.img + '" alt="" />' +
                                  '<div class="description"><img src="'+searchItem.avatar+'" alt="" />'+
                                  '<span class="author">'+searchItem.name+'</span>'+
                                  '<span class="date"> | '+searchItem.date+'</span>'+
                                  '<p>'+searchItem.title+'</p></div></a>'

                  }else if(arrKey == 'blogList'){

                    searchBlogers.appendChild(li);

                    li.innerHTML = '<a href="#"><div class="img-bloger">'+
                                  '<img src="'+searchItem.avatar+'" alt="" /></div>' +
                                  '<div class="description">'+
                                  '<span class="author">'+searchItem.name+'</span>'+
                                  '<p> <span class="posts-count"> Posts: '+searchItem.postCount+'</span>'+ 
                                  '<span class="subjects"> | Subjects:'+parseSubject(searchItem.subject)+'</span></p></div></a>'


                  }else if(arrKey == 'tags'){

                    li = document.createElement('li');

                    for(var i = 0; i < key.length; i++){

                      searchTags.appendChild(li);

                      li.innerHTML = '<a href="#">'+searchItem[key]+'</a>';

                    }

                  }

                  document.querySelector('.no-result').style.display = 'none';

                  result = true
 
                }

                if(!result){
                  document.querySelector('.no-result').style.display = 'block';
                }

              }

            });

        }

    },

    addEvent : function(){

      var searchMask = document.querySelector('.search-block__search-mask');

      searchMask.addEventListener('click', function(){
        this.style.display = 'none';
        searchForm.searchField.focus()
      })

      searchForm.searchField.addEventListener('blur', function(){
        searchMask.style.display = '';
        document.querySelector('.no-result').style.display = 'none';
      });

      searchForm.searchField.addEventListener('keyup', searchForm.search)

    }

  }

  searchForm.init();

}