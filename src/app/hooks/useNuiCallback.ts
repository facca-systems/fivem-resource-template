import { isEnvBrowser, sleep } from '@app/utils/misc';

const resourceName = (window as any).GetParentResourceName
  ? (window as any).GetParentResourceName()
  : 'zs-boilerplate';

export async function useNuiCallback<CallbackResultType>(
  path: string,
  data?: any,
  mockData?: CallbackResultType,
  delay?: number,
): Promise<CallbackResultType> {
  if (isEnvBrowser() && mockData) {
    if (delay) {
      await sleep(delay);

      return mockData;
    }

    return mockData;
  }

  try {
    const options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    };

    const resp = await fetch(`https://${resourceName}/${path}`, options);
    const respFormatted = await resp.json();

    return respFormatted;
  } catch (error: any) {
    throw new Error(error);
  }
}
