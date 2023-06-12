export interface BotAgent {
    market_1: string;
    market_2: string;
    hedge_ratio: number;
    z_score: number;
    half_life: number;
    order_id_m1: string;
    order_m1_size: string;
    order_m1_side: string;
    order_time_m1: string;
    order_id_m2: string;
    order_m2_size: string;
    order_m2_side: string;
    order_time_m2: string;
    pair_status: string;
    comments: string;
}

export const mockData: BotAgent[] = [
    {
        market_1: "FIL-USD",
        market_2: "MATIC-USD",
        hedge_ratio: 5.382451131225034,
        z_score: 1.6134881645140708,
        half_life: 14.0,
        order_id_m1: "34e251d274904165ff6e40debd9ff62b82073c63091066b572dfe8cfec98513",
        order_m1_size: "29.9",
        order_m1_side: "SELL",
        order_time_m1: "2023-06-12T10:20:45.727736",
        order_id_m2: "3e107069749bdc1239a594a9ec18ea64b8b2f40f7735769fd89e94566efafd7",
        order_m2_size: "159",
        order_m2_side: "BUY",
        order_time_m2: "2023-06-12T10:21:04.398441",
        pair_status: "LIVE",
        comments: ""
    },
    {
        market_1: "SNX-USD",
        market_2: "COMP-USD",
        hedge_ratio: 0.0660543533829144,
        z_score: 3.6543845979663208,
        half_life: 13.0,
        order_id_m1: "0a71db23920400bb4dc6d0943dd0eb5918040c72589cdb1e88728a467600bbe",
        order_m1_size: "56.4",
        order_m1_side: "SELL",
        order_time_m1: "2023-06-12T10:38:02.280983",
        order_id_m2: "0b2ca20ed307de701691c8df6ca69d90795cc534ac71029b12235677d6e807e",
        order_m2_size: "3.82",
        order_m2_side: "BUY",
        order_time_m2: "2023-06-12T10:38:20.881296",
        pair_status: "LIVE",
        comments: ""
    }
];
