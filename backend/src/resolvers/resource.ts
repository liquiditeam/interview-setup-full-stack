import * as db from 'zapatos/db';
import { Resolvers } from '../generated/graphql';

export const resourceResolver: Resolvers = {
  Query: {
    async resource(parent, args, context, info) {
      return await db.selectExactlyOne('resources', { id: args.id }).run(context.pool);
    },
  },
};
