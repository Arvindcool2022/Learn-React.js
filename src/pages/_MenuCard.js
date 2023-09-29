const MenuCard = ({ info }) => {
  const { name, price, defaultPrice, description, category, imageId } =
    info?.card?.info;

  const formattedPrice = price / 100 || defaultPrice / 100;
  const formattedDescription = description || category;

  if (name && formattedPrice && formattedDescription && imageId) {
    return (
      <div className="my-6 p-4 flex justify-between rounded-xl shadow-md">
        <div>
          <h3 className="oswald text-2xl mb-0">{name}</h3>
          <p className="mt-2 mb-6 font-medium">Rs.{formattedPrice}</p>
          <p className="text-xs opacity-75">{formattedDescription}</p>
        </div>
        <div className="relative rounded-xl overflow-hidden">
          <img
            src={
              'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/' +
              imageId
            }
          />
          <button className="absolute font-bold whitespace-nowrap py-2 px-4 bg-white outline-none  rounded-lg bottom-2 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in hover:bg-gray-500 hover:text-white">
            Add <small>+</small>
          </button>
        </div>
      </div>
    );
  } else {
    console.log('Card data is incomplete:', {
      name,
      formattedPrice,
      formattedDescription,
      imageId
    });
    return null;
  }
};

export default MenuCard;
