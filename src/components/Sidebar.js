import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { BsFillTrash2Fill } from "react-icons/bs";

import CartItem from "../components/CartItem";
//import sidebar context

import { SidebarContext } from "../contexts/SidebarContext";
//import caret context

import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Nakupný košík (0)</div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className=" flex flex-col  gap-y-3 mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-bold">
            <span className="mr-1">Spolu:</span> € {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="flex justify-center items-center text-xl cursor-pointer py-4 bg-gray-700 text-white w-12 h-12"
          >
            <BsFillTrash2Fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
