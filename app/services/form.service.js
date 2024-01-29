import * as formRepository from '../repositories/form.repository.js';

export async function getAll() {
    try {
        const forms = await formRepository.getAll();

        return forms;
    }
    
    catch(error) {
        console.error('Service error:', error.message);
        throw new Error('Error in UserService');
    }
}

export async function getByTitle(title) {
    try {
        const form = await formRepository.getByTitle(title);

        return form;
    } 
    
    catch(error) {
        console.error('Service error:', error.message);
        throw new Error('Error in UserService');
    }
}

export async function create(fields) {
    try {
        const create = await formRepository.create(fields);

        return create
    } 
    
    catch(error) {
        console.error('Service error:', error.message);
        throw new Error('Error in UserService');
    }
}

export async function update(answers, title) {
    try {
        const update = await formRepository.update(answers, title);

        return update;
    } 
    
    catch(error) {
        console.error('Service error:', error.message);
        throw new Error('Error in UserService');
    }
}