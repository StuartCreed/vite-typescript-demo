import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

interface TestInterface {
    color?: string,
    width?: number
}

const test = {
    color: 'blue',
    hello: 'test'
}

function testFunction(test: number): string {
    return 4
}

testFunction(test)
console.log(test)

createApp(App).mount('#app')
