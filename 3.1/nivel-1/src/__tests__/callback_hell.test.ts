import * as fs from 'fs';

import { processFiles, outbox } from '../callback_hell';

// General validations

describe('processFiles', () => {
  it('should create a file in the outbox directory with content "dlrow olleh"', async () => {
    await processFiles();

    const filePath = outbox + '/text.txt';
    const expectedContent = 'dlrow olleh';

    const fileContent = fs.readFileSync(filePath, 'utf-8');

    expect(fileContent).toEqual(expectedContent);
  });
});
