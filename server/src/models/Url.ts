import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
  origin: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
  },
});

const UrlModel = mongoose.model('Url', UrlSchema);

export { UrlModel };
