import { IPFSAPI }  from "../config/CONSTANTS"

export const pinFileToIpfs = async (customHeader: any, file: any) => {
    try {
        let formdata = new FormData();
        formdata.append("file", file);
        const response = await fetch(`${IPFSAPI}/pinFileToIPFS`, {
            method: 'POST',
            headers: customHeader,
            body: formdata,
            redirect: 'follow',
        });
        const responseJson = await response.json();
        return responseJson.IpfsHash;
    }
    catch (err) {
        console.error(err);
    }
};

export const pinJsonToIpfs = async (customHeader: any, name: string, description: string, audio: any) => {
    try {
        const response = await fetch(`${IPFSAPI}/PinJSONToIPFS`, {
            method: 'POST',
            headers: customHeader,
            body: JSON.stringify({
                pinataMetadata: {
                  name: 'Snoi Music NFT',
                },
                pinataContent: {
                  name: `${name}`,
                  descriptions: `${description}`,
                  file: `ipfs://${audio}`
                }
              }),
            redirect: 'follow',
        });
        const responseJson = await response.json();  
        return responseJson.IpfsHash;
      } catch (err) {
        console.error(err);
      }
};