const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  // fetch raw data from the randomuser api
  const fetchRandomUser = () => axios.get(`http://demo4074294.mockable.io/eventGatsby`);
  // await for results
  const res = await fetchRandomUser();

  // map into these results and create nodes
  res.data.map((card, i) => {
    // Create your node object
    const cardNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `MyEvents`, // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],

      // Other fields that you want to query with graphQl
      name: card.name,
      photo: card.photo,
      description: card.description,
      date: card.date,
      duartion: card.duartion
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(cardNode))
      .digest(`hex`);
    // add it to userNode
    cardNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(cardNode);
  });

  return;
}