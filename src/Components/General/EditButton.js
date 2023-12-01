function EditButton({ bgColor, textColor }) {
  return (
    <div className="flex justify-between items-center gap-5">
      <img
        src="/images/edit.png"
        className={`${bgColor ? bgColor : "base-bg"} rounded-lg  text-center p-1 h-10 w-10 cursor-pointer`}
        alt=""
      />
      <span className={`${textColor ? textColor : "base-color"} text-2xl font-medium`}>Edytuj</span>
    </div>
  );
}

export default EditButton;
