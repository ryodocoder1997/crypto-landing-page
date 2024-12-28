export type MenuItem = {
    url: string;
    name: string;
    isDisable?: boolean;
  };
  
export type MenuGroup = {
    name: string;
    url?: string;
    items: MenuItem[];
  };
