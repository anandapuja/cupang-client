import type { CartCard } from "../utils/Type";

const CartCard = ({ datas }: { datas: CartCard }) => {
  return datas.map((data, index: number) => (
    <div className="sm:flex w-full items-center p-2 border-b" key={index}>
      <div className="w-1/5">
        <img src={data.image} className="w-1/2 m-auto rounded-lg" />
      </div>
      <div className="w-4/5 sm:flex items-center">
        <div className="w-1/4">
          <h3 className="sm:text-xl font-bold text-sky-600 transition">
            {data.name}
          </h3>
        </div>
        <div className="w-1/4">{data.quantity}</div>
        <div className="w-1/4">{data.price}</div>
        <div className="w-1/4">{data.total}</div>
      </div>
    </div>
  ));
};

export default CartCard;
