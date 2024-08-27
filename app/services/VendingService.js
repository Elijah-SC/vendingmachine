import { AppState } from "../AppState.js"

class VendingService {
  BuySnack(SnackName) {
    const foundSnack = AppState.snacks.find(Snack => Snack.name = SnackName)
    if (AppState.money < foundSnack.price) {
      window.alert(`GET YOUR BROKE A** OUT OF HERE`)
      return
    }
    AppState.money -= foundSnack.price

    AppState.MySnacks.push(foundSnack)
    console.log(AppState.MySnacks)

  }

  add25Cents() {

    console.log(`money adds up to`, AppState.money);

    AppState.money += .25

  }
}

export const vendingService = new VendingService()




