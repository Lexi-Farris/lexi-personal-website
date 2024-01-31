const menu = ["About Me", "Skills", "Projects", "Contact Info"];

const Header = () => {
  return (
    <div className="w-screen h-[50px] bg-blue-green-500 flex flex-row items-center gap-5 text-neutral-300 shadow-inner">
      {menu.map((menuTab, index) => (
        <h1 key={index} className="hover:text-warm-color-200 cursor-pointer">
          {menuTab}
        </h1>
      ))}
    </div>
  );
};

export default Header;
