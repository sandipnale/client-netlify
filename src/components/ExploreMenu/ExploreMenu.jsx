import React, { useRef } from 'react';
import { categories } from '../../assets/assets';
import './ExploreMenu.css'





const ExploreMenu = ({category,setCategory}) => {

    const menuRef = useRef(null);
    const scrollleft = () => {
        if (menuRef.current) {
            menuRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };


    const scrollRight = () => {
        if (menuRef.current) {
            menuRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };






    return (
        <div className="explore-menu position-relative">
            <h1 className="d-flex align-items-center justify-content-between">
                Explore Our Menu
                <div className="d-flex">
                    <i className='bi bi-arrow-left-circle scroll-icon' onClick={scrollleft}></i>
                    <i className='bi bi-arrow-right-circle scroll-icon' onClick={scrollRight}></i>
                </div>

            </h1>
            <p>Expore curated lists of veggies from top categories</p>
            <div className="d-flex justify-content-betweeb gap-4 overflow-auto explore-menu-list"ref={menuRef}>
                {
                    categories.map((item, index) => {
                        return (
                            <div key={index} className="text-center explore-menu-list-item" onClick={()=>setCategory(prev=>prev===item.category ? 'All':item.category)}>
                                <img src={item.icon} alt="" className={item.category===category ? 'rounded-circle active':'rounded-circle'} height={145} width={145} />
                                <p className='mt-2 fw-bold' > {item.category}</p>
                            </div>
                        )
                    })
                }
            </div>
                <hr />
        </div>
    )
}

export default ExploreMenu;