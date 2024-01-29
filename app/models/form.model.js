import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const formSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    fields: [   
        {
            label: { 
                type: String,
                required: true
             },
             placeholder: {
                type: String,
             },
             answer: {
                type: String,
             },
             choices: {
                types: [String],
             }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Form = model('Form', formSchema);
export default Form;