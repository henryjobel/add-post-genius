
import ClientDetails from '../ClientDetails/ClientDetails';
import ClientProfileCard from '../ClientProfileCard/ClientProfileCard';
import ClientaddTables from '../ClientsTable/ClientaddTables/ClientaddTables';

const ClientProfile = () => {
    return (
      <div>
          <div className='flex gap-3'>
            <div className='pt-10'>
            <ClientProfileCard></ClientProfileCard>
            </div>
            <div className='pt-10'>
                <ClientDetails></ClientDetails>
            <div className='pt-5'>
            <ClientaddTables></ClientaddTables>
            </div>
            
            </div>
        </div>
       
      </div>
    );
};

export default ClientProfile;