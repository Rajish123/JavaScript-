(function(){
    const animeImg = document.querySelector('#animeImg')
    const animeName = document.querySelector('#characterName')
    const animeQuote = document.querySelector('#animeQuote')

    const btn = document.querySelectorAll('.btn')
    // because we have used array, we have to set index number for images
    let index = 0
    // put anime list in one array
    const animeCharacters = []

    // create image,name and text for individual anime
    function Anime(img,name,text){
        // store image, name and text in this function so target specific img,name,text for each anime
        // for targeting each anime characters we use 'this'
        this.img = img
        this.name = name
        this.text = text 
    }

    // if user clicks button,we need to change values of image,name and text
    // now for changing values we define function 'createAnimeCharacter' because each time button is clicked,we have to generate 
    // new anime character profile
    function createAnimeCharacter(img,name,text){
        let Img = `./img/${img}.jpg`
        let anime = new Anime(Img,name,text)

        animeCharacters.push(anime)
    }

    createAnimeCharacter('itachi','Itachi Uchiha','People’s lives don’t end when they die, it ends when they lose faith.')
    createAnimeCharacter('nagato','Nagato','Because of the existence of love,sacrifice is born. As well as hate. Then one comprehends… one knows PAIN.')
    createAnimeCharacter('tsunade','Tsunade','PPeople become stronger because they have memories they can’t forget.')
    createAnimeCharacter('jiraya','Jiraya','A place where someone still thinks about you is a place you can call home.')
    createAnimeCharacter('lee','Rock Lee','A dropout will beat a genius through hard work.')
    createAnimeCharacter('madara','Madara Uchiha','In this world, wherever there is light,there are also shadows. As long as the concept of winners exists, there must also be losers. The selfish desire of wanting to maintain peace causes wars and hatred is born to protect love.')
    createAnimeCharacter('obito','Obito Uchiha','No one cared who I was until I put on a mask.')
    createAnimeCharacter('orochimaru','Orochimaru','It’s human nature not to realize the true value of something unless they lose it.')
    createAnimeCharacter('shikamaru','Shikamaru Nara','Laziness is the mother of all bad habits, but ultimately she is a mother and we should respect her.')
    createAnimeCharacter('kakashi','Kakashi Hatake','To know what is right and choose to ignore it is the act of coward.')
    createAnimeCharacter('doflamingo','Donquixote Doflamingo','Justice Will Prevail, You Say? But Of Course, It Will! Whoever Wins This War Becomes Justice!')
    createAnimeCharacter('roger','Gol D. Roger','you want my treasure, you can have it I left everything I gathered together in one place. Now you will just have to find it!.')
    createAnimeCharacter('whitebeard','Edward Whitebeard Newgate','One Piece Does Exist!')
    createAnimeCharacter('robin','Nico Robin','Sometimes the only thing you have to doubt is your own common sense')
    createAnimeCharacter('zoro','Roronoa Zoro','Have you ever seen a wild beast you were sure she would not bite you? Me, never! ')

    // check which button was pressed
    btn.forEach(function(button){
        // change the profile whenever user click button
        button.addEventListener('click',function(e){
            // find out which button was pressed
            if (e.target.parentElement.classList.contains('prevBtn')){
                if (index===0){
                    index = animeCharacters.length
                }
                index--
                // change image source
                animeImg.src = animeCharacters[index].img
                animeName.textContent = animeCharacters[index].name
                animeQuote.textContent = animeCharacters[index].text
            }
            if (e.target.parentElement.classList.contains('nextBtn')){

                index++
                // find out previous index number
                if (index===animeCharacters.length){
                    index = 0
                }
                // change image source
                animeImg.src = animeCharacters[index].img
                animeName.textContent = animeCharacters[index].name
                animeQuote.textContent = animeCharacters[index].text
            }
        })

    })


})()