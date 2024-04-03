function DropDownMenu() {
  return (
    <>
      {/* Dropdown */}
      <div className="dropdown mb-10 mt-4">
        <select className=" bg-slate-800 rounded-full px-3 py-2 text-white text-sm">
          <option value="Hello1">Populära</option>
          <option value="Hello2">Mål snart nått</option>
          <option value="Hello3">Senast tillagda</option>
        </select>
      </div>
    </>
  );
}

export default DropDownMenu;
