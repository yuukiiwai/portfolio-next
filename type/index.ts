export type studystate = {
    will:langstruct[]
    ing:langstruct[]
    can:langstruct[]
}
export type langstruct = {
    /* language:string */
    imgurl:string
}
export type history = {
    when:string
    event:string
}
export type strong = {
    strong:string,
    exps:string[]
}