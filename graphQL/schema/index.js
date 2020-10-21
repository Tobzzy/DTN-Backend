module.exports = `
type City {
  _id: ID!
  name: String!
  temperature: Float!
  windSpeed: Float!
  humidity: Float!
  timestamp: String!
}

input CreateCityInput {
  name: String!
}

type CityWeather {
  cityID: ID!
  name: String!
  city: [City]!
}

input CreateCityWeatherInput {
  name: String!
}

type DeleteRes {
  response: String!
}

type RootQuery {
  cities: [City]!
  city(name: String!): City!
  cityWeather(cityID: ID): [CityWeather]!
}

type RootMutation {
  createCity(data: CreateCityInput!): City! 
  deleteCity(name: String!): DeleteRes!
  createCityWeather(data: CreateCityWeatherInput!): CityWeather!
}

schema {
  query: RootQuery
  mutation: RootMutation
}  
`;
