import React from "react";
import {useProductContext} from "../Context/ProductContext";

const Sidebar = () => {
  const {dispatch} = useProductContext();
  return (
    <aside className='w-72'>
      <div className='px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800'>
        <h3 className='text-xl font-semibold'>Filters</h3>
        <div className='my-4'>
          <p className='my-2 text-lg'>For:</p>
          <div className='flex flex-row'>
            <div onClick={() => dispatch({type: "FILTER_CATEGORY", payload: "men"})}>
              <input type='checkbox' id='gen1' name='gen1' value='Men' />
              <label htmlFor='Men'> Men</label>
            </div>
            <div className='ml-4' onClick={() => dispatch({type: "FILTER_CATEGORY", payload: "women"})}>
              <input type='checkbox' id='gen2' name='gen2' value='Women' />
              <label htmlFor='Women'> Women</label>
            </div>
          </div>
        </div>
        <div className='my-4'>
          <p className='my-2 text-lg'>Brand:</p>
          <div className='flex flex-row'>
            <div onClick={() => dispatch({type: "FILTER_BRAND", payload: "nike"})}>
              <input type='checkbox' id='brand1' name='brand1' value='Nike' />
              <label htmlFor='Nike'> Nike</label>
            </div>
            <div className='ml-4' onClick={() => dispatch({type: "FILTER_BRAND", payload: "zara"})}>
              <input type='checkbox' id='brand2' name='brand2' value='Zara' />
              <label htmlFor='Zara'> Zara</label>
            </div>
            <div className='ml-4' onClick={() => dispatch({type: "FILTER_BRAND", payload: "wildstore"})}>
              <input type='checkbox' id='brand3' name='brand3' value='WildStore' />
              <label htmlFor='WildStore'> WildStore</label>
            </div>
          </div>
        </div>
        <div className='my-4'>
          <p className='my-2 text-lg'>Sizes:</p>
          <div className='flex flex-row'>
            <div onClick={() => dispatch({type: "FILTER_SIZE", payload: "s"})}>
              <input type='checkbox' id='1' name='1' value='S' />
              <label htmlFor='S'> S</label>
            </div>
            <div className='ml-4' onClick={() => dispatch({type: "FILTER_SIZE", payload: "m"})}>
              <input type='checkbox' id='2' name='2' value='M' />
              <label htmlFor='M'>M</label>
            </div>
            <div className='ml-4' onClick={() => dispatch({type: "FILTER_SIZE", payload: "l"})}>
              <input type='checkbox' id='3' name='3' value='L' />
              <label htmlFor='L'>L</label>
            </div>
            <div className='ml-4' onClick={() => dispatch({type: "FILTER_SIZE", payload: "xl"})}>
              <input type='checkbox' id='4' name='4' value='XL' />
              <label htmlFor='XL'>XL</label>
            </div>
          </div>
          <h3 className='my-4 text-xl font-semibold'>Sort By:</h3>
          <div className='my-4'>
            <div className='flex flex-row'>
              <div onClick={() => dispatch({type: "FILTER_PRICE_LOW"})}>
                <input type='radio' id='price1' name='price1' value='Price: Low to High' />
                <label htmlFor='Price: Low to High'> Price: Low to High</label>
              </div>
              <div className='ml-4' onClick={() => dispatch({type: "FILTER_PRICE_HIGH"})}>
                <input type='radio' id='price2' name='price2' value='Price: High to Low' />
                <label htmlFor='Price: High to Low'> Price: High to Low</label>
              </div>
            </div>
          </div>
          <button
            onClick={() => dispatch({type: "FILTER_RESET"})}
            className='px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700'
          >
            Clear Filters
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
