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


  


