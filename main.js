let discountPrice = document.querySelector('#discountPrice')
let totalPrice = document.querySelector('#totalPrice')
let minus = document.querySelector('#minus')
let plus = document.querySelector('#plus')
let count = document.querySelector('#count')
let currentCount = 1;
let discountRate = 50;  // yüzdelik olarak giriniz indirim oranini...
let price = 250.00;
minus.addEventListener("click", function decreaseCount(){
  if(currentCount > 0) {
    currentCount--;
    count.innerHTML = currentCount;
    udpatePrice ();
  }
}) 
plus.addEventListener("click", function increaseCount(){
  currentCount++;
  count.innerHTML = currentCount;
  udpatePrice ();
  
}) 

function udpatePrice () {
 let newPrice = discountRate/100*price*currentCount;
 let totPrice = price*currentCount;
 totalPrice.innerHTML = `$${totPrice.toFixed(2)}`
 discountPrice.innerHTML = `$${newPrice.toFixed(2)}`;
}

let total =0;



const chart = document.querySelector('#chart')
chart.addEventListener("click", () => {
  if(currentCount > 0) {
  basket.style.display = 'block'
  alert(`${currentCount} adet ürün sepetinize eklendi...`)
  totalAddedItem ();
  let newPrices = (125 * total);
  console.log("newPrices:", newPrices);
  const info = document.querySelector('.info');
  const middleSide = document.createElement('div');
  
  
  const textBeforePrice = `Fall Limited Edition Sneakers $125.00 x ${currentCount}`;
  const priceText = `$${newPrices.toFixed(2)}`;
  
  
  const newContent = document.createElement('div');
  newContent.innerHTML = `${textBeforePrice} <span style="font-weight: bold;">${priceText}</span>`;
  
  middleSide.appendChild(newContent);
  
  info.append(middleSide);
  changeColor () ;
  currentCount = 1;
  count.innerHTML = currentCount;
  console.log(total)
}
})



const basket = document.querySelector('.basket')
function changeColor () {
  if(currentCount > 0) {
  basket.classList.add('basket')
  basket.innerHTML = total;
}

}
function totalAddedItem () {
  total += currentCount;
}


/////////////////////////////PICTURE SIDE START//////////////////////////////
const bigImage = document.querySelectorAll('.big-image')
let currentIndex = 0;
const littlePicture = document.querySelectorAll('.littlePicture')

  littlePicture.forEach((event,index) => {
    event.addEventListener("click",() =>{
      event.classList.add('selected')
  littlePicture.forEach(otherElement => {
    if(otherElement !== event){
      otherElement.classList.remove('selected')
      console.log(index) 
      currentIndex = index;
    }
  })
  bigImage.forEach((item , itemIndex) =>{
    if(currentIndex === itemIndex) {
      item.classList.remove('hidden');
    }
    else {
      item.classList.add('hidden')
    }
  })


    })
    
  })
  
  
  const profPic = document.querySelector('#profPic')
  profPic.addEventListener("mouseover",() => {
    profPic.classList.add('forProfPic')
  })
  profPic.addEventListener("mouseout", () => {
    profPic.classList.remove('forProfPic')
  })

  


  let cartClick = 0;
  const fullBottom = document.querySelector('.fullBottom')
  const first = document.querySelector('.first');
  const second = document.querySelector('.second');
  const emptyChart = document.querySelector('.emptyChart');
  
  first.addEventListener("click", () => {
    cartClick++;
    if (total === 0) {
    second.style.display='block';
    console.log(cartClick)
    if (cartClick % 2 === 0){
      second.style.display = 'none';
    }
  }
  
  })
  
 
 
  
  
  
  
  cartClick2 = 0;
  first.addEventListener("click", () => {
    cartClick2++;
    console.log(cartClick2)
    if(total > 0 ) {
    fullBottom.style.display='block';
    if (cartClick2 % 2 === 0){
      fullBottom.style.display = 'none';
    }
    }
  })


  const wasteImage = document.querySelector('.wasteImage')
  wasteImage.addEventListener("click", () => {
    alert(`Eklediğiniz ögeler silindi`)
    second.style.display='block';
    fullBottom.style.display = 'none';
    currentCount = 0;
    total = 0;
    basket.innerHTML = total;
    
  })
  

  ////////////////////////////////
  /////////////////////////////////
  // const allThings = document.querySelectorAll("*")
  const rightNav = document.querySelector('.rightNav')
  const menuUL = document.querySelector('.menu ul');
  const visible = document.querySelector('.visible')
  const bar1 = document.querySelector('.bar1')
  const bar2 = document.querySelector('.bar2')
  const bar3 = document.querySelector('.bar3')
  const menu = document.querySelector('.menu')
  const menuIcon = document.querySelector('.menu-icon')
  menuIcon.addEventListener('click', function() {
  menu.classList.add('visible');
  menuIcon.classList.add('visible');
  // bar2.classList.toggle('stylebar2');
  // bar1.classList.toggle('stylebar1');
  // bar3.classList.toggle('stylebar3');
  menuUL.classList.add('visible');
//   allThings.forEach(function(element) {
    
// });


  });
  const x = document.querySelector('.x')
  x.addEventListener("click", () => {
    menu.classList.toggle('visible');
  })
  








  let counterPass = 0;
  const rightPass = document.querySelector('.rightpass')
  const leftPass = document.querySelector('.leftpass')

  leftPass.addEventListener("click", () => {
    counterPass--;
    
    if (counterPass < 0) {
        counterPass = bigImage.length - 1;
        
    }
    console.log(counterPass);
    updateImages(); 
    
});

rightPass.addEventListener("click", () => {
  counterPass++;
  
  if (counterPass > 3) {
      counterPass = 0;
      
  }
  console.log(counterPass);
  updateImages(); 
});


function updateImages() {
    bigImage.forEach((item,index) => {
      if (index === counterPass) {
        item.classList.remove('hidden')
      
       } else {
        item.classList.add('hidden')
      }
    })



    

// bigImage.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     item.classList.remove("hidden")
//   })
// }








}
 

  
