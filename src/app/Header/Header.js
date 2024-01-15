import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-evenly items-center mt-30">
    <Link href="/recipeAdd" className="text-2xl text-red-400 border-x-cyan-50 hover:text-red-600 hover:border-red-600 hover:bg-red-100 ">
        Create New Recipe
    </Link>
    <Link href="/ADD" className="text-2xl text-blue-400 border-x-cyan-50 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-100">
        Display a list of recipes
    </Link>
    
    
</div>



  );
};

export default Header;
