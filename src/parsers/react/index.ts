import { Definition, Prop, Type } from '../../definitions/types';

export default function ReactParser() {
  function buildComponentString(componentDef: Definition) {
    return `
        import React from 'react';
        ${createImportStyleString(componentDef)};
        ${createTypesString(componentDef)}
        ${createPropsString(componentDef)}
        ${createComponentString(componentDef)}
    `.replace(/[\r\n]/gm, '');
  }

  return {
    buildComponentString,
  };
}

function createImportStyleString(componentDef: Definition) {
  const stylesheet_classes = componentDef.stylesheet_classes;
  if (!stylesheet_classes) return '';

  return `import './styles.css'`;
}

function createTypesString(componentDef: Definition) {
  const types = componentDef.types;
  if (!types) return '';

  return `${types.map((type) => createTypeNewLine(type)).join('')}`;
}

function createTypeNewLine(type: Type) {
  return `type ${type.name} = ${type.values
    .map((val) => `'${val}'`)
    .join(' | ')};`;
}

function createPropsString(componentDef: Definition) {
  const props = componentDef.props;
  if (!props) return `interface ${componentDef.component_name}Props {};`;
  return `interface ${componentDef.component_name}Props {
        ${props.map((prop) => createPropNewLine(prop)).join('')}
    }`;
}

function createPropNewLine(prop: Prop) {
  return `${prop.name}${prop.optional ? '?' : ''}: ${prop.type};\n`;
}

function createComponentString(componentDef: Definition) {
  return `
        export default function ${componentDef.component_name}({
        ${createComponentPropsString(componentDef)}
        }:${componentDef.component_name}Props) {
            return null;
        }
    `;
}

function createComponentPropsString(componentDef: Definition) {
  const props = componentDef.props;
  if (!props) return '';
  return `${props.map((prop) => createComponentPropNewLine(prop)).join('')}`;
}

function createComponentPropNewLine(prop: Prop) {
  return `
        ${prop.name} ${prop.defaultValue ? `= '${prop.defaultValue}'` : ''},
    `;
}
