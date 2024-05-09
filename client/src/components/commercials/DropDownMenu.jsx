function DropDownMenu() {
  return (
    <>
      {/* Dropdown */}
      <div className="dropdown mb-10 mt-4">
        <select className=" bg-slate-800 rounded-full px-3 py-2 text-white md:text-xl text-sm">
          <option value="Hello1">Pågående Donationer</option>
          <option value="Hello2">Aktiva på stan just nu</option>
          <option value="Hello3">Reklamer på väg ut</option>
        </select>
      </div>
    </>
  );
}

export default DropDownMenu;
