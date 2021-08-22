/** @API Auth API * */

import HttpClient from '../utils/HttpClient';

const client = new HttpClient();

/**
 * Get list of currencies
 * @returns {Promise<AxiosResponse<*>>}
 */
export const getCurrencies = (params) => client.request('GET', 'currencies', null, params);