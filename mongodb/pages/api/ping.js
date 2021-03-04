import { connect } from 'utils/mongodb';

export default async (req, res) => {
    const { db } = await connect();
    res.status(200).send('pong');
}
