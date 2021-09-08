import { autorun, makeAutoObservable } from "mobx"

export default class UserStore {
    _isAuth = false
    _user = {}
    constructor(){
        
        makeAutoObservable(this)
        autorun(() =>{ console.log(this._isAuth) })
    }

    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._isAuth = user
    }
    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
}