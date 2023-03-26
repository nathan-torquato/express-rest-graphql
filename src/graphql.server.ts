import { Express } from 'express'
import 'reflect-metadata'
import { ApolloServer, gql } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { resolvers } from './resolvers'

export const buildGraphQLServer = async (app: Express) => {
	const schema = await buildSchema({
		resolvers,
	})

	const server = new ApolloServer({
		schema,
	})

	await server.start()

	server.applyMiddleware({ app })
}
