import Modal from '../ui/Modal';
import SearchBar from '../ui/SearchBar';
import DetectLocation from '../ui/DetectLocation';
import PopularCities from './PopularCities';
import OtherCities from './OtherCities';

function Cities(): JSX.Element {
  return (
    <Modal rounded='' animation='animate-slide-bottom'>
      <div className='p-4'>
        <SearchBar placeholder='Search for your city' text='sm' />
      </div>

      <DetectLocation />

      <PopularCities />

      <OtherCities />
    </Modal>
  );
}

export default Cities;
