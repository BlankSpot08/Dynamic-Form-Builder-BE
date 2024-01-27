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
            ref: 'Field'
        }
    ]
})

const Form = model('Form', formSchema);

export default Form;