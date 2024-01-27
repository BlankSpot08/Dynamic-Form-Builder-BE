import Form from "../models/form.model"

export async function getAll() {
    try {
        const forms = await Form.find({});

        return forms
    } 
    
    catch(error) {
        console.error('Repository error:', error.message);
        throw new Error('Error retrieving forms from the database');
    }
}

export async function get() {
    try {

    } 
    
    catch(error) {

    }
}

export async function update() {
    try {

    } 
    
    catch(error) {

    }
}