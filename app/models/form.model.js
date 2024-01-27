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
        required: false
    },
    fields: [   
        {
            label: { 
                type: String,
                required: true
             },
             placeholder: {
                type: String,
                required: false
             },
             answer: {
                type: String,
                required: false
             },
             choices: {
                types: [String],
                required: false
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