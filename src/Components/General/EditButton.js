function EditButton() {
  return (
    <div className="flex justify-between items-center gap-5">
      <img
        src="/images/edit.png"
        className="base-bg rounded-lg  text-center p-1 h-10 w-10 cursor-pointer"
        alt=""
      />
      <span className="base-color text-2xl font-medium">Edytuj</span>
    </div>
  );
}

export default EditButton;
