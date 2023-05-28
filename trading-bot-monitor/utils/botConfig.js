import fs from 'fs';
import path from 'path';

const constantsFilePath = path.join(process.cwd(), 'programa/constants.py');

export function updateBotConfiguration(data) {
  try {
    const constantsContent = fs.readFileSync(constantsFilePath, 'utf-8');

    // Update the constants based on the provided data
    let updatedContent = constantsContent;
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        const regex = new RegExp(`(?<=${key} = ).*`);
        updatedContent = updatedContent.replace(regex, repr(value));
      }
    }

    // Write the updated constants back to the file
    fs.writeFileSync(constantsFilePath, updatedContent, 'utf-8');
  } catch (error) {
    console.error(error);
    throw new Error('Failed to update bot configuration');
  }
}

function repr(value) {
  if (typeof value === 'string') {
    return `"${value}"`;
  }
  return JSON.stringify(value);
}
