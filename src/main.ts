import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

interface TestInterface {
    color?: string,
    width?: number
}

const test: TestInterface = {
    color: 'blue',
    hello: 'test'
}

function testFunction(test: TestInterface): number {
    return test;
}

testFunction(test)
console.log(test)

createApp(App).mount('#app')
