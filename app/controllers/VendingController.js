import { AppState } from "../AppState.js"

export class VendingController {

  constructor() {

    console.log(`Vending Controller is Live`)
    this.drawItems()
  }

  drawItems() {
    const snacks = AppState.snacks
    let itemHTML = ``
    snacks.forEach(snack => itemHTML += snack.itemHTMLTemplate)
    const SnackItemElm = document.getElementById(`VendingMachineItems`)
    SnackItemElm.innerHTML = itemHTML

  }


  Add25Cents() {
    console.log(`adding 25 cents`)
    return

  }
}