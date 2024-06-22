type CategoryItemProps = {
  id: string;
  title: string;
  img: string;
};

const CategoryItem = ({ title, img }: CategoryItemProps) => {
  return (
    <div className="relative border border-gray-300 rounded-3xl h-60 w-full max-w-[300px] ">
        <div className="flex justify-center">
      <img
        className="absolute lg:w-20 max-w-[60%] max-h-[200px] bottom-14 "
        src={img}
        alt=""
      />
        </div>
      <div className="flex justify-center absolute bottom-4 w-full">
      <p>{title}</p>
      </div>

    </div>
  );
};
export default CategoryItem;
