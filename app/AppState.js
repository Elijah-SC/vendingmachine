import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Snacks } from "./models/Vending.js"

class ObservableAppState extends EventEmitter {


  examples = []

  snacks = [

    new Snacks(`Snickers`, 1.50, `https://th.bing.com/th/id/OIP.damXfF3Vsk8V-93AVgX0LQAAAA?rs=1&pid=ImgDetMain`),
    new Snacks(`Sour Patch Kids`, 2.00, `https://d2j6dbq0eux0bg.cloudfront.net/images/44152948/3506897596.jpg`),
    new Snacks(`Kit Kat`, 1.00, `https://eapi.supplyhog.com/file-srv/img/i_771d7bbbf6c93e9c0acac12503c209b6.jpg`),
    new Snacks(`Jolly Ranchers`, 3.00, `https://th.bing.com/th/id/R.22e82c7caca67cdd557eb6884b69a14c?rik=jhK9PKsUgmv%2fRg&pid=ImgRaw&r=0`),
    new Snacks(`ButterFinger`, 2.25, `https://th.bing.com/th/id/OIP.PBFoqNLKeNlgWpJnWttPwQHaHa?rs=1&pid=ImgDetMain`),
    new Snacks(`Starburst`, 3.50, `https://th.bing.com/th/id/OIP.14jK7-9EhU73HJScG3MfDQHaHa?rs=1&pid=ImgDetMain`)
  ]


  money = 0
}

export const AppState = createObservableProxy(new ObservableAppState())