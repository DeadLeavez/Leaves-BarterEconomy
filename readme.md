# Barter Economy
This mod will completely change how traders trade with the player. Instead of buying things with paper money. You now trade your own valuable items for the stuff you need. A bottle of water for a new mag. or perhaps a golden rolex for a shiny new gun. Who knows what the traders want, and what you are willing to give up.

Built with a foundation of customization, the mod has many many knobs to turn so you can tune the experience in a way that fits YOU and YOUR play style.

There is a seed functionality, along with settings on whether to update whenever traders do or not. One set of trades for your entire run? Update your seed once a week, or once a day. The choice is in your hands.

Unlike my other mods, this one's config is simply too big put in here. So instead. if you think this idea is something you'd enjoy. I recommend you to dig into the config file with a text editor that supports ``jsonc`` files. The config is filled with comments and details on what everything does. Personally, I HIGHLY recommend using Visual Studio Code, to edit the config. [VSCode](https://code.visualstudio.com/)


The config file is found in the ``\Leaves-BarterEconomy\config\`` folder.

In classic Leaves™️ style; there is also an ``\Leaves-BarterEconomy\output`` folder that holds usable data like the tiers of items and the complete generation of traders each update. The default settings are tuned to be quite difficult. So if you want an easier experience; go ham on the config.

# Changelog
## 1.0.0
3.8.0 Release

## 1.0.1
Added two new features

- ``"maxValueOverHandbookMultiplier":``
- ``"tradeValueOverrides":``

## 1.0.2
- Added safeguards to prevent the mod from hanging if there a trader is missing data in the assort.

Configs from previous version ``1.0.1`` are compatible.

## 1.0.3
- Lists installed traders at startup
- Implemented ``"writeLog"`` to output a list of all trades whenever a trader updates. ``output\trades__2024-04-07_14-52-11_<nickname>.txt``
- Added  ``"writeLogLocale"`` If missing defaults to "en". 

Configs from previous version ``1.0.1`` and ``1.0.2`` are compatible.

## 1.0.4
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
## 1.0.5

- Fix Seed not working. 

Configs from 1.0.4 ARE compatible with this release.