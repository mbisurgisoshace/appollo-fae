import { writeFile } from 'fs';
import prettier from 'prettier';

import sectionDefinition from './src/definitions/Section/section.json';
import ReactParser from './src/parsers/react';

const componentString = ReactParser().buildComponentString(sectionDefinition);

writeFile(
  './src/generated/test.ts',
  prettier.format(componentString, {
    semi: false,
    parser: 'babel',
  }),
  (err) => {
    if (err) console.log(err);
  }
);
