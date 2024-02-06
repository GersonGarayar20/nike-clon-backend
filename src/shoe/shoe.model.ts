import { Schema, model } from 'mongoose'

const shoeSchema = new Schema({
  name: String,
  brand: String,
  description: String,
  price: Number,
  discount: Number,
  images: [String],
  category: String,
  sizes: [Number],
  colors: [String],
  gender: String,
  isNewArrival: Boolean,
  isBestSeller: Boolean,
},
{
  timestamps: false,
  versionKey: false,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
    },
    getters: true
  }
})

shoeSchema.virtual('discountedPrice').get(function() {
  return this.price - (this.price * this.discount / 100);
});

export const ShoeModel = model('Shoe', shoeSchema)