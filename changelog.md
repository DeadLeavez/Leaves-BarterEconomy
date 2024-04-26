# 1.0.0
3.8.0 Release

# 1.0.1
Added two new features

- ``"maxValueOverHandbookMultiplier":``
- ``"tradeValueOverrides":``

# 1.0.2
- Added safeguards to prevent the mod from hanging if there a trader is missing data in the assort.

Configs from previous version ``1.0.1`` are compatible.

# 1.0.3
- Lists installed traders at startup
- Implemented ``"writeLog"`` to output a list of all trades whenever a trader updates. ``output\trades__2024-04-07_14-52-11_<nickname>.txt``
- Added  ``"writeLogLocale"`` If missing defaults to "en". 

Configs from previous version ``1.0.1`` and ``1.0.2`` are compatible.

# 1.0.4
- Added barterizing of the flea market. (This is disabled by default and takes a lot of time at startup to generate the thousands upon thousands of barters. (~30seconds on my pc on default settings.))
- Added a setting for having a trade remain as a cash trade, But with massively increased upfront costs. 

Configs from previous versions are NOT compatible. but can be made compatible by adding the following settings 
```json
    "cashTradeEnabled": true, //Enable cash trades. These are trades that should be barter trades, but are instead cash trades.
    "cashTradeChance": 0.04, //Chance of a cash trade.
    "cashTradeMinValue": 75000, //Minimum value of a cash trade.
    "cashTradeMultiplier": 5, //Multiplier of the value of a cash trade.

    "barterizeFleamarket": false, //Barterize the flea market. Will make the flea market a bit more interesting.
    "offersPerItem": //Total offers per item. Default is 7-30 per item. But this is INCREDIBLY SLOW to generate. I highly recommend not using too many offers per item.
    //Only applies if barterizeFleamarket is true.
    { 
        "min": 2, //Minimum offers per item
        "max": 4  //Maximum offers per item
    } 
```
# 1.0.5

- Fix Seed not working. 

Configs from 1.0.4 ARE compatible with this release.