import { Express } from 'express'
import 'reflect-metadata'
import { ApolloServer, gql } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { resolvers } from './resolvers'
import { readFileSync } from 'fs'

const typeDefs = readFileSync('/schema.gql', { encoding: 'utf-8' })

export const buildGraphQLServer = async (app: Express) => {
	const schema = await buildSchema({
		resolvers,
		emitSchemaFile: {
			path: __dirname + '/schema.gql',
			commentDescriptions: true,
			sortedSchema: false,
		},
	})

	const server = new ApolloServer({
		typeDefs,
		schema,
	})

	await server.start()

	server.applyMiddleware({ app })
}
