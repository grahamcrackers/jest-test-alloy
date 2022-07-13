import { createInstance } from '@adobe/alloy';
import { AlloyInstance } from './interfaces/alloy.types';

const alloyInstance: AlloyInstance = createInstance({ name: 'alloy' });


export const getInstance = () => {
    return alloyInstance;
}

/**
 * sends event payload that matches the BeaconSchema that's been defined
 */
export const sendEvent = async (schema: any): Promise<void> => {
  try {
    // const instance = await alloyInstance();

    // // attach identity field
    // const result: AlloyIndentity = (await instance("getIdentity")) as AlloyIndentity;
    // schema.personID = result.identity.ECID || "unknown";

    const xdm = { xdm: { ...schema } };

    // send async
    alloyInstance('sendEvent', xdm);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('sendEvent error:', error);
  }
};