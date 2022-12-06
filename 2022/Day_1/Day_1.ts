function wrapping(gifts: string[]): string[] {
	let wraped:string[] = []

	for(let i = 0; i < gifts.length; i++){
		let len:number = gifts[i].length
		wraped.push("*".repeat(len + 2)+"\\n*"+gifts[i]+"*\\n"+"*".repeat(len + 2))
	}

	return wraped
}

const gifts = ['cat', 'game', 'socks']
const expected = ["*****\\n*cat*\\n*****", "******\\n*game*\\n******", "*******\\n*socks*\\n*******"]
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
	"*****\\n*cat*\\n*****",
	"******\\n*game*\\n******",
	"*******\\n*socks*\\n*******"
] */