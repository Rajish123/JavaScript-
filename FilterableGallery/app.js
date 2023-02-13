(function(){
    const buttons = document.querySelectorAll(".btn");
    const storeImages = document.querySelectorAll(".storeItem");
  
    buttons.forEach(function(button){
      button.addEventListener("click", (e) => {
        console.log(button);
        e.preventDefault();
        const filter = e.target.dataset.filter;
        console.log(filter);
  
        storeImages.forEach(function(item){
            console.log("items",item);
          if (filter === "all"){
            item.style.display = 'block';
          }
          else{
            if(item.classList.contains(filter)){
                console.log("items class list",item.classList);
              item.style.display='block';
            }
            else{
              item.style.display = 'none'
            }
          }
        });
      });
    });
})();
  