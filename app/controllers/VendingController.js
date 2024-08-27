import { AppState } from "../AppState.js"
import { vendingService } from "../services/VendingService.js"

export class VendingController {

  constructor() {

    console.log(`Vending Controller is Live`)
    this.drawItems()
    AppState.on('coins', this.drawMoney)
  }

  drawItems() {
    const snacks = AppState.snacks
    let itemHTML = ``
    snacks.forEach(snack => itemHTML += snack.itemHTMLTemplate)
    const SnackItemElm = document.getElementById(`VendingMachineItems`)
    SnackItemElm.innerHTML = itemHTML

  }

  drawMoney() {
    const MoneyElm = document.getElementById(`money`)
    MoneyElm.innerText = AppState.money.toString()

  }


  Add25Cents() {
    console.log(`adding 25 cents`)

    vendingService.add25Cents()

  }
}