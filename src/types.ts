interface IConfig
{
    useSeed: boolean;
    seed: number;
    randomizeAfterUpdates: boolean;
    timeToWaitAfterUpdate: number;
    dumpTiersToFile: boolean;
    tradersToBarter: string[];
    barterCategories: BarterCategories;
    tiers: number[];
    loyaltyMultiplier: number[];
    manualTieredItems: ManualTieredItems;
    itemBlacklist: string[];
    traderCategoriesBlacklist: string[];
    tradeBlacklist: any[];
    enableItemBlacklist: boolean;
    tradeItemBlacklist: string[];
    tradeValueOverrides: TradeValueOverrides;
    maxNumItems: number;
    maxRandomNumItems: number;
    valueStep: number;
    maxBarterValue: number;
    maxsteps: number;
    valueExtraCost: number;
    valueMultiplier: number;
    randomTierdownStepStart: number;
    randomTierdownSteps: number[];
    valueCutoff: number;
    overrideExistingBarters: boolean;
    copyOverrideExistingBarters: boolean;
    maxValueOverHandbookMultiplier: number;
    writeLog: boolean;
    writeLogLocale: string;
    cashTradeEnabled: boolean;
    cashTradeChance: number;
    cashTradeMinValue: number;
    cashTradeMultiplier: number;
    barterizeFleamarket: boolean;
    offersPerItem: OffersPerItem;
}

interface OffersPerItem
{
    min: number;
    max: number;
}

interface TradeValueOverrides
{
}

interface ManualTieredItems
{

}

interface BarterCategories
{
}

