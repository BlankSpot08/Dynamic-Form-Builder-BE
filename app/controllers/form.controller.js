import * as formService from '../services/form.service.js'

export async function getAll(req, res) {
    try {
        const forms = await formService.getAll();

        return res.status(200).json({ 'forms': forms })
    } 
    
    catch(error) {
        console.error('Controller error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function getByTitle(req, res) {
    try {
        const { title } = req.params
        
        const form = await formService.getByTitle(title);

        return res.status(200).json({ 'form': form })
    } 
    
    catch(error) {
        console.error('Controller error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}   

export async function create(req, res) {
    try {
        const { fields } = req.body

        const create = await formService.create(fields);

        res.status(200).json({"message": "Created successfully."})
    }

    catch(error) {
        console.error('Controller error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function update(req, res) {
}