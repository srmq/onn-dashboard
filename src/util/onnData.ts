interface IndexData {
    columns: ["isoInstant", "indexValue"];
    data: [[bigint, number]];
}

interface IndexInfo {
    file: string;
    name: string;
    desc: string;
}

interface ETFData {
    etfData: [IndexData];
    etfInfo: [IndexInfo];
}

interface PortData {
    portData: [IndexData];
    portInfo: [IndexInfo];
}


interface OnnData {
    etf?: ETFData;
    port?: PortData;
};

export default OnnData;