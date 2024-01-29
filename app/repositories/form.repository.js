import Form from "../models/form.model.js"

export async function getAll() {
    try {
        const forms = await Form.find({});

        return forms
    } 
    
    catch(error) {
        console.error('Repository error:', error.message);
    }
}

export async function getByTitle(title) {
    try {
        const form = await Form.find({ title: title });

        return form
    } 
    
    catch(error) {
        console.error('Repository error:', error.message);
        throw new Error('Error retrieving forms from the database');
    }
}

export async function create(fields) {
    try {
        const title = fields[0]

        const newFields = []
        for (let i = 1; i < fields.length; i++) {
            const currentField = fields[i];
            newFields.push({
                "label": currentField.inputLabel,
                "placeholder": currentField.inputPlaceholder,
                "answer": currentField.inputAnswer,
                "type": currentField.inputType,
            })

            if (Object.hasOwn(currentField, "choices")) {
                newFields[newFields.length - 1]["choices"] = currentField.choices;
            }
        }
                
        const form = new Form({
            title: title.inputTitle,
            description: title.inputDescription,
            fields: newFields
        });

        await form.save();
    } 
    
    catch(error) {
        console.error('Repository error:', error.message);
        throw new Error('Error retrieving forms from the database');
    }
}

export async function update() {
    try {
        return 'forms'
    } 
    
    catch(error) {
        console.error('Repository error:', error.message);
        throw new Error('Error retrieving forms from the database');
    }
}
