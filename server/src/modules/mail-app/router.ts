import express from 'express';
import Email from '../../models/Email';

const router = express.Router();

 interface customResponse extends express.Response {
  email?: {} | undefined;
 }
router.get('/', async (req, res) => {
  try {
    const emails = await Email.find();
    res.json(emails);
  } catch (err:any) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', getEmail, (req, res:customResponse) => {
  res.json(res.email);
});

// Other CRUD routes for emails (POST, PUT, DELETE) would be implemented similarly

async function getEmail(req: express.Request, res:customResponse, next: express.NextFunction) {
  let email;
  try {
    email = await Email.findById(req.params.id);
    if (email == null) {
      return res.status(404).json({ message: 'Email not found' });
    }
  } catch (err:any) {
    return res.status(500).json({ message: err.message });
  }
  res.email = email;
  next();
}

export default router;
