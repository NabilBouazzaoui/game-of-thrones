
const suivant = document.getElementById('boutton-2')
suivant.addEventListener('click', imageSuivante)
function imageSuivante (e) {
  document.getElementById('image-1').src = 'images/image-4.jpg'
  document.getElementById('image-2').src = 'images/image-2.png'
}

const suivantpremier = document.getElementById('boutton-1')
suivantpremier.addEventListener('click', imagePremierSuivante)
function imagePremierSuivante (e) {
  document.getElementById('image-2').src = 'images/image-4.jpg'
  document.getElementById('image-1').src = 'images/image-2.png'
}
