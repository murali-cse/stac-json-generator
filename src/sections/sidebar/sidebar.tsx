import { Icon } from "@iconify/react/dist/iconify.js";

const SideBarCard = ({ path, label }: { path: string; label: string }) => {
  return (
    <>
      <div className="px-3 py-2 hover:bg-blue-50 rounded-md cursor-pointer">
        <a href={path} className="text-gray-500 text-sm">
          {label}
        </a>
      </div>
    </>
  );
};

const Sidebar = () => {
  const _routes: { path: string; label: string }[] = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <div className="px-4 py-6">
        <div className="flex items-center mb-6">
          <h2 className="text-lg font-bold">Screens</h2>
          <div className="cursor-pointer ml-auto border-2 border-gray-300 p-1 rounded-md">
            <Icon icon="tabler:plus" width="24" height="24" />
          </div>
        </div>
        <ul className="space-y-2">
          {_routes.map((route) => (
            <li key={route.path} className="mb-0">
              <SideBarCard path={route.path} label={route.label} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
