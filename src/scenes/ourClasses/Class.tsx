type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  return (
    <li className="relative inline-block h-64 w-full overflow-hidden">
      <div className="absolute z-30 flex h-72 w-full flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90">
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img
        className="w-full h-full object-cover"
        alt={`${image}`}
        src={image}
      />
    </li>
  );
};

export default Class;
