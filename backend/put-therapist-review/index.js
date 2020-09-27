const MongoClient = require('mongodb').MongoClient;
const auth = {
  user: 'ratemytherapistshellhacks',
  password: process.env.db_password
};

const loadDB = async () => {
  const client = await MongoClient.connect(
    `mongodb://ratemytherapistshellhacks.mongo.cosmos.azure.com:10255/?ssl=true`,
    {
      auth: auth
    }
  );
  return client.db('Database');
};

module.exports = async function(context, req) {
  // TODO: more validation on req.params.therapistId and req.body
  try {
    const database = await loadDB();
    let therapists = await database
      .collection('Therapist')
      .findOneAndUpdate(
        { _id: req.params.therapistId },
        { $push: { "reviews": req.body } },
        { returnNewDocument: true },
      );
    context.res = {
      body: therapists
    };
  } catch (error) {
    context.log(`Error code: ${error.code} message: ${error.message}`);
    context.res = {
      status: 500,
      body: { message: 'An error has occured, please try again later' }
    };
  }
};
