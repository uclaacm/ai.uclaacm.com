export interface User{
    username: string,
    password: string,
    score: number,
    questionsAnswered: number[],
    favoriteDessert: string,
}

export interface newUser{
    username: string,
    password: string,
    favoriteDessert: string,
}