import * as Name from 'w3name';

const ONNW3NAME = 'k51qzi5uqu5dibal65uwf8rwueg6omegfe193j7e6qh0ynzz4yi3dv3hq6b8q1';
const suffixIPFSHttp = '.ipfs.w3s.link/onn-ipfs-dailyupdate';

async function getLatestRevision() {
    const name = Name.parse(ONNW3NAME);
    const revision = await Name.resolve(name);
    return revision;
}

async function getIPFSJSONObj(url) {
    const res = await fetch(url);
    if (!res.ok) {
        console.log('failed to fetch json from ipfs');
        console.log(res.body);
        return null;
    }
    return res.json();
}

async function fetchETFData(lastCID) {
    const etfIndexInfoArray = await getIPFSJSONObj('https://' + lastCID + suffixIPFSHttp + '/index-files.json');
    const etfDataArrayPromises = []
    for (const etfInfo of etfIndexInfoArray) {
        const fileName = etfInfo.file;
        etfDataArrayPromises.push(getIPFSJSONObj('https://' + lastCID + suffixIPFSHttp + '/' + fileName));
    }
    const etfDataArray = await Promise.all(etfDataArrayPromises);
    return {etfInfo: etfIndexInfoArray, etfData: etfDataArray};
}

async function fetchPortfolioData(lastCID) {
    const portInfoArray = await getIPFSJSONObj('https://' + lastCID + suffixIPFSHttp + '/portfolio-files.json');
    const portDataArrayPromises = [];
    for (const portInfo of portInfoArray) {
        const fileName = portInfo.file;
        portDataArrayPromises.push(getIPFSJSONObj('https://' + lastCID + suffixIPFSHttp + '/' + fileName));
    }
    const portDataArray = await Promise.all(portDataArrayPromises);
    return {portInfo: portInfoArray, portData: portDataArray};
}


export async function fetchONNData() {
    const revision = await getLatestRevision();
    const lastCID = revision.value;
    console.log('Latest CID was: ', lastCID);
    const etfAndPort = [];
    etfAndPort.push(fetchETFData(lastCID));
    etfAndPort.push(fetchPortfolioData(lastCID));
    const resultArray = await Promise.all(etfAndPort);
    return {etf: resultArray[0], port: resultArray[1]};
}