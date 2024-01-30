import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const submissionSchema = new Schema({
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

const Submission = model('Submission', submissionSchema);
export default Submission;