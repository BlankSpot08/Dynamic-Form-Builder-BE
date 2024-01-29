import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const formSchema = new Schema({
    form: {
        type: Schema.Types.ObjectId,
        ref: 'Form'
    },
    answers: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Form = model('Submission', formSchema);
export default Form;