import { defineStore } from 'pinia'

const questions = [
  {
    title: 'How Old are you?',
    ans_1: '20',
    ans_2: '30',
    ans_3: '40',
    theTrue: '20',
    id: 1
  },
  {
    title: 'What is your skills?',
    ans_1: 'HTML',
    ans_2: 'CSS',
    ans_3: 'Both',
    theTrue: 'Both',
    id: 2
  }
]

export const useQuizStore = defineStore('quiz', {
  state() {
    return {
      name: 'The second quiz',
      questions,

      // they for add a new questoin
      title: '',
      ans_1: '',
      ans_2: '',
      ans_3: ''
    }
  },

  actions: {
    changeName() {
      this.name = 'CHANGED'
    },

    addQuestion(title, ans_1, ans_2, ans_3) {
      if (!this.title == '' && !this.ans_1 == '' && !this.ans_2 == '' && !this.ans_3 == '') {
        this.questions.push({
          title,
          ans_1,
          ans_2,
          ans_3,
          id: this.questions.length + 1
        })

        // reset the fields
        this.title = ''
        this.ans_1 = ''
        this.ans_2 = ''
        this.ans_3 = ''
      } else {
        console.error(Error('The input is empty'))
      }
    }
  },

  getters: {
    questionsNumber() {
      return this.questions.length
    }
  }
})
