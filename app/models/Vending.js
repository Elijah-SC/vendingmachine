export class Snacks {

  constructor(name, price, imageURL) {
    this.name = name
    this.price = price
    this.imageURL = imageURL
  }

  get itemHTMLTemplate() {
    return /*HTML*/`
    
    <sub-section class="col-12 col-lg-6 my-3 d-flex justify-content-around">
  <button onclick="app.VendingController.BuySnack('${this.name}')" class="card" title="buy ${this.name}">
    <div class="card-body">
      <div class="d-flex justify-content-around">
        <img class="imgs"
          src="${this.imageURL}"
          alt="${this.name}">
      </div>
      <div class="d-flex justify-content-between">
        <h3>${this.name}</h3>
        <h4>$${this.price.toFixed(2)}</h4>
      </div>
    </div>
  </button>
  </sub-section>`
  }


  get MySnacksHTMLTemplate() {
    return /*HTML*/`
    
    <sub-section class="col-12 col-lg-6 my-3 d-flex justify-content-around">
  
    <div class="card-body">
      <div class="d-flex justify-content-around">
        <img class="imgs"
          src="${this.imageURL}"
          alt="${this.name}">
      </div>
    </div>
  
  </sub-section>`




  }



}