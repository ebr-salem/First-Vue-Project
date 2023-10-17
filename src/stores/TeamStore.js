import { defineStore } from 'pinia'

export const useTeamStore = defineStore('team', {
  state: () => ({
    title: '',
    spots: 0,
    members: [],

    // these for add a new member
    theName: '',
    theEmail: '',
    theStatus: ''
  }),

  actions: {
    async fill() {
      let res = await import('../json/team.json')

      this.$state = res.default

      /*
      another way
        this.$patch(res.default)
      */
    },

    editTitle() {
      this.title = 'Edited'
    },

    addNewMember(name, email, status) {
      if (!this.theName == '' && !this.theEmail == '' && !this.theStatus == '') {
        this.members.push({
          name,
          email,
          status,
          id: this.members.length + 1
        })
      }

      this.theName = ''
      this.theEmail = ''
      this.theStatus = ''
    }
  },

  getters: {
    remainingSpots() {
      return this.spots - this.members.length
    },

    isRemaining() {
      return this.members.length === this.spots
    }
  }
})
