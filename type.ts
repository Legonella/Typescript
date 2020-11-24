const userName: string = 'Andrey'
const isFetching: boolean = true
const loading: boolean = false
const flo: number = 4.2
const arr:number[] = [1, 1, 2, 3, 5, 8, 13]
const arr2: Array<number> = [1, 1, 2, 3, 5, 8, 13]
const words: Array<string> = ['Hello', 'Hi', 'TypeScript']

// Tuple

const tuple: [string, number] = ['Andrey', 123456789]

// Any

let nums: any = 42
nums = 'lol'
nums = []

// Function

function saveMyName(name: string): void {
    console.log(name)
}
saveMyName('Andrey')

// Never

function throwError(message: string): never {
    throwError(message)
}

function infinits(): never {
    while(true) {

    }
}

// Type

type login = string

const login: Login = 'Kakas'
type ID = string | number

const id:ID = 123123
