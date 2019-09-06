<template>
    <div class="container">
        第{{ currentWordNumber }}問
        <h1 v-text="currentWord"></h1>
        <input id="input-typing" type="text" class="form-control" v-model="typingText">
        {{typingText}}
        {{solvedWords}}
    </div>
</template>

<script>

export default {

    data: function() {
        return {

        words: [
            'egg',
            'bag',
            'rose',
            'chair',
            'bat',
            'fish',
            'notebook',
            'pencil',
            'dog',
            'desk'
        ],
        solvedWords: [],

        typingText: '',

        }
    },

    computed: {
        currentWord() {

            const unsolvedWords = this.words.filter((word) => {

                return (!this.solvedWords.includes(word)) // 解答されてないものだけ

            })
            const randomIndex = Math.floor(Math.random()*unsolvedWords.length)
            return unsolvedWords[randomIndex]

        },

        currentWordNumber() {

            return this.solvedWords.length + 1

        },

        isTypingCorrect() {
            if(this.typingText == this.currentWord) {

                this.solvedWords.push(this.currentWord)
                this.typingText = ''

                if(this.words.length == this.solvedWords.length) {

                    this.solvedWords = []
                    this.trying = false
                    alert('全問正解！')

                }

                return true

            }

            const typingTextLength = this.typingText.length
            return (this.typingText === this.currentWord.slice(0, typingTextLength))

        },
    }
}
</script>