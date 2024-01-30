import Submission from '../models/submission.model.js'
import { getByTitle } from './form.repository.js';
import Form from '../models/form.model.js';

export async function getAll() {
    try {
        const submissions = await Submission.find({});

        return submissions;
    }

    catch(error) {
        console.error('Repository error:', error.message);
        throw new Error('Error retrieving submissions from the database');
    }
}

export async function create(title, answers) {
    try {
        console.log(typeof answers)
        console.log(answers)
        const form = await Form.findOne({ title: title }).select('_id')
        
        const myAnswers = []
        for (let i = 0; i < answers.length; i++) {
            myAnswers.push(answers[i])
        }

        const submission = new Submission({
            form: form._id,
            answers: myAnswers,
        })

        await submission.save();

        return submission;
    }

    catch(error) {
        console.error('Repository error:', error.message);
        throw new Error('Error retrieving submissions from the database');
    }
}