import * as submissionRepository from '../repositories/submission.repository.js'

export async function getAll() {
    try {
        const forms = await submissionRepository.getAll();

        return forms;
    }
    
    catch(error) {
        console.error('Service error:', error.message);
        throw new Error('Error in SubmissionService');
    }
}

export async function create(title, answers) {
    try {
        const forms = await submissionRepository.create(title, answers);

        return forms;
    }
    
    catch(error) {
        console.error('Service error:', error.message);
        throw new Error('Error in SubmissionService');
    }
}