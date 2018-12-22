const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
}

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName)

const address = ["1299 South Juniper Street", "Philidelphia", "Pennsylvania", "19147"];

const [, city, state = "New York"] = address;

console.log(`You are in ${city}, ${state}.`)

const menu = ["Coffee (hot)", "$2.00", "$2.50", "2.75"]

const [item, , medium] = menu;

console.log(`A medium ${item} costs ${medium}.`)
