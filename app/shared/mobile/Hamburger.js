const Hamburger = ({ isClicked, setIsclicked }) => {
  return (
    <div
      className="flex flex-col gap-[5px] burger-menu"
      onClick={() => setIsclicked(!isClicked)}
    >
      <span
        className={`w-[20px] h-[2px] bg-black up transition-all ${
          isClicked ? `active` : ""
        }`}
      ></span>
      <span
        className={`w-[20px] h-[2px] bg-black middle transition-all ${
          isClicked ? `active` : ""
        }`}
      ></span>
      <span
        className={`w-[20px] h-[2px] bg-black down transition-all ${
          isClicked ? `active` : ""
        }`}
      ></span>
    </div>
  );
};

export default Hamburger;
