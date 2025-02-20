// types/index.ts

export interface NavItem {
    label: string;
    href: string;
  }
  
  export interface Statistic {
    label: string;
    value: string;
  }

  export interface Feature {
    title: string;
    description: string;
    icon?: string; // URL or CSS class (e.g., "fas fa-calendar-check" for Font Awesome)
  }
  
  // export interface Feature {
  //   title: string;
  //   description: string;
  //   icon: React.FC<{ className?: string }>;
  //   color: 'blue' | 'green' | 'purple';
  //   stats: Statistic[];
  //   benefits: string[];
  // }
  
  export interface Features {
    [key: string]: Feature;
  }