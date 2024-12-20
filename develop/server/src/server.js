import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'url';
import db from './config/connection.js'; // Ensure your db connection is correct
// New Apollo Server import
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs, resolvers } from './schemas/index.js';
import { authenticateToken } from './utils/auth.js';
import dotenv from 'dotenv';
dotenv.config();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const startApolloServer = async () => {
    try {
        await server.start();
        // Call db() function for the MongoDB connection
        await db();
        const PORT = process.env.PORT || 3001;
        const app = express();
        app.use(express.urlencoded({ extended: false }));
        app.use(express.json());
        if (process.env.NODE_ENV === 'production') {
            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);
            app.use(express.static(path.join(__dirname, '../../client/dist')));
            app.get('*', (_req, res) => {
                res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
            });
        }
        // Use Apollo server as middleware
        app.use('/graphql', expressMiddleware(server, {
            context: authenticateToken,
        }));
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
        });
    }
    catch (error) {
        console.error('Error starting the server:', error);
    }
};
// Start the Apollo Server
startApolloServer();
