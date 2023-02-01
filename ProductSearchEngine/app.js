const search = () =>{
    // get user input
    const searchBox = document.getElementById("searchItem").value.toUpperCase();
    // rearrange product list to show matching result
    // match user input with product list 
    const storeItems = document.getElementById("productList");
    // get all products to get access to individual products
    const product = document.querySelectorAll(".product");
    // if value is typed in search ,rearrange the product list according to product name i.e, h2
    const productName = storeItems.getElementsByTagName("h2");

    // rearrange the product according to search value
    for (var i = 0; i < productName.length; i++){
    // if user type in searchBox, then we go to individual product and get access to productName and access the first element 
        let match = product[i].getElementsByTagName("h2")[0];
        // check if user value is matched with productName
        if (match){
            // if condition only works if match contains the user value or match value matches the innerHtml
            let textValue = match.textContent || match.innerHTML;
            // indexOf is used to search array or string for a specific value and returns first index if found and returns -1 if not found
            //  in indexOf we give uservalue which is stored in searchBox 
            if (textValue.toUpperCase().indexOf(searchBox) > -1){
                // display the matching result
                product[i].style.display = "";
            }
            else{
                // if user input and product name is not matching
                product[i].style.display = "none";
            }
        }
    }
}