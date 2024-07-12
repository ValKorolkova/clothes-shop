import Filter from "./Filter";

const AllCategories = () => {
    return(<div className="categoryContainer"> 
        {['DRESS' ,'JACKET','SWEATER', 'ALL' ]
        .map(category => <Filter category={category} />)}
        
    </div>)
}
export default AllCategories;