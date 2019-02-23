export default {
  getExperiences(){
    return fetch('http://localhost:3000/api/experiences')
  },
  getExperience(id){
    return fetch('http://localhost:3000/api/experiences/' + id)
  },
  getBasket(){
    return fetch('http://localhost:3000/api/basket')
  },
  addToBasket(payload){
    return fetch('http://localhost:3000/api/basket', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
  },
  removeFromBasket(id){
    return fetch('http://localhost:3000/api/basket/' + id, {
      method: 'DELETE'
    })
  }
}
