
import FilterCheckbox from '../../Components/Checkbox/FilterCheckbox';
import ClientsTable from '../../Components/ClientsTable/ClientsTable';
import Pagination from '../../Components/Pagination/Pagination';


const Client = () => {
    return (
        <div>
            <div className='flex  gap-10'>
            <FilterCheckbox></FilterCheckbox>
           <div className='pt-10'>
            <ClientsTable></ClientsTable>
           </div>
        </div>
        <div>
            <Pagination></Pagination>
        </div>
        </div>
    );
};

export default Client;
