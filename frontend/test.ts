const hello = "hello"

console.log(hello)

interface ErrorMessage {
  code: number
  details: {
    file: string
    message: string
  }
}

function logError(error: ErrorMessage) {
  console.log(`There was an error: code ${error.code} !!`)

  console.log(`File: ${error.details.file}`)
  console.log(`Error Message: ${error.details.message}`)
}

logError({
  code: 500,
  details: {
    file: "user.ts",
    message: "user is not defined",
  },
})
