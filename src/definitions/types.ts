export interface Definition {
  component_name: string;
  stylesheet_classes?: StylesheetClasse[];
  types?: Type[];
  props?: Prop[];
  ui: string;
}

export interface StylesheetClasse {
  selector: string;
  attributes: Record<string, string>;
}

export interface Type {
  name: string;
  values: string[] | number[] | boolean[];
}

export interface Prop {
  name: string;
  type: string;
  optional?: boolean;
  defaultValue?: string;
}
