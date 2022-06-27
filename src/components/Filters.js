import { Link } from 'react-router-dom'
import '../css/Filter.css'


const Filters = () => {
    
    return (
        <form className="filters">
            <h2>Filters</h2>

            <div className="filter-options">
                <fieldset>
                    <legend>Color</legend>
                    <ul className="filter-list">
                        <li>
                            <Link to={'/color/white'}>
                                <input type="checkbox" name="color" id="white" value="white" /> <label htmlFor="white"> White </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/color/yellow'}>
                                <input type="checkbox" name="color" id="yellow" value="yellow" /> <label htmlFor="yellow"> Yellow </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/color/purple'}>
                                <input type="checkbox" name="color" id="purple" value="purple" /> <label htmlFor="purple"> Purple </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/color/green'}>
                                <input type="checkbox" name="color" id="green" value="green" /> <label htmlFor="green"> Green </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/color/black'}>
                                <input type="checkbox" name="color" id="black" value="black" /> <label htmlFor="black"> Black </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/color/brown'}>
                                <input type="checkbox" name="color" id="brown" value="brown" /> <label htmlFor="brown"> Brown </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/color/grey'}>
                                <input type="checkbox" name="color" id="grey" value="grey" /> <label htmlFor="grey"> Grey </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/color/orange'}>
                                <input type="checkbox" name="color" id="orange" value="orange" /> <label htmlFor="orange"> Orange </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/color/red'}>
                                <input type="checkbox" name="color" id="red" value="red" /> <label htmlFor="red"> Red </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/color/beige'}>
                                <input type="checkbox" name="color" id="beige" value="beige" /> <label htmlFor="beige"> Beige </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/color/pink'}>
                                <input type="checkbox" name="color" id="pink" value="pink" /> <label htmlFor="pink"> Pink </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/color/gold'}>
                                <input type="checkbox" name="color" id="gold" value="gold" /> <label htmlFor="gold"> Gold </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/color/blue'}>
                                <input type="checkbox" name="color" id="blue" value="blue" /> <label htmlFor="blue"> Blue </label>
                            </Link>        
                        </li>
                    </ul>
                </fieldset>

                <fieldset>
                    <legend>Sizes</legend>
                    <ol className="filter-list">
                        <li>
                            <Link to={'/size/4.0'}>
                                <input type="checkbox" name="size" id="4.0" value="4.0" /> <label htmlFor="4.0"> 4.0 </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/size/4.5'}>
                                <input type="checkbox" name="size" id="4.5" value="4.5" /> <label htmlFor="4.5"> 4.5 </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/size/6.0'}>
                                <input type="checkbox" name="size" id="6.0" value="6.0" /> <label htmlFor="6.0"> 6.0 </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/size/6.5'}>
                                <input type="checkbox" name="size" id="6.5" value="6.5" /> <label htmlFor="6.5"> 6.5 </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/size/7.0'}>
                                <input type="checkbox" name="size" id="7.0" value="7.0" /> <label htmlFor="7.0"> 7.0 </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/size/8.0'}>
                                <input type="checkbox" name="size" id="8.0" value="8.0" /> <label htmlFor="8.0"> 8.0 </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/size/8.5'}>
                                <input type="checkbox" name="size" id="8.5" value="8.5" /> <label htmlFor="8.5"> 8.5 </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/size/9.0'}>
                                <input type="checkbox" name="size" id="9.0" value="9.0" /> <label htmlFor="9.0"> 9.0 </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/size/9.5'}>
                                <input type="checkbox" name="size" id="9.5" value="9.5" /> <label htmlFor="9.5"> 9.5 </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/size/10'}>
                                <input type="checkbox" name="size" id="10" value="10" /> <label htmlFor="10"> 10 </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/size/11'}>
                                <input type="checkbox" name="size" id="11" value="11" /> <label htmlFor="11"> 11 </label>
                            </Link>        
                        </li>
                    </ol>
                </fieldset>
                
                <fieldset>
                    <legend>Brands</legend>
                    <ol className="filter-list">
                        <li>
                            <Link to={'/search/Nike'}>
                                <input type="checkbox" name="brand" value="Nike" id="Nike" /> <label htmlFor="Nike"> Nike </label>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/search/Adidas'}>
                                <input type="checkbox" name="brand" value="Adidas" id="Adidas" /> <label htmlFor="Adidas" > Adidas </label>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/search/Puma'}>
                                <input type="checkbox" name="brand" value="Puma" id="Puma" /> <label htmlFor="Puma" > Puma </label>
                            </Link>        
                        </li>
                        <li>
                            <Link to={'/search/Under'}>
                                <input type="checkbox" name="brand" value="UnderArmor" id="UnderArmor" /> <label htmlFor="UnderArmor" > Under Armor </label>
                            </Link>        
                        </li>
                    </ol>
                </fieldset>
            </div>

            {/* <fieldset className="sort">
            <label htmlFor="sort">Sort By</label>
            <select name="sort" id="sort">
                <option value="price-high">Price: High-Low</option>
                <option value="price-low">Price: Low-High</option>
                <option value="newest">Newest</option>
            </select>
            </fieldset> */}

        </form>
    )
}

export default Filters