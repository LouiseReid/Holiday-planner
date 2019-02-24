export default {
  getExperiences(){
    return fetch('http://localhost:3000/api/experiences')
    .then(res => res.json())
  },
  getExperience(id){
    return fetch('http://localhost:3000/api/experiences/' + id)
    .then(res => res.json())

  },
  getBasket(){
    return fetch('http://localhost:3000/api/basket')
    .then(res => res.json())
  },
  addToBasket(payload){
    return fetch('http://localhost:3000/api/basket', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())

  },
  removeFromBasket(id){
    return fetch('http://localhost:3000/api/basket/' + id, {
      method: 'DELETE'
    })
  }
}
