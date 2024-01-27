import { getAll, get, update } from "../repositories/form.repository";

export async function getAll() {
    try {
        const forms = await getAll();

        return forms;
    } 
    
    catch(error) {
        console.error('Service error:', error.message);
        throw new Error('Error in UserService');
    }
}

export function get() {
    try {

    } 
    
    catch(error) {

    }
}

export function update() {
    try {

    } 
    
    catch(error) {

    }
}