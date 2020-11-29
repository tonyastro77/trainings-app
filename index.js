const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('build'))
let customers = [
    {
        "links" : [ {
          "rel" : "self",
          "href" : "https://customerrest.herokuapp.com/api/customers"
        }, {
          "rel" : "profile",
          "href" : "https://customerrest.herokuapp.com/api/profile/customers"
        } ],
        "content" : [ {
          "firstname" : "John",
          "lastname" : "Johnson",
          "streetaddress" : "5th Street",
          "postcode" : "23110",
          "city" : "Flintsone",
          "email" : "john@mail.com",
          "phone" : "232-2345540",
          "content" : [ ],
          "links" : [ {
            "rel" : "self",
            "href" : "https://customerrest.herokuapp.com/api/customers/1"
          }, {
            "rel" : "customer",
            "href" : "https://customerrest.herokuapp.com/api/customers/1"
          }, {
            "rel" : "trainings",
            "href" : "https://customerrest.herokuapp.com/api/customers/1/trainings"
          } ]
        }, {
          "firstname" : "Mary",
          "lastname" : "Philips",
          "streetaddress" : "Hill Street 3",
          "postcode" : "23322",
          "city" : "Flintsone",
          "email" : "m.philips@mail.com",
          "phone" : "232-310122",
          "content" : [ ],
          "links" : [ {
            "rel" : "self",
            "href" : "https://customerrest.herokuapp.com/api/customers/2"
          }, {
            "rel" : "customer",
            "href" : "https://customerrest.herokuapp.com/api/customers/2"
          }, {
            "rel" : "trainings",
            "href" : "https://customerrest.herokuapp.com/api/customers/2/trainings"
          } ]
        }, {
          "firstname" : "Dan",
          "lastname" : "Davidson",
          "streetaddress" : "32 Main Road",
          "postcode" : "23130",
          "city" : "Flintsone",
          "email" : "dan.d@mail.com",
          "phone" : "232-1227006",
          "content" : [ ],
          "links" : [ {
            "rel" : "self",
            "href" : "https://customerrest.herokuapp.com/api/customers/3"
          }, {
            "rel" : "customer",
            "href" : "https://customerrest.herokuapp.com/api/customers/3"
          }, {
            "rel" : "trainings",
            "href" : "https://customerrest.herokuapp.com/api/customers/3/trainings"
          } ]
        }, {
          "firstname" : "Erick",
          "lastname" : "Wilfrid",
          "streetaddress" : "71 Pilgrim Avenue",
          "postcode" : "23130",
          "city" : "Flintsone",
          "email" : "ewilf@mail.com",
          "phone" : "232-1227006",
          "content" : [ ],
          "links" : [ {
            "rel" : "self",
            "href" : "https://customerrest.herokuapp.com/api/customers/4"
          }, {
            "rel" : "customer",
            "href" : "https://customerrest.herokuapp.com/api/customers/4"
          }, {
            "rel" : "trainings",
            "href" : "https://customerrest.herokuapp.com/api/customers/4/trainings"
          } ]
        }, {
          "firstname" : "Tylar",
          "lastname" : "Orrell",
          "streetaddress" : "70 Bowman Street",
          "postcode" : "23000",
          "city" : "Flintsone",
          "email" : "t.orrell@mail.com",
          "phone" : "232-1227006",
          "content" : [ ],
          "links" : [ {
            "rel" : "self",
            "href" : "https://customerrest.herokuapp.com/api/customers/5"
          }, {
            "rel" : "customer",
            "href" : "https://customerrest.herokuapp.com/api/customers/5"
          }, {
            "rel" : "trainings",
            "href" : "https://customerrest.herokuapp.com/api/customers/5/trainings"
          } ]
        }, {
          "firstname" : "Sally",
          "lastname" : "Gareth",
          "streetaddress" : "4 Goldfield Road",
          "postcode" : "22722",
          "city" : "Flintsone",
          "email" : "s.gareth@mail.com",
          "phone" : "232-1227006",
          "content" : [ ],
          "links" : [ {
            "rel" : "self",
            "href" : "https://customerrest.herokuapp.com/api/customers/6"
          }, {
            "rel" : "customer",
            "href" : "https://customerrest.herokuapp.com/api/customers/6"
          }, {
            "rel" : "trainings",
            "href" : "https://customerrest.herokuapp.com/api/customers/6/trainings"
          } ]
        }, {
          "firstname" : "Roseanne",
          "lastname" : "Kimball",
          "streetaddress" : "13 Goldfield Road",
          "postcode" : "22712",
          "city" : "Flintsone",
          "email" : "kimball@mail.com",
          "phone" : "232-457133",
          "content" : [ ],
          "links" : [ {
            "rel" : "self",
            "href" : "https://customerrest.herokuapp.com/api/customers/7"
          }, {
            "rel" : "customer",
            "href" : "https://customerrest.herokuapp.com/api/customers/7"
          }, {
            "rel" : "trainings",
            "href" : "https://customerrest.herokuapp.com/api/customers/7/trainings"
          } ]
        }, {
          "firstname" : "Leyla",
          "lastname" : "Elsi",
          "streetaddress" : "41 Main Road",
          "postcode" : "23130",
          "city" : "Flintsone",
          "email" : "l.elsie@mail.com",
          "phone" : "232-457133",
          "content" : [ ],
          "links" : [ {
            "rel" : "self",
            "href" : "https://customerrest.herokuapp.com/api/customers/8"
          }, {
            "rel" : "customer",
            "href" : "https://customerrest.herokuapp.com/api/customers/8"
          }, {
            "rel" : "trainings",
            "href" : "https://customerrest.herokuapp.com/api/customers/8/trainings"
          } ]
        }, {
          "firstname" : "Kevin",
          "lastname" : "Dublin",
          "streetaddress" : "2 Main Street",
          "postcode" : "20010",
          "city" : "Flintsone",
          "email" : "k.dublin@mail.com",
          "phone" : "232-147127",
          "content" : [ ],
          "links" : [ {
            "rel" : "self",
            "href" : "https://customerrest.herokuapp.com/api/customers/9"
          }, {
            "rel" : "customer",
            "href" : "https://customerrest.herokuapp.com/api/customers/9"
          }, {
            "rel" : "trainings",
            "href" : "https://customerrest.herokuapp.com/api/customers/9/trainings"
          } ]
        }, {
          "firstname" : "Laura",
          "lastname" : "Jones",
          "streetaddress" : "34 Venice Street",
          "postcode" : "20010",
          "city" : "Flintsone",
          "email" : "laura.jones@mail.com",
          "phone" : "232-133147",
          "content" : [ ],
          "links" : [ {
            "rel" : "self",
            "href" : "https://customerrest.herokuapp.com/api/customers/10"
          }, {
            "rel" : "customer",
            "href" : "https://customerrest.herokuapp.com/api/customers/10"
          }, {
            "rel" : "trainings",
            "href" : "https://customerrest.herokuapp.com/api/customers/10/trainings"
          } ]
        }, {
          "firstname" : "Janet",
          "lastname" : "Jones",
          "streetaddress" : "31 Fifth Street",
          "postcode" : "20010",
          "city" : "Flintsone",
          "email" : "janet.j@mail.com",
          "phone" : "232-457110",
          "content" : [ ],
          "links" : [ {
            "rel" : "self",
            "href" : "https://customerrest.herokuapp.com/api/customers/11"
          }, {
            "rel" : "customer",
            "href" : "https://customerrest.herokuapp.com/api/customers/11"
          }, {
            "rel" : "trainings",
            "href" : "https://customerrest.herokuapp.com/api/customers/11/trainings"
          } ]
        }, {
          "firstname" : "Tina",
          "lastname" : "Dublin",
          "streetaddress" : "2 Main Street",
          "postcode" : "20010",
          "city" : "Flintsone",
          "email" : "t.dublin@mail.com",
          "phone" : "232-211555",
          "content" : [ ],
          "links" : [ {
            "rel" : "self",
            "href" : "https://customerrest.herokuapp.com/api/customers/12"
          }, {
            "rel" : "customer",
            "href" : "https://customerrest.herokuapp.com/api/customers/12"
          }, {
            "rel" : "trainings",
            "href" : "https://customerrest.herokuapp.com/api/customers/12/trainings"
          } ]
        } ]
    }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/customers', (request, response) => {
  response.json(customers)
})

app.get('/api/customers/content', (request, response) => {
    response.json(customers[0].content)
  })

app.get('/api/customers/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = customers.find(note => note.id === id)
    
    if (note) {
      response.json(note)
    } else {
      response.status(404).end()
    }
})

app.delete('/api/customers/:id', (request, response) => {
    const id = Number(request.params.id)
    customers = customers.filter(note => note.id !== id)
  
    response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})