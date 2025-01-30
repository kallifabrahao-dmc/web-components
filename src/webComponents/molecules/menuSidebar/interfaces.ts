interface ISubMenu {
  text: string;
  path: string;
}

interface IOptionsMenu {
  text: string;
  path: string;
  icon: string;
  svg: boolean;
  subMenu: ISubMenu[];
}

export type { IOptionsMenu, ISubMenu };
