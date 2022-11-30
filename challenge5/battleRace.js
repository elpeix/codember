import { getWinnerIndex, getWinnerIndexSlow, getWinnerIndexBitwise } from "./battleRoyale.js"

// Race getWinnerIndex vs getWinnerIndexSlow vs getWinnerIndexBitwise

const n = Number.MAX_SAFE_INTEGER

const start1 = Date.now()
const res1 = getWinnerIndex(n)
const end1 = Date.now()
console.log('getWinnerIndex', res1,  end1 - start1)

// const start2 = Date.now()
// getWinnerIndexSlow(n)
// const end2 = Date.now()
// console.log('getWinnerIndexSlow', end2 - start2)

const start3 = Date.now()
const res3 = getWinnerIndexBitwise(n)
const end3 = Date.now()
console.log('getWinnerIndexBitwise', res3, end3 - start3)
