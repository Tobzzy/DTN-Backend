module.exports = `
type City {
  _id: ID!
  name: String!
  weather: [Weather]!
}

input CreateCityInput {
  name: String!
}

type Weather {
  _id: ID!
  temperature: Float!
  windSpeed: Float!
  humidity: Float!
  timestamp: String!
}

input CreateWeatherInput {
  temperature: Float!
  windSpeed: Float!
  humidity: Float!
  timestamp: String!
}

type DeleteRes {
  response: String!
}

type RootQuery {
  cities: [City]!
  city(name: String!): City!
  weather(cityID: ID): [Weather]!
}

type RootMutation {
  createCity(data: CreateCityInput!): City! 
  deleteCity(name: String!): DeleteRes!
  createWeatherData(data: CreateWeatherInput!): Weather!
}

schema {
  query: RootQuery
  mutation: RootMutation
}  
`;
