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

export async function update(answers, title) {
    try {
        const form = await Form.findOne({ title: title });

        if (!form) {
            throw new Error('Form not found');
        }

        for (let i = 0; i < answers.length;i++) {
            form.fields[i].answer = answers[i];
        }

        const updatedForm = await form.save();

        return updatedForm
    } 
    
    catch(error) {
        console.error('Repository error:', error.message);
        throw new Error('Error retrieving forms from the database');
    }
}
