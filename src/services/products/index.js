import { promisify } from '../../utils/promisify';
import { fetchData } from './products';

export default promisify(fetchData);
