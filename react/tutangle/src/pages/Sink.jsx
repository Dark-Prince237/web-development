const NavItem = ({className, children}) => {
    return <div className={`bg-blue-300 px-4 py-2 h-min ${className}`}>{children}</div>
}

const MobileNavBar = ({className}) => {
    return <navbar className={`h-32 bg-blue-100 flex flex-col gap-4 px-8 ${className}`}>
        <div className={"flex gap-4 flex-1 justify-between"}>
            <NavItem>Logo</NavItem>
            <NavItem>Sample</NavItem>
            <NavItem>Sample</NavItem>
            <NavItem>Sample</NavItem>
        </div>
        <NavItem className={"flex-1"}>
            <div className={"flex gap-4 flex-1"}>
                <input type="text" placeholder={"enter your search query"} class="w-full"/>
                <button className={"bg-blue-500 text-blue-100 px-4 py-2"}>Search</button>
            </div>
        </NavItem>
    </navbar>
};

const DesktopNavBar = ({className}) => {
    return <navbar className={`h-20 bg-blue-100 flex gap-4 items-center space-between px-8 ${className}`}>
        <NavItem>Logo</NavItem>
        <NavItem className={"flex-1"}>
            <div className={"flex gap-4 flex-1"}>
                <input type="text" placeholder={"enter your search query"} class="w-full"/>
                <button className={"bg-blue-500 text-blue-100 px-4 py-2"}>Search</button>
            </div>
        </NavItem>
        <div className={"flex gap-4"}>
            <NavItem>Sample</NavItem>
            <NavItem>Sample</NavItem>
            <NavItem>Sample</NavItem>
        </div>
    </navbar>
}

const NavBar = () => {
    return <>
        <DesktopNavBar className={"hidden md:flex"} />
        <MobileNavBar className={"visible md:hidden"}/>
    </>
};

const Sink = () => {
    return <div className={"flex flex-col gap-4"}>
        <div className={"text-2xl"}>Hi, this is Sink</div>

        <p>Desktop NavBar</p>
        <DesktopNavBar />
        <p>Mobile NavBar</p>
        <MobileNavBar />
        <p>Responsive NavBar</p>
        <NavBar />
    </div>
};

export default Sink;