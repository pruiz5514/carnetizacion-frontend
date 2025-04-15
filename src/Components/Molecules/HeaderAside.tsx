
interface IHeaderAside{
    closeAside: ()=>void;
    children: React.ReactNode
}

const HeaderAside: React.FC<IHeaderAside> = ({closeAside, children}) => {
  return (
    <div className="w-full h-[100vh] fixed z-50 flex left-0 top-0">
        <div onClick={closeAside} className="w-1/3 h-full bg-shadowBG">

        </div>
        <aside className="w-2/3 h-full bg-royalBlue py-8 px-6">
            <ul className="flex flex-col gap-5 text-white">
                {children}
            </ul>
        </aside>
    </div>
  )
}

export default HeaderAside