import mongoose, { Schema } from 'mongoose';

interface Email extends mongoose.Document {
  sender: string;
  subject: string;
  body: string;
}

const emailSchema = new Schema<Email>({
  sender: { type: String, required: true },
  subject: { type: String, required: true },
  body: { type: String, required: true },
});

const Email = mongoose.model<Email>('Email', emailSchema);

export default Email;
