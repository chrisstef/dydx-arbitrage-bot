import updateBotConfiguration from '../../utils/botConfig';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { data } = req.body;
      updateBotConfiguration(data);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
