const resolvers = {
  Query: {
    users: (_, args, { dataSources }, info) => {
      info.cacheControl.setCacheHint({ maxAge: 30, scope: "PUBLIC" });
      return dataSources.users.getUsers(args.q);
    },
  },
};

module.exports = resolvers;
