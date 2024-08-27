import { AppState } from "../AppState.js"

class VendingService {


  add25Cents() {

    console.log(`money adds up to`, AppState.money);

    AppState.money += .25

  }
}

export const vendingService = new VendingService()




