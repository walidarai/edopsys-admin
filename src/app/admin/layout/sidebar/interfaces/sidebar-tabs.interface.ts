interface SidebarTab {
    name: string;
    icon?: string;
    link?: string;
    childrens?: SidebarTab[];
}

export interface SidebarTabs {
    mainMenu: SidebarTab[];
    systemManagement?: SidebarTab[];
}
