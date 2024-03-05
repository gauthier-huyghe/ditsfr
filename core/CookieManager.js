import Vue from 'vue'
import {
  getCookie,
  createCookie,
  getAllCookies,
  deleteCookie,
} from '@unanim/helpers'

// THE HASH USED IN URL TO OPEN THE MANAGER
const HASH = 'cookies'

const state = Vue.observable({
  // AN EDITABLE OBJECT OF ACTIVE / UNACTIVE GROUP OF COOKIES
  // USED IN INPUTS AS V-MODEL
  cookies: {},
  // A READ-ONLY OBJECT OF ACTIVE / UNACTIVE GROUP OF COOKIES
  // UPDATED ON SAVE
  preferences: {},
  // WHETHER THE USER MADE A CHOICE OR NOT
  choiceWasMade: false,
  // WHETHER THE COOKIE MANAGER SHOULD BE DISPLAYED OR NOT
  showManager: false,
  // WHETHER THE COOKIE MANAGER IS READY OR NOT
  ready: false,
})

export default class CookieManager {
  groups = [
    {
      id: 'necessary',
      defaultValue: true,
      editable: false,
    },
    {
      id: 'functional',
      defaultValue: false,
      editable: true,
    },
    {
      id: 'tracking',
      defaultValue: false,
      editable: true,
    },
  ]

  actions = null

  // A LIST OF COOKIE OBJECTS that should contain: type, name, url, expiration, description
  cookiesList = []

  // °_°_°_°_°_°
  // CONSTRUCTOR
  // °_°_°_°_°_°
  constructor(router) {
    if (!router)
      return new Error(
        'You need to pass the vue router instance as first argument'
      )
    // SHOW OR HIDE MODAL DEPENDING ON ROUTE HASH
    router.beforeEach((to, from, next) => {
      state.showManager = to.hash.includes(HASH)
      next()
    })
  }

  // °_°_°_°_°_°_°_
  // PUBLIC METHODS
  // °_°_°_°_°_°_°_

  init(actions) {
    // LOAD ACTIONS
    this.actions = actions
    // INITIATE COOKIES OBJECT WITH DEFAULT VALUES
    this.groups.forEach((group) => {
      state.cookies[group.id] = group.default
    })
    if (!process.client) return
    // GET USER PREFERENCES
    this.#getUserPreferences()
    // TRIGGER INITIAL CALLBACKS
    this.#handleInitialActions()
    // READY TO GO
    state.ready = true
  }

  setCookiesList(list) {
    // WE ONLY NEED COOKIES NAMES HERE / REMOVE "<######>" variable from cookie name
    this.cookiesList = list.map((item) => item.name.replace(/<[\S\s]+>/, ''))
    console.log('updated cookies list')
    // KILL ANY COOKIE THAT IS NOT LISTED
    // this.#killNonListedCookies()
  }

  // ACCEPT ALL COOKIES AND SAVE
  acceptAllCookies() {
    this.groups.forEach(({ id }) => {
      state.cookies[id] = true
    })
    this.saveUserPreferences()
  }

  // SAVE USER PREFENCES IN COOKIE
  saveUserPreferences() {
    createCookie('cookies-manager', JSON.stringify(state.cookies), 90)
    // HANDLE COOKIES ACTIVATION / DEACTIVATION
    this.#handleUpdateActions()
    // RESET VARIABLES BY RETREIVING FRESHLY UPDATED DATA
    this.#getUserPreferences()
    // HIDE COOKIEBAR
    state.choiceWasMade = true
  }

  // °_°_°_°_°_°_°_°
  // PRIVATE METHODS
  // °_°_°_°_°_°_°_°

  #getUserPreferences() {
    // LOAD USER PREFERENCES from COOKIE
    let userCookies = {}
    const cookieContent = getCookie('cookies-manager')
    if (cookieContent) {
      userCookies = JSON.parse(cookieContent)
      state.choiceWasMade = true
    } else {
      state.choiceWasMade = false
    }

    // PARSE USER PREFERENCES TO OBJECT OR USE DEFAULT VALUE IF NOT SET
    this.groups.forEach(({ id, defaultValue }) => {
      const value = userCookies[id] || defaultValue
      state.preferences[id] = value
    })

    // SET INITIAL COOKIES VALUE
    state.cookies = { ...state.preferences }
  }

  #handleInitialActions() {
    if (!this.actions) return
    this.groups.forEach((group) => {
      // IF GROUP IS EDITABLE
      if (!group.editable) return
      const groupActions = this.actions[group.id]
      if (!groupActions) return
      // TRIGGER ACTIVATION IF TRUE
      if (state.cookies[group.id]) {
        groupActions.activate && groupActions.activate()
      }
      // TRIGGER DEACTIVATION AND KILL COOKIES IF FALSE
      else {
        groupActions.deactivate && groupActions.deactivate()
        this.#killGroupCookies(group.id)
      }
    })
  }

  #handleUpdateActions() {
    if (!this.actions) return
    this.groups.forEach((group) => {
      // IF GROUP IS EDITABLE
      if (!group.editable) return
      const groupActions = this.actions[group.id]
      if (!groupActions) return
      const newValue = state.cookies[group.id]
      const savedValue = state.preferences[group.id]
      // IF GROUP CHANGED
      if (newValue !== savedValue) {
        // TO TRUE -> ACTIVATE
        if (newValue) {
          groupActions.activate && groupActions.activate()
        }
        // TO FALSE -> DEACTIVATE, KILL COOKIES, RELOAD
        else {
          groupActions.deactivate && groupActions.deactivate()
          this.#killGroupCookies(group.id)
          setTimeout(() => window.location.reload(), 200)
        }
      }
    })
  }

  #killGroupCookies(group) {
    if (!this.cookiesList) return console.warn('cookiesList not loaded yet')
    const toBeKilled = this.cookiesList
      .filter((item) => item.type === group)
      .map((item) => item.name)
    Object.keys(getAllCookies()).forEach((cookieName) => {
      if (toBeKilled.some((item) => cookieName.includes(item))) {
        deleteCookie(cookieName)
        console.log('Killed this cookie (user preferences):', cookieName)
      }
    })
  }

  #killNonListedCookies() {
    if (!this.cookiesList) return console.warn('cookiesList not loaded yet')
    // THIS WILL KILL ANY COOKIE THAT IS NOT LISTED IN COMMON
    Object.keys(getAllCookies()).forEach((cookieName) => {
      const isInList = this.cookiesList.find((item) =>
        cookieName.includes(item)
      )
      if (!isInList) {
        console.log('Killed this cookie (not listed):', cookieName)
        deleteCookie(cookieName)
      }
    })
  }

  // °_°_°_°_°_°_°_°
  // ROUTE UTILITIES
  // °_°_°_°_°_°_°_°

  get closeRoute() {
    return {
      hash: '',
    }
  }

  get openRoute() {
    return {
      hash: `#${HASH}`,
    }
  }

  // READ-WRITE PROXIES
  get choiceWasMade() {
    return state.choiceWasMade
  }

  set choiceWasMade(val) {
    state.choiceWasMade = val
  }

  get showManager() {
    return state.showManager
  }

  set showManager(val) {
    state.showManager = val
  }

  get cookies() {
    return state.cookies
  }

  set cookies(val) {
    state.cookies = val
  }

  // READ-ONLY PROXIES
  get preferences() {
    return state.preferences
  }

  get ready() {
    return state.ready
  }
}
