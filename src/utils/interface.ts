export interface IButton {
  id: number;
  name: string;
}

export interface ISubMenu {
  text: string;
  path: string;
}

export interface IOptionsMenu {
  text: string;
  path: string;
  icon: string;
  svg: boolean;
  subMenu: ISubMenu[];
}
