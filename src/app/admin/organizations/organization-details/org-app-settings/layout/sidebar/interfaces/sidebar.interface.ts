interface SidebarTab {
    name: string;
    icon?: string;
    childrens?: SidebarTab[];
}

export interface SidebarTabs {
    mainMenu: SidebarTab[];
    systemManagement: SidebarTab[];
}
