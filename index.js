async function mystore () {
    const response = await fetch("https://fakestoreapi.com/products");
    const store = await response.json();
    let randomnum = Math.floor(Math.random() * 21);
    let newrandomnum = randomnum + 1;
    let newstore = store.slice(randomnum, newrandomnum);
    console.log(store);
    console.log(randomnum);
  
    
    newstore.forEach((element, index) => {
      
    var img2 = document.getElementById("content").append(element.category);
    document.querySelector("img").setAttribute('src',`${img2}`);
      console.log(img2);
    })
}
mystore();