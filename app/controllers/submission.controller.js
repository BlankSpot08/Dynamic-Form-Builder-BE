import * as submissionService from '../services/submission.service.js'

export async function getAll(req, res) {
    try {
        const submissions = await submissionService.getAll();

        return res.status(200).json({ 'submissions': submissions })
    }
    
    catch(error) {
        console.error('Controller error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function create(req, res) {
    try {
        
        const { title } = req.query
        const { answers } = req.body
        
        console.log(req.body)
        console.log(req.query)
        
        const submissions = await submissionService.create(title, answers);

        return res.status(200).json({ submissions })
    }
    
    catch(error) {
        console.error('Controller error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}