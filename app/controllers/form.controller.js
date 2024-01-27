import { getAll, get, update } from "../services/form.service";

export async function getAll(req, res) {
    try {
        const forms = await getAll();

        return res.status(200).json({ 'forms': forms })
    } 
    
    catch(error) {
        console.error('Controller error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function getByTitle(req, res) {
}   

export async function create(req, res) {
    
}

export async function update(req, res) {
}