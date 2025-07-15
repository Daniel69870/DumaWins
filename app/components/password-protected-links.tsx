"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Lock, Unlock, Eye, EyeOff, ExternalLink } from "lucide-react"

// SIMPLE DOCUMENT - Just paste whatever you want here:
const documentContent = `
ACW A-COLD WALL


Store Name	Link

ASL	https://shop58770420.taobao.com
Budget Clothing	https://budgetclothing.x.yupoo.com/categories
Cheapgoods	https://crespo999.x.yupoo.com/categories
Plastictoy	https://shop381906670.taobao.com/
Acne Studios
Store Name	Link
Budgetshoes	https://budgetshoess.x.yupoo.com/albums
Crazyrep	https://crazyrep.x.yupoo.com/
Fashionbroda	http://fashionbroda.x.yupoo.com/
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery
Singor	https://steven-1989.x.yupoo.com/categories
Voguevault	https://voguevault-rep.x.yupoo.com/
ZZaccaheus Factory	https://zzaccaheusvip.x.yupoo.com/


Adidas


Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
00008-Cooper	https://hch-vip.x.yupoo.com/albums
0004ABCFactory	https://abcfactory.x.yupoo.com/
033-Sam Luxury Factory	https://samluxuryfactory.x.yupoo.com/
0777-GuangzhouVibey	https://guangzhouvibey.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
Budgetshoes	https://budgetshoess.x.yupoo.com/albums
Cheapgoods	https://crespo999.x.yupoo.com/categories
COOL KICKS	https://cool-kicks.x.yupoo.com/
HOLY KICKS	https://herbrother.x.yupoo.com/
KOSneaker	https://weidian.com/?userid=1738883845
Logan	https://loganhere.x.yupoo.com/categories
Nice Clothes	https://weidian.com/?userid=317265386&spider_token=cd8f&tabType=all
SamLuxury	https://samluxuryfactory.x.yupoo.com/categories
Supkicks	https://perfectkickc.x.yupoo.com/categories
TMF	https://k.youshop10.com/G2f5H0nD
Voguevault	https://voguevault-rep.x.yupoo.com/
YE Factory	https://yefactory.x.yupoo.com/


Alexander McQueen


Store Name	Link
0000Ace	https://2018-ace.x.yupoo.com/
24h-Factory	https://24hfactory.x.yupoo.com/
77 Kicks sneaker	http://77sneakerskick.x.yupoo.com/
A8First	https://www.a8first.com
Anastasia Factory	https://a0abel.x.yupoo.com/albums
Audrey	https://audreyvip.x.yupoo.com
A0GETBUY	http://getbuyteam.x.yupoo.com
Bella	https://beiia.x.yupoo.com/
Budget Clothing	https://budgetclothing.x.yupoo.com/categories
Chipotle	https://chipotle888.x.yupoo.com/
COOL KICKS	https://cool-kicks.x.yupoo.com/
Dandelion	https://ace-shop-100.x.yupoo.com/albums
Elizabeth Corporation	https://a0aaa1bettly.x.yupoo.com/
Enthalpy	https://enthalpy99.x.yupoo.com/
Fuguier	https://fuguier38.x.yupoo.com/categories/4383841
HOLY KICKS	https://herbrother.x.yupoo.com/
Kickzlucas	https://www.lucaskickz.com
Koala	https://2335499519.x.yupoo.com/albums
PerfectReps	https://perfectreps.x.yupoo.com/
Stockx-888VIP	https://888vip.x.yupoo.com/
YE Factory	https://yefactory.x.yupoo.com/


Ami


Store Name	Link
Alina	https://weidian.com/?userid=247994257


Amiri


Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
00008-Cooper	https://hch-vip.x.yupoo.com/albums
001-Yang-888	https://001-yang-888.x.yupoo.com/
002-Super Wang	https://superwang02.x.yupoo.com
008-Aya	https://008-aya.x.yupoo.com/
020-Adam Factory	https://adam-factory.x.yupoo.com/
0777-GuangzhouVibey	https://guangzhouvibey.x.yupoo.com/
0880-Ama	https://0880ama.x.yupoo.com/
111-Amen	https://111amen.x.yupoo.com/
24h-Factory	https://24hfactory.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
77 Kicks sneaker	http://77sneakerskick.x.yupoo.com/
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
AAemmanuelle-vip	http://emmanuelle-vip.x.yupoo.com/
Alicesharing	http://alicesharing.x.yupoo.com/albums
Anastasia Factory	https://a0abel.x.yupoo.com/albums
Belinda Studio	https://minusonevip.x.yupoo.com/
Caleaty fashion studio	https://aleaty.x.yupoo.com/albums
COOL KICKS	https://cool-kicks.x.yupoo.com/
GmanClub	https://gmanclub.world.taobao.com/
HenryReps	https://akdingji.x.yupoo.com/albums
HOLY KICKS	https://herbrother.x.yupoo.com/
JTC	https://weidian.com/?userid=1864913249&spider_token=3e52
Kickzlucas	https://www.lucaskickz.com
Melissa Aahluxury	https://a0aahluxury.x.yupoo.com/
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery
PerfectReps	https://perfectreps.x.yupoo.com/
Singor	https://steven-1989.x.yupoo.com/categories
YE Factory	https://yefactory.x.yupoo.com/


Anti Social Social Club


Store Name	Link
ASL	https://shop58770420.taobao.com
Chaosmade	https://chaosmade.x.yupoo.com/categories
Singor	https://steven-1989.x.yupoo.com/categories


Arc'teryx


Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
0004ABCFactory	https://abcfactory.x.yupoo.com/
002-Super Wang	https://superwang02.x.yupoo.com
008-Aya	https://008-aya.x.yupoo.com/
020-Adam Factory	https://adam-factory.x.yupoo.com/
A1Luxury	https://a1luxurygoods.x.yupoo.com/
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
A-Aurora Factory	https://aurora-01.x.yupoo.com/
AAemmanuelle-vip	http://emmanuelle-vip.x.yupoo.com/
Alicesharing	http://alicesharing.x.yupoo.com/albums
Anastasia Factory	https://a0abel.x.yupoo.com/albums
Bevelry	https://beverly-luxury.x.yupoo.com/albums
Caleaty fashion studio	https://aleaty.x.yupoo.com/albums
Dreamremake	https://west42.x.yupoo.com/
Frances abdynsehelmTop	https://a1abdy.x.yupoo.com/
O-ollerep	http://o-ollrep.x.yupoo.com
SamLuxury	https://samluxuryfactory.x.yupoo.com/categories
Taurus Reps	https://deateath.x.yupoo.com/?lang=en-us


Armani


Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
0000Ace	https://2018-ace.x.yupoo.com/
0004ABCFactory	https://abcfactory.x.yupoo.com/
002-Super Wang	https://superwang02.x.yupoo.com
033-Sam Luxury Factory	https://samluxuryfactory.x.yupoo.com/
111-Amen	https://111amen.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
AAemmanuelle-vip	http://emmanuelle-vip.x.yupoo.com/
Alicesharing	http://alicesharing.x.yupoo.com/albums
Caleaty fashion studio	https://aleaty.x.yupoo.com/albums
Repfactory	https://reprfactorys.x.yupoo.com/


Bags


Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
008-Aya	https://008-aya.x.yupoo.com/
222-Bella	https://222bella.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
77 Kicks sneaker	http://77sneakerskick.x.yupoo.com/
A1Luxury	https://a1luxurygoods.x.yupoo.com/
Affordableluxury	https://affordableluxurs.x.yupoo.com/categories
Alex	https://alex8181688.x.yupoo.com
Alexia	https://000-ax.x.yupoo.com/
Ali	https://alishop88.x.yupoo.com/
Anastasia Factory	https://a0abel.x.yupoo.com/albums
Antina	https://ameliavip.x.yupoo.com/
Audrey	https://audreyvip.x.yupoo.com
A0GETBUY	http://getbuyteam.x.yupoo.com
Belinda Studio	https://minusonevip.x.yupoo.com/
Brother Sam	https://www.fashionrepsfam.ru/
Caleaty fashion studio	https://aleaty.x.yupoo.com/albums
Cailailai	https://cailailai.x.yupoo.com
Cftime	https://cftime.x.yupoo.com/
Cheapgoods	https://crespo999.x.yupoo.com/categories
COOL KICKS	https://cool-kicks.x.yupoo.com/
Dora Luxury	https://dora32291.x.yupoo.com/
Elizabeth Corporation	https://a0aaa1bettly.x.yupoo.com/
Frances abdynsehelmTop	https://a1abdy.x.yupoo.com/
Happyhalel(High end Wholesaler)	https://happywhale.x.yupoo.com/albums
HOLY KICKS	https://herbrother.x.yupoo.com/
kkkk1616	https://kkkk1616.x.yupoo.com
Laura Aaron Custom	http://mryejewelryswatches.x.yupoo.com
Melissa Aahluxury	https://a0aahluxury.x.yupoo.com/
Nicole618	https://nicole618.x.yupoo.com/
Repfactory	https://reprfactorys.x.yupoo.com/
Scarlett	https://scarlettluxury.x.yupoo.com
Stockx-888VIP	https://888vip.x.yupoo.com/
Sunhouse	https://sundesigner.shop/
Supkicks	https://perfectkickc.x.yupoo.com/categories
Queenie	https://jqstudio.x.yupoo.com
YE Factory	https://yefactory.x.yupoo.com/
YMDD	https://linktr.ee/ymdd168
ZuMingLuxe The Highest	http://mingcustomized.x.yupoo.com


Balenciaga


Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
00008-Cooper	https://hch-vip.x.yupoo.com/albums
0000Ace	https://2018-ace.x.yupoo.com/
0004ABCFactory	https://abcfactory.x.yupoo.com/
001-Yang-888	https://001-yang-888.x.yupoo.com/
002-Super Wang	https://superwang02.x.yupoo.com
008-Aya	https://008-aya.x.yupoo.com/
020-Adam Factory	https://adam-factory.x.yupoo.com/
033-Sam Luxury Factory	https://samluxuryfactory.x.yupoo.com/
0777-GuangzhouVibey	https://guangzhouvibey.x.yupoo.com/
0880-Ama	https://0880ama.x.yupoo.com/
24h-Factory	https://24hfactory.x.yupoo.com/
111-Amen	https://111amen.x.yupoo.com/
666 factory	https://666factory.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
A8First	https://www.a8first.com
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
Affordableluxury	https://affordableluxurs.x.yupoo.com/categories
Alexia	https://000-ax.x.yupoo.com/
Alina	https://weidian.com/?userid=247994257
Antina	https://ameliavip.x.yupoo.com/
Audrey	https://audreyvip.x.yupoo.com
Belinda Studio	https://minusonevip.x.yupoo.com/
Brother Sam	https://www.fashionrepsfam.ru/
Budgetshoes	https://budgetshoess.x.yupoo.com/albums
Caleaty fashion studio	https://aleaty.x.yupoo.com/albums
Carrotmade	https://carrotmade.x.yupoo.com/
Cheapgoods	https://crespo999.x.yupoo.com/categories
COOL KICKS	https://cool-kicks.x.yupoo.com/
Elizabeth Corporation	https://a0aaa1bettly.x.yupoo.com/
Elen-Li Top Level	https://elen-li.x.yupoo.com/
Fashionbroda	http://fashionbroda.x.yupoo.com/
Frances abdynsehelmTop	https://a1abdy.x.yupoo.com/
Fuguier	https://fuguier38.x.yupoo.com/categories/4383846
Gabrielle Goodal VIP	https://a1baby1.x.yupoo.com/
Happywahel(High end Wholesaler)	https://happywhale.x.yupoo.com/albums
HOLY KICKS	https://herbrother.x.yupoo.com/
Kickzlucas	https://www.lucaskickz.com
KOSneaker	https://https://weidian.com/?userid=211687012
MadebyKungFu	https://madebykungfu.x.yupoo.com/albums
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery
Nicole618	https://nicole618.x.yupoo.com/
O-ollerep	http://o-ollrep.x.yupoo.com
Repfactory	https://reprfactorys.x.yupoo.com/
SamLuxury	https://samluxuryfactory.x.yupoo.com/categories
Scarlett	https://scarlettluxury.x.yupoo.com
Singor	https://steven-1989.x.yupoo.com/categories
Stockx-888VIP	https://888vip.x.yupoo.com/
Survival Source (Agent)	http://www.survivalsourcech.com/
Survival Source (Direct)	https://www.survivalsource-ch.com/
TheThunder	https://thethunder.x.yupoo.com/
Voguevault	https://voguevault-rep.x.yupoo.com/
YE Factory	https://yefactory.x.yupoo.com/
YMDD	https://linktr.ee/ymdd168


Balmain


Store Name	Link
002-Super Wang	https://superwang02.x.yupoo.com
24h-Factory	https://24hfactory.x.yupoo.com/
Voguevault	https://voguevault-rep.x.yupoo.com/


Bape


Store Name	Link
24h-Factory	https://24hfactory.x.yupoo.com/
Crazyrep	https://crazyrep.x.yupoo.com/
HenryReps	https://akdingji.x.yupoo.com/albums
HOLY KICKS	https://herbrother.x.yupoo.com/
Kickzlucas	https://www.lucaskickz.com
Logan	https://loganhere.x.yupoo.com/categories
MZC	https://shop486227135.taobao.com/
Pika	https://pikachushop.x.yupoo.com/


Broken Planet


Store Name	Link
Hotdog	https://hotdog-official.x.yupoo.com/albums
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery


Burberry


Store Name	Link
008-Aya	https://008-aya.x.yupoo.com/
020-Adam Factory	https://adam-factory.x.yupoo.com/
0880-Ama	https://0880ama.x.yupoo.com/
666 factory	https://666factory.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
A8First	https://www.a8first.com
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
A-Aurora Factory	https://aurora-01.x.yupoo.com/
AAemmanuelle-vip	http://emmanuelle-vip.x.yupoo.com/
Anastasia Factory	https://a0abel.x.yupoo.com/albums
A-stars	https://a-stars.x.yupoo.com/
A0GETBUY	http://getbuyteam.x.yupoo.com
Belinda Studio	https://minusonevip.x.yupoo.com/
Bella	https://beiia.x.yupoo.com/
Caleaty fashion studio	https://aleaty.x.yupoo.com/albums
Crazyrep	https://crazyrep.x.yupoo.com/
Elizabeth Corporation	https://a0aaa1bettly.x.yupoo.com/
Elen-Li Top Level	https://elen-li.x.yupoo.com/
Enthalpy	https://enthalpy99.x.yupoo.com/
Gabrielle Goodal VIP	https://a1baby1.x.yupoo.com/
Happywahel(High end Wholesaler)	https://happywhale.x.yupoo.com/albums
HOLY KICKS	https://herbrother.x.yupoo.com/
MadebyKungFu	https://madebykungfu.x.yupoo.com/albums
Melissa Aahluxury	https://a0aahluxury.x.yupoo.com/
PerfectReps	https://perfectreps.x.yupoo.com/
Scarlett	https://scarlettluxury.x.yupoo.com
Stockx-888VIP	https://888vip.x.yupoo.com/
ZZaccaheus Factory	https://zzaccaheusvip.x.yupoo.com/
Bvlgari
Store Name	Link
MadebyKungFu	https://madebykungfu.x.yupoo.com/albums
Survival Source (Agent)	http://www.survivalsourcech.com/
Survival Source (Direct)	https://www.survivalsource-ch.com/
CDG / CDG Play
Store Name	Link
HenryReps	https://akdingji.x.yupoo.com/albums
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery
Repbrothers	Repbrothers
Calvin Klein
Store Name	Link
Anastasia Factory	https://a0abel.x.yupoo.com/albums


Canada Goose


Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
00008-Cooper	https://hch-vip.x.yupoo.com/albums
0000Ace	https://2018-ace.x.yupoo.com/
0004ABCFactory	https://abcfactory.x.yupoo.com/
001-Yang-888	https://001-yang-888.x.yupoo.com/
002-Super Wang	https://superwang02.x.yupoo.com
008-Aya	https://008-aya.x.yupoo.com/
020-Adam Factory	https://adam-factory.x.yupoo.com/
033-Sam Luxury Factory	https://samluxuryfactory.x.yupoo.com/
0777-GuangzhouVibey	https://guangzhouvibey.x.yupoo.com/
0880-Ama	https://0880ama.x.yupoo.com/
111-Amen	https://111amen.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
A1Luxury	https://a1luxurygoods.x.yupoo.com/
A8Frist	https://www.a8first.com
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
AAemmanuelle-vip	http://emmanuelle-vip.x.yupoo.com/
Anastasia Factory	https://a0abel.x.yupoo.com/albums
Audrey	https://audreyvip.x.yupoo.com
A0GETBUY	http://getbuyteam.x.yupoo.com
Belinda Studio	https://minusonevip.x.yupoo.com/
Caleaty fashion studio	https://aleaty.x.yupoo.com/albums
COOLKICKS	https://cool-kicks.x.yupoo.com/
Crazyrep	https://crazyrep.x.yupoo.com/
Elen-Li Top Level	https://elen-li.x.yupoo.com/
Frances abdynsehelmTop	https://a1abdy.x.yupoo.com/
Gabrielle Goodal VIP	https://a1baby1.x.yupoo.com/
King of goose (agent)	https://kog001.x.yupoo.com/
king of goose (direct)	https://kingofgoose.co/
Melissa Aahluxury	https://a0aahluxury.x.yupoo.com/
Ninja In Stone	https://ninjainstone.x.yupoo.com/
SamLuxury	https://samluxuryfactory.x.yupoo.com/categories
YE Factory	https://yefactory.x.yupoo.com/


Carhartt


Store Name	Link
Saul Goodman	https://saul-goodman0721.x.yupoo.com/albums


Cartier


Store Name	Link
A0001Luxury	https://a0001luxury.x.yupoo.com/
Scarlett	https://scarlettluxury.x.yupoo.com
Survival Source (Agent)	http://www.survivalsourcech.com/


Casablanca


Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
0004ABCFactory	https://abcfactory.x.yupoo.com/
001-Yang-888	https://001-yang-888.x.yupoo.com/
033-Sam Luxury Factory	https://samluxuryfactory.x.yupoo.com/
0880-Ama	https://0880ama.x.yupoo.com/
111-Amen	https://111amen.x.yupoo.com/
AAemmanuelle-vip	http://emmanuelle-vip.x.yupoo.com/
Anastasia Factory	https://a0abel.x.yupoo.com/albums
A0GETBUY	http://getbuyteam.x.yupoo.com
Crazyrep	https://crazyrep.x.yupoo.com/
Elen-Li Top Level	https://elen-li.x.yupoo.com/
Happywahel(High end Wholesaler)	https://happywhale.x.yupoo.com/albums
Gabrielle Goodal VIP	https://a1baby1.x.yupoo.com/
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery
SamLuxury	https://samluxuryfactory.x.yupoo.com/categories
ZuMingLuxe The Highest	http://mingcustomized.x.yupoo.com


Cav Empt


Store Name	Link
Chaosmade	https://chaosmade.x.yupoo.com/categories


Celine


Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
00008-Cooper	https://hch-vip.x.yupoo.com/albums
0004ABCFactory	https://abcfactory.x.yupoo.com/
002-Super Wang	https://superwang02.x.yupoo.com
008-Aya	https://008-aya.x.yupoo.com/
0880-Ama	https://0880ama.x.yupoo.com/
111-Amen	https://111amen.x.yupoo.com/
A-Aurora Factory	https://aurora-01.x.yupoo.com/
Frances abdynsehelmTop	https://a1abdy.x.yupoo.com/
MadebyKungFu	https://madebykungfu.x.yupoo.com/albums
Scarlett	https://scarlettluxury.x.yupoo.com
Stockx-888VIP	https://888vip.x.yupoo.com/
Survival Source (Direct)	https://www.survivalsource-ch.com/
TheThunder	https://thethunder.x.yupoo.com/
Champion
Store Name	Link
AAemmanuelle-vip	http://emmanuelle-vip.x.yupoo.com/
ASL	https://shop58770420.taobao.com


Chanel


Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
002-Super Wang	https://superwang02.x.yupoo.com
111-Amen	https://111amen.x.yupoo.com/
24h-Factory	https://24hfactory.x.yupoo.com/
666 factory	https://666factory.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
A-Aurora Factory	https://aurora-01.x.yupoo.com/
Affordableluxury	https://affordableluxurs.x.yupoo.com/categories
Alexia	https://000-ax.x.yupoo.com/
Antina	https://ameliavip.x.yupoo.com/
A0GETBUY	http://getbuyteam.x.yupoo.com
Belinda Studio	https://minusonevip.x.yupoo.com/
Bella	https://beiia.x.yupoo.com/
Brother Sam	https://www.fashionrepsfam.ru/
Caleaty fashion studio	https://aleaty.x.yupoo.com/albums
Chipotle	https://chipotle888.x.yupoo.com/
Dandelion	https://ace-shop-100.x.yupoo.com/albums
Elen-Li Top Level	https://elen-li.x.yupoo.com/
Enthalpy	https://enthalpy99.x.yupoo.com/
Frances abdynsehelmTop	https://a1abdy.x.yupoo.com/
kkkk1616	https://kkkk1616.x.yupoo.com
Nicole618	https://nicole618.x.yupoo.com/
O-ollerep	http://o-ollrep.x.yupoo.com
SamLuxury	https://samluxuryfactory.x.yupoo.com/categories
Scarlett	https://scarlettluxury.x.yupoo.com
Stockx-888VIP	https://888vip.x.yupoo.com/
Sunhouse	https://sundesigner.shop/
Survival Source (Agent)	http://www.survivalsourcech.com/
TheThunder	https://thethunder.x.yupoo.com/
Wanmidu	https://wanmidu.x.yupoo.com/


Christian Louboutin


Store Name	Link
001-Yang-888	https://001-yang-888.x.yupoo.com/
008-Aya	https://008-aya.x.yupoo.com/
020-Adam Factory	https://adam-factory.x.yupoo.com/
0880-Ama	https://0880ama.x.yupoo.com/
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
A-Aurora Factory	https://aurora-01.x.yupoo.com/
Alexia	https://000-ax.x.yupoo.com/
Alicesharing	http://alicesharing.x.yupoo.com/albums
Anastasia Factory	https://a0abel.x.yupoo.com/albums
Antina	https://ameliavip.x.yupoo.com/
A0GETBUY	http://getbuyteam.x.yupoo.com
Bella	https://beiia.x.yupoo.com/
Elizabeth Corporation	https://a0aaa1bettly.x.yupoo.com/
Fashion319	https://www.fashion319top.shop/8ou2ou-c188627/
ZuMingLuxe The Highest	http://mingcustomized.x.yupoo.com
SamLuxury	https://samluxuryfactory.x.yupoo.com/categories


Chrome Hearts


Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
00008-Cooper	https://hch-vip.x.yupoo.com/albums
0000Ace	https://2018-ace.x.yupoo.com/
0004ABCFactory	https://abcfactory.x.yupoo.com/
001-Yang-888	https://001-yang-888.x.yupoo.com/
033-Sam Luxury Factory	https://samluxuryfactory.x.yupoo.com/
0777-GuangzhouVibey	https://guangzhouvibey.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
A-Aurora Factory	https://aurora-01.x.yupoo.com/
AKRep Studio	https://k.youshop10.com/rhn4LUuK
A0GETBUY	http://getbuyteam.x.yupoo.com
Anastasia Factory	https://a0abel.x.yupoo.com/albums
Belinda Studio	https://minusonevip.x.yupoo.com/
Budget Clothing	https://budgetclothing.x.yupoo.com/categories
Bella	https://beiia.x.yupoo.com/
Carrotmade	https://carrotmade.x.yupoo.com/
Caleaty fashion studio	https://aleaty.x.yupoo.com/albums
Crazyrep	https://crazyrep.x.yupoo.com/
Enthalpy	https://enthalpy99.x.yupoo.com/
Fashionbroda	http://fashionbroda.x.yupoo.com/
Gabrielle Goodal VIP	https://a1baby1.x.yupoo.com/
HenryReps	https://akdingji.x.yupoo.com/albums
HOLY KICKS	https://herbrother.x.yupoo.com/
Laura Aaron Custom	http://mryejewelryswatches.x.yupoo.com
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery
Nicole618	https://nicole618.x.yupoo.com/
PerfectReps	https://perfectreps.x.yupoo.com/
SamLuxury	https://samluxuryfactory.x.yupoo.com/categories
Singor	https://steven-1989.x.yupoo.com/categories
Stockx-888VIP	https://888vip.x.yupoo.com/
Sunhouse	https://sundesigner.shop/
Survival Source (Agent)	http://www.survivalsourcech.com/
YMDD	https://linktr.ee/ymdd168


Coach


Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
0004ABCFactory	https://abcfactory.x.yupoo.com/
033-Sam Luxury Factory	https://samluxuryfactory.x.yupoo.com/
111-Amen	https://111amen.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
Anastasia Factory	https://a0abel.x.yupoo.com/albums
Brother Sam	https://www.fashionrepsfam.ru/
Elizabeth Corporation	https://a0aaa1bettly.x.yupoo.com/
Gabrielle Goodal VIP	https://a1baby1.x.yupoo.com/
SamLuxury	https://samluxuryfactory.x.yupoo.com/categories
Scarlett	https://scarlettluxury.x.yupoo.com
TheThunder	https://thethunder.x.yupoo.com/
Common Projects
Store Name	Link
AZachariahTOP	https://azachariahtop.x.yupoo.com/
Player Shoes	https://shop148723642.taobao.com/
Corteiz
Store Name	Link
Chaosmade	https://chaosmade.x.yupoo.com/categories
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery


CP Company


Store Name	Link
Budget Clothing	https://budgetclothing.x.yupoo.com/categories
Dreamremake	https://west42.x.yupoo.com/


Denim Tears


Store Name	Link
Alina	https://weidian.com/?userid=247994257
Chaosmade	https://chaosmade.x.yupoo.com/categories
HenryReps	https://akdingji.x.yupoo.com/albums
JTC	https://weidian.com/?userid=1864913249&spider_token=3e52
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery
Singor	https://steven-1989.x.yupoo.com/categories
Repdog	https://uio.cc/tu48k


Derschutze


Store Name	Link
Peng Reps	https://pengreps.x.yupoo.com/


Dior


Store Name	Link
00008-Cooper	https://hch-vip.x.yupoo.com/albums
0880-Ama	https://0880ama.x.yupoo.com/
24h-Factory	https://24hfactory.x.yupoo.com/
666 factory	https://666factory.x.yupoo.com/
A1Luxury	https://a1luxurygoods.x.yupoo.com/
A8Firstt	https://www.a8first.com
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
Alex	https://alex8181688.x.yupoo.com
Alexia	https://000-ax.x.yupoo.com/
Alicesharing	http://alicesharing.x.yupoo.com/albums
Anastasia Factory	https://a0abel.x.yupoo.com/albums
Antina	https://ameliavip.x.yupoo.com/
Audrey	https://audreyvip.x.yupoo.com
Belinda Studio	https://minusonevip.x.yupoo.com/
Brother Sam	https://www.fashionrepsfam.ru/
Budget Clothing	https://budgetclothing.x.yupoo.com/categories
Budgetshoes	https://budgetshoess.x.yupoo.com/albums
Caleaty fashion studio	https://aleaty.x.yupoo.com/albums
Catherine Studio	https://2116601596.x.yupoo.com/
Cailailai	https://cailailai.x.yupoo.com
COOL KICKS	https://cool-kicks.x.yupoo.com/
Dora Luxury	https://dora32291.x.yupoo.com/
Elen-Li Top Level	https://elen-li.x.yupoo.com/
Enthalpy	https://enthalpy99.x.yupoo.com/
Kickzlucas	https://www.lucaskickz.com
Koala	https://2335499519.x.yupoo.com/albums
Happywahel(High end Wholesaler)	https://happywhale.x.yupoo.com/albums
Harry	https://cjcs258852.x.yupoo.com/
HOLY KICKS	https://herbrother.x.yupoo.com/
MadebyKungFu	https://madebykungfu.x.yupoo.com/albums
Melissa Aahluxury	https://a0aahluxury.x.yupoo.com/
Nicole618	https://nicole618.x.yupoo.com/
O-ollerep	http://o-ollrep.x.yupoo.com
Repfactory	https://reprfactorys.x.yupoo.com/
SamLuxury	https://samluxuryfactory.x.yupoo.com/categories
Scarlett	https://scarlettluxury.x.yupoo.com
Stockx-888VIP	https://888vip.x.yupoo.com/
Supkicks	https://supkicks1688.x.yupoo.com/categories (code: 666666)
Survival Source (Agent)	http://www.survivalsourcech.com/
Survival Source (Direct)	https://www.survivalsource-ch.com/
TheThunder	https://thethunder.x.yupoo.com/
Voguevault	https://voguevault-rep.x.yupoo.com/
YE Factory	https://yefactory.x.yupoo.com/


Eric Emanuel


Store Name	Link
Chaosmade	https://chaosmade.x.yupoo.com/categories


Essentials


Store Name	Link
Crazyrep	https://crazyrep.x.yupoo.com/
GmanClub	https://gmanclub.world.taobao.com/
Singor	https://steven-1989.x.yupoo.com/categories


Fear of God


Store Name	Link
001-Yang-888	https://001-yang-888.x.yupoo.com/
Alicesharing	http://alicesharing.x.yupoo.com/albums
Chaosmade	https://chaosmade.x.yupoo.com/categories
Fashion319	https://www.fashion319top.shop/FO65ss59-c188641/
GmanClub	https://gmanclub.world.taobao.com/
HenryReps	https://akdingji.x.yupoo.com/albums
Kickzlucas	https://www.lucaskickz.com
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery
Singor	https://steven-1989.x.yupoo.com/categories


Fendi


Store Name	Link
0000Ace	https://2018-ace.x.yupoo.com/
020-Adam Factory	https://adam-factory.x.yupoo.com/
77 Kicks sneaker	http://77sneakerskick.x.yupoo.com/
A8First	https://www.a8first.com
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
Anastasia Factory	https://a0abel.x.yupoo.com/albums
AndyUnion	https://andyunion.x.yupoo.com/categories
A0GETBUY	http://getbuyteam.x.yupoo.com
Bella	https://beiia.x.yupoo.com/
Elen-Li Top Level	https://elen-li.x.yupoo.com/
Enthalpy	https://enthalpy99.x.yupoo.com/
Gabrielle Goodal VIP	https://a1baby1.x.yupoo.com/
MadebyKungFu	https://madebykungfu.x.yupoo.com/albums
Melissa Aahluxury	https://a0aahluxury.x.yupoo.com/
O-ollerep	http://o-ollrep.x.yupoo.com
PerfectReps	https://perfectreps.x.yupoo.com/
YE Factory	https://yefactory.x.yupoo.com/


Gallery Dept


Store Name	Link
Alina	https://weidian.com/?userid=247994257
AKRep Studio	https://k.youshop10.com/-JSmRi0S
HenryReps	https://akdingji.x.yupoo.com/albums
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery
Singor	https://steven-1989.x.yupoo.com/categories
Repdog	https://uio.cc/tu48k


Givenchy


Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
0004ABCFactory	https://abcfactory.x.yupoo.com/
0777-GuangzhouVibey	https://guangzhouvibey.x.yupoo.com/
0880-Ama	https://0880ama.x.yupoo.com/
24h-Factory	https://24hfactory.x.yupoo.com/
111-Amen	https://111amen.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
A-Aurora Factory	https://aurora-01.x.yupoo.com/
Alicesharing	http://alicesharing.x.yupoo.com/albums
Catherine Studio	https://2116601596.x.yupoo.com/
Frances abdynsehelmTop	https://a1abdy.x.yupoo.com/
Scarlett	https://scarlettluxury.x.yupoo.com
Stockx-888VIP	https://888vip.x.yupoo.com/
Survival Source (Agent)	http://www.survivalsourcech.com/
TheThunder	https://thethunder.x.yupoo.com/


Golden Goose


Store Name	Link
24h-Factory	https://24hfactory.x.yupoo.com/
A-Aurora Factory	https://aurora-01.x.yupoo.com/
AndyUnion	https://andyunion.x.yupoo.com/categories
Budget Clothing	https://budgetclothing.x.yupoo.com/categories


Goyard


Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
0004ABCFactory	https://abcfactory.x.yupoo.com/
001-Yang-888	https://001-yang-888.x.yupoo.com/
002-Super Wang	https://superwang02.x.yupoo.com
0777-GuangzhouVibey	https://guangzhouvibey.x.yupoo.com/
111-Amen	https://111amen.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
AAemmanuelle-vip	http://emmanuelle-vip.x.yupoo.com/
A-Aurora Factory	https://aurora-01.x.yupoo.com/
Alex	https://alex8181688.x.yupoo.com
AndyUnion	https://andyunion.x.yupoo.com/categories
A0GETBUY	http://getbuyteam.x.yupoo.com
Belinda Studio	https://minusonevip.x.yupoo.com/
Brother Sam	https://www.fashionrepsfam.ru/
COOL KICKS	https://cool-kicks.x.yupoo.com/
Elen-Li Top Level	https://elen-li.x.yupoo.com/
Ericareps	https://www.ericareps.club/index.php?main_page=index&cPath=23
Laura Aaron Custom	http://mryejewelryswatches.x.yupoo.com
Mr Canvas	https://mrcanvas.x.yupoo.com/albums
Melissa Aahluxury	https://a0aahluxury.x.yupoo.com/
SamLuxury	https://samluxuryfactory.x.yupoo.com/categories
Scarlett	https://scarlettluxury.x.yupoo.com
Stockx-888VIP	https://888vip.x.yupoo.com/
Supkicks	https://perfectkickc.x.yupoo.com/categories
TheThunder	https://thethunder.x.yupoo.com/
YE Factory	https://yefactory.x.yupoo.com/
ZuMingLuxe The Highest	http://mingcustomized.x.yupoo.com


Gucci


Store Name	Link
001-Yang-888	https://001-yang-888.x.yupoo.com/
002-Super Wang	https://superwang02.x.yupoo.com
008-Aya	https://008-aya.x.yupoo.com/
020-Adam Factory	https://adam-factory.x.yupoo.com/
0880-Ama	https://0880ama.x.yupoo.com/
111-Amen	https://111amen.x.yupoo.com/
24h-Factory	https://24hfactory.x.yupoo.com/
666 factory	https://666factory.x.yupoo.com/
77 Kicks sneaker	http://77sneakerskick.x.yupoo.com/
A8Firstt	https://www.a8first.com
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
AA Studio	https://aastudiovip.x.yupoo.com/
AAemmanuelle-vip	http://emmanuelle-vip.x.yupoo.com/
Affordableluxury	https://affordableluxurs.x.yupoo.com/categories
Alicesharing	http://alicesharing.x.yupoo.com/albums
Anastasia Factory	https://a0abel.x.yupoo.com/albums
Antina	https://ameliavip.x.yupoo.com/
Audrey	https://audreyvip.x.yupoo.com
A0GETBUY	http://getbuyteam.x.yupoo.com
Belinda Studio	https://minusonevip.x.yupoo.com/
Bella	https://beiia.x.yupoo.com/
Brother Sam	https://www.fashionrepsfam.ru/
Caleaty fashion studio	https://aleaty.x.yupoo.com/albums
COOL KICKS	https://cool-kicks.x.yupoo.com/
Dandelion	https://ace-shop-100.x.yupoo.com/albums
Dora Luxury	https://dora32291.x.yupoo.com/
Elen-Li Top Level	https://elen-li.x.yupoo.com/
Enthalpy	https://enthalpy99.x.yupoo.com/
Frances abdynsehelmTop	https://a1abdy.x.yupoo.com/
Gabrielle Goodal VIP	https://a1baby1.x.yupoo.com/
Happywahel(High end Wholesaler)	https://happywhale.x.yupoo.com/albums
HOLY KICKS	https://herbrother.x.yupoo.com/
MadebyKungFu	https://madebykungfu.x.yupoo.com/albums
Melissa Aahluxury	https://a0aahluxury.x.yupoo.com/
Naisan	https://naisan23.x.yupoo.com/
Nicole618	https://nicole618.x.yupoo.com/
O-ollerep	http://o-ollrep.x.yupoo.com
Repfactory	https://reprfactorys.x.yupoo.com/
SamLuxury	https://samluxuryfactory.x.yupoo.com/categories
Scarlett	https://scarlettluxury.x.yupoo.com
Stockx-888VIP	https://888vip.x.yupoo.com/
Supkicks	https://perfectkickc.x.yupoo.com/categories
Survival Source (Direct)	https://www.survivalsource-ch.com/
TheThunder	https://thethunder.x.yupoo.com/
Voguevault	https://voguevault-rep.x.yupoo.com/
YE Factory	https://yefactory.x.yupoo.com/


Hats


Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
0004ABCFactory	https://abcfactory.x.yupoo.com/
033-Sam Luxury Factory	https://samluxuryfactory.x.yupoo.com/
111-Amen	https://111amen.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
Bridget	http://amilylala2016.x.yupoo.com/
Cftime	https://cftime.x.yupoo.com/
Gabrielle Goodal VIP	https://a1baby1.x.yupoo.com/
Melissa Aahluxury	https://a0aahluxury.x.yupoo.com/
TheThunder	https://thethunder.x.yupoo.com/


Hellstar


Store Name	Link
Alina	https://weidian.com/?userid=247994257
Chaosmade	https://chaosmade.x.yupoo.com/categories
JTC	https://weidian.com/?userid=1864913249&spider_token=3e52
Logan	https://loganhere.x.yupoo.com/categories
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery
Repdog	https://uio.cc/tu48k
Singor	https://steven-1989.x.yupoo.com/categories


Hermes


Store Name	Link
24h-Factory	https://24hfactory.x.yupoo.com/
Affordableluxury	https://affordableluxurs.x.yupoo.com/categories
A0GETBUY	http://getbuyteam.x.yupoo.com
Belinda Studio	https://minusonevip.x.yupoo.com/
Bella	https://beiia.x.yupoo.com/
Caleaty fashion studio	https://aleaty.x.yupoo.com/albums
Chipotle	https://chipotle888.x.yupoo.com/
Dandelion	https://ace-shop-100.x.yupoo.com/albums
Dora Luxury	https://dora32291.x.yupoo.com/
Enthalpy	https://enthalpy99.x.yupoo.com/
Supkicks	https://perfectkickc.x.yupoo.com/categories
Sunhouse	https://sundesigner.shop/
Survival Source (Agent)	http://www.survivalsourcech.com/


Heron Preston


Store Name	Link
HenryReps	https://akdingji.x.yupoo.com/albums


Jerseys


Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
0004ABCFactory	https://abcfactory.x.yupoo.com/
A0GETBUY	http://getbuyteam.x.yupoo.com
Catherine Studio	https://2116601596.x.yupoo.com/
Ezjerseys	https://ezjersey.x.yupoo.com/
YE Factory	https://yefactory.x.yupoo.com/



Jewelry


Store Name	Link


000-Leo	https://000-leo.x.yupoo.com/
008-Aya	https://008-aya.x.yupoo.com/
020-Adam Factory	https://adam-factory.x.yupoo.com/
033-Sam Luxury Factory	https://samluxuryfactory.x.yupoo.com/
0777-GuangzhouVibey	https://guangzhouvibey.x.yupoo.com/
111-Amen	https://111amen.x.yupoo.com/
222-Bella	https://222bella.x.yupoo.com/
24h-Factory	https://24hfactory.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
77 Kicks sneaker	http://77sneakerskick.x.yupoo.com/
A1Luxury	https://a1luxurygoods.x.yupoo.com/
Anastasia Factory	https://a0abel.x.yupoo.com/albums
Audrey	https://audreyvip.x.yupoo.com
A0GETBUY	http://getbuyteam.x.yupoo.com
Belinda Studio	https://minusonevip.x.yupoo.com/
Bella	https://beiia.x.yupoo.com/
Catherine Studio	https://2116601596.x.yupoo.com/
Elen-Li Top Level	https://elen-li.x.yupoo.com/
Enthalpy	https://enthalpy99.x.yupoo.com/
Frances abdynsehelmTop	https://a1abdy.x.yupoo.com/
Hlin	https://hlinjewelry.x.yupoo.com/
Laura Aaron Custom	http://mryejewelryswatches.x.yupoo.com
Melissa Aahluxury	https://a0aahluxury.x.yupoo.com/
Nicole618	https://nicole618.x.yupoo.com/
Stockx-888VIP	https://888vip.x.yupoo.com/
Sunhouse	https://sundesigner.shop/
Survival Source (Agent)	http://www.survivalsourcech.com/
Voguevault	https://voguevault-rep.x.yupoo.com/
Jimmy Choo
Store Name	Link
A-Aurora Factory	https://aurora-01.x.yupoo.com/
AndyUnion	https://andyunion.x.yupoo.com/categories
Brother Sam	https://www.fashionrepsfam.ru/
Scarlett	https://scarlettluxury.x.yupoo.com
JNCO
Store Name	Link
TigerRep	https://tiger-official.x.yupoo.com/albums/
Kith
Store Name	Link
Logan	https://loganhere.x.yupoo.com/categories
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery
Subway	https://hunter0824.x.yupoo.com/categories
Lacoste
Store Name	Link
Black mask	https://windvane168.x.yupoo.com/
SamLuxury	https://samluxuryfactory.x.yupoo.com/categories
Taurus Reps	https://deateath.x.yupoo.com/?lang=en-us


Loewe


Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
0004ABCFactory	https://abcfactory.x.yupoo.com/
001-Yang-888	https://001-yang-888.x.yupoo.com/
008-Aya	https://008-aya.x.yupoo.com/
033-Sam Luxury Factory	https://samluxuryfactory.x.yupoo.com/
0880-Ama	https://0880ama.x.yupoo.com/
111-Amen	https://111amen.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
AAemmanuelle-vip	http://emmanuelle-vip.x.yupoo.com/
Alexia	https://000-ax.x.yupoo.com/
Caleaty fashion studio	https://aleaty.x.yupoo.com/albums
Carrotmade	https://carrotmade.x.yupoo.com/
Elen-Li Top Level	https://elen-li.x.yupoo.com/
Happywahel(High end Wholesaler)	https://happywhale.x.yupoo.com/albums
O-ollerep	http://o-ollrep.x.yupoo.com
SamLuxury	https://samluxuryfactory.x.yupoo.com/categories
Survival Source (Agent)	http://www.survivalsourcech.com/
Survival Source (Direct)	https://www.survivalsource-ch.com/
Loro Piana
Store Name	Link
Alexia	https://000-ax.x.yupoo.com/
AndyUnion	https://andyunion.x.yupoo.com/categories
Fuguier	https://fuguier38.x.yupoo.com/categories/4608492
Happywahel(High end Wholesaler)	https://happywhale.x.yupoo.com/albums
Premium888	https://premium888.x.yupoo.com/


Louis Vuitton


Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
0004ABCFactory	https://abcfactory.x.yupoo.com/
001-Yang-888	https://001-yang-888.x.yupoo.com/
002-Super Wang	https://superwang02.x.yupoo.com
008-Aya	https://008-aya.x.yupoo.com/
020-Adam Factory	https://adam-factory.x.yupoo.com/
033-Sam Luxury Factory	https://samluxuryfactory.x.yupoo.com/
0880-Ama	https://0880ama.x.yupoo.com/
24h-Factory	https://24hfactory.x.yupoo.com/
666 factory	https://666factory.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
77 Kicks sneaker	http://77sneakerskick.x.yupoo.com/
A1Luxury	https://a1luxurygoods.x.yupoo.com/
A8Firstt	https://www.a8first.com
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
AA Studio	https://aastudiovip.x.yupoo.com/
A-Aurora Factory	https://aurora-01.x.yupoo.com/
AAemmanuelle-vip	http://emmanuelle-vip.x.yupoo.com/
Affordableluxury	https://affordableluxurs.x.yupoo.com/categories
Alex	https://alex8181688.x.yupoo.com
Alexander	https://alexander1688.x.zhidian-inc.cn/albums
Alexia	https://000-ax.x.yupoo.com/
Alicesharing	http://alicesharing.x.yupoo.com/albums
Anastasia Factory	https://a0abel.x.yupoo.com/albums
Antina	https://ameliavip.x.yupoo.com/
Audrey	https://audreyvip.x.yupoo.com
A0GETBUY	http://getbuyteam.x.yupoo.com
Belinda Studio	https://minusonevip.x.yupoo.com/
Bella	https://beiia.x.yupoo.com/
Brother Sam	https://www.fashionrepsfam.ru/
Budget Clothing	https://budgetclothing.x.yupoo.com/categories
Caleaty fashion studio	https://aleaty.x.yupoo.com/albums
Catherine Studio	https://2116601596.x.yupoo.com/
Chipotle	https://chipotle888.x.yupoo.com/
COOL KICKS	https://cool-kicks.x.yupoo.com/
Dandelion	https://ace-shop-100.x.yupoo.com/albums
Dora Luxury	https://dora32291.x.yupoo.com/
Elen-Li Top Level	https://elen-li.x.yupoo.com/
Enthalpy	https://enthalpy99.x.yupoo.com/
Fashionbroda	http://fashionbroda.x.yupoo.com/
Frances abdynsehelmTop	https://a1abdy.x.yupoo.com/
Fuguier	https://fuguier38.x.yupoo.com/categories/4383841
Gabrielle Goodal VIP	https://a1baby1.x.yupoo.com/
Happywahel(High end Wholesaler)	https://happywhale.x.yupoo.com/albums
Harry	https://cjcs258852.x.yupoo.com/
HOLY KICKS	https://herbrother.x.yupoo.com/
Kickzlucas	https://www.lucaskickz.com/
kkkk1616	https://kkkk1616.x.yupoo.com
Laura Aaron Custom	http://mryejewelryswatches.x.yupoo.com
Lily	https://linlinfeng1.x.yupoo.com/albums
Jelly	https://zengshuaige.x.yupoo.com/
MadebyKungFu	https://madebykungfu.x.yupoo.com/albums
Melissa Aahluxury	https://a0aahluxury.x.yupoo.com/
Nicole618	https://nicole618.x.yupoo.com/
O-ollerep	http://o-ollrep.x.yupoo.com
Old Cobbler (Wallets)	https://oldcobbler-oc-2019.x.yupoo.com/
Repfactory	https://reprfactorys.x.yupoo.com/
SamLuxury	https://samluxuryfactory.x.yupoo.com/categories
Scarlett	https://scarlettluxury.x.yupoo.com
Stockx-888VIP	https://888vip.x.yupoo.com/
Supkicks	https://perfectkickc.x.yupoo.com/categories
Survival Source (Agent)	http://www.survivalsourcech.com/
TheThunder	https://thethunder.x.yupoo.com/
Voguevault	https://voguevault-rep.x.yupoo.com/
YE Factory	https://yefactory.x.yupoo.com/
YMDD	https://linktr.ee/ymdd168
ZuMingLuxe The Highest	http://mingcustomized.x.yupoo.com
Wanmidu	https://wanmidu.x.yupoo.com/


Lululemon


Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
00008-Cooper	https://hch-vip.x.yupoo.com/albums
033-Sam Luxury Factory	https://samluxuryfactory.x.yupoo.com/
0777-GuangzhouVibey	https://guangzhouvibey.x.yupoo.com/
Anastasia Factory	https://a0abel.x.yupoo.com/albums
Repfactory	https://reprfactorys.x.yupoo.com/
SamLuxury	https://samluxuryfactory.x.yupoo.com/categories


Maison Margiela


Store Name	Link
666 factory	https://666factory.x.yupoo.com/
A-Aurora Factory	https://aurora-01.x.yupoo.com/
HenryReps	https://akdingji.x.yupoo.com/albums
Singor	https://steven-1989.x.yupoo.com/categories


Metra

Store Name	Link
Peng Reps	https://pengreps.x.yupoo.com/


MiuMiu

Store Name	Link
Alexia	https://000-ax.x.yupoo.com/
Antina	https://ameliavip.x.yupoo.com/
Brother Sam	https://www.fashionrepsfam.ru/
Caleaty fashion studio	https://aleaty.x.yupoo.com/albums
Elen-Li Top Level	https://elen-li.x.yupoo.com/
Scarlett	https://scarlettluxury.x.yupoo.com
Stockx-888VIP	https://888vip.x.yupoo.com/


Moncler

Store Name	Link
AZachariahTOP	https://zzaccaheusvip.x.yupoo.com/
AndyUnion	https://andyunion.x.yupoo.com/categories
Dora Luxury	https://dora32291.x.yupoo.com/
Fashionbroda	http://fashionbroda.x.yupoo.com/
Logan	https://loganhere.x.yupoo.com/categories
Stockx-888VIP	https://888vip.x.yupoo.com/


Moschino

Store Name	Link
AndyUnion	https://andyunion.x.yupoo.com/categories
Scarlett	https://scarlettluxury.x.yupoo.com


New Balance

Store Name	Link
24h-Factory	https://24hfactory.x.yupoo.com/
AndyUnion	https://andyunion.x.yupoo.com/categories
COOL KICKS	https://cool-kicks.x.yupoo.com/
HOLY KICKS	https://herbrother.x.yupoo.com/
Kickzlucas	https://www.lucaskickz.com/
KOSneaker	https://weidian.com/?userid=211687012
Repfactory	https://reprfactorys.x.yupoo.com/
YE Factory	https://yefactory.x.yupoo.com/



Nike

Store Name	Link
0000Ace	https://2018-ace.x.yupoo.com/
24h-Factory	https://24hfactory.x.yupoo.com/
A8Firstt	https://www.a8first.com
AndyUnion	https://andyunion.x.yupoo.com/categories
Antina	https://ameliavip.x.yupoo.com/
A-stars	https://a-stars.x.yupoo.com/
A0GETBUY	http://getbuyteam.x.yupoo.com
Budgetshoes	https://budgetshoess.x.yupoo.com/albums
Catherine Studio	https://2116601596.x.yupoo.com/
Cftime	https://cftime.x.yupoo.com/
Cheapgoods	https://crespo999.x.yupoo.com/categories
Crazyrep	https://crazyrep.x.yupoo.com/
COOL KICKS	https://cool-kicks.x.yupoo.com/
Frances abdynsehelmTop	https://a1abdy.x.yupoo.com/
Harry	https://cjcs258852.x.yupoo.com/
HOLY KICKS	https://herbrother.x.yupoo.com/
Logan	https://loganhere.x.yupoo.com/categories
Maikesneakers	https://www.maikesneakers111.com/
Nice Clothes	https://weidian.com/?userid=317265386&spider_token=cd8f&tabType=all
Repfactory	https://reprfactorys.x.yupoo.com/
Saul Goodman	https://saul-goodman0721.x.yupoo.com/albums
Supkicks	https://perfectkickc.x.yupoo.com/categories
TMF	https://k.youshop10.com/G2f5H0nD
Voguevault	https://voguevault-rep.x.yupoo.com/
YE Factory	https://yefactory.x.yupoo.com/

Off-White

Store Name	Link
24h-Factory	https://24hfactory.x.yupoo.com/
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
Anastasia Factory	https://a0abel.x.yupoo.com/albums
Carrotmade	https://carrotmade.x.yupoo.com/
COOL KICKS	https://cool-kicks.x.yupoo.com/
Fakelab	https://fakelab.x.yupoo.com/
HOLY KICKS	https://herbrother.x.yupoo.com/
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery
Repbrothers	Repbrothers
Singor	https://steven-1989.x.yupoo.com/categories
YE Factory	https://yefactory.x.yupoo.com/

Palace

Store Name	Link
ASL	https://shop58770420.taobao.com
Chaosmade	https://chaosmade.x.yupoo.com/categories
HenryReps	https://akdingji.x.yupoo.com/albums
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery
Saul Goodman	https://saul-goodman0721.x.yupoo.com/albums
TigerRep	https://tiger-official.x.yupoo.com/albums/

Palm Angels

Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
0000Ace	https://2018-ace.x.yupoo.com/
001-Yang-888	https://001-yang-888.x.yupoo.com/
002-Super Wang	https://superwang02.x.yupoo.com
008-Aya	https://008-aya.x.yupoo.com/
020-Adam Factory	https://adam-factory.x.yupoo.com/
033-Sam Luxury Factory	https://samluxuryfactory.x.yupoo.com/
0880-Ama	https://0880ama.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
Alicesharing	http://alicesharing.x.yupoo.com/albums
Carrotmade	https://carrotmade.x.yupoo.com/
HenryReps	https://akdingji.x.yupoo.com/albums
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery
Repbrothers	https://repsbrothers.x.yupoo.com/

Patagonia

Store Name	Link
AndyUnion	https://andyunion.x.yupoo.com/categories

Perfume

Store Name	Link
008-Aya	https://008-aya.x.yupoo.com/
222-Bella	https://222bella.x.yupoo.com/
Amreps	https://amreps.x.yupoo.com/
Caleaty fashion studio	https://aleaty.x.yupoo.com/albums
PerfectReps	https://perfectreps.x.yupoo.com/


Polar Jeans

Store Name	Link
3Madman	https://3madman.x.yupoo.com/


Prada


Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
002-Super Wang	https://superwang02.x.yupoo.com
008-Aya	https://008-aya.x.yupoo.com/
111-Amen	https://111amen.x.yupoo.com/
24h-Factory	https://24hfactory.x.yupoo.com/
666 factory	https://666factory.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
A1Luxury	https://a1luxurygoods.x.yupoo.com/
A8First	https://www.a8first.com
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
AA Studio	https://aastudiovip.x.yupoo.com/
Affordableluxury	https://affordableluxurs.x.yupoo.com/categories
Anastasia Factory	https://a0abel.x.yupoo.com/albums
A-stars	https://a-stars.x.yupoo.com/
A0GETBUY	http://getbuyteam.x.yupoo.com
Belinda Studio	https://minusonevip.x.yupoo.com/
Catherine Studio	https://2116601596.x.yupoo.com/
Chipotle	https://chipotle888.x.yupoo.com/
Frances abdynsehelmTop	https://a1abdy.x.yupoo.com/
Gabrielle Goodal VIP	https://a1baby1.x.yupoo.com/
HOLY KICKS	https://herbrother.x.yupoo.com/
Kickzlucas	https://www.lucaskickz.com/
O-ollerep	http://o-ollrep.x.yupoo.com
Repfactory	https://reprfactorys.x.yupoo.com/
Scarlett	https://scarlettluxury.x.yupoo.com
Supkicks	https://perfectkickc.x.yupoo.com/categories
Stockx-888VIP	https://888vip.x.yupoo.com/
Survival Source (Agent)	http://www.survivalsourcech.com/
Survival Source (Direct)	https://www.survivalsource-ch.com/
TheThunder	https://thethunder.x.yupoo.com/
YE Factory	https://yefactory.x.yupoo.com/
Voguevault	https://voguevault-rep.x.yupoo.com/
Vogue	https://vogue818.x.yupoo.com/
ZZaccaheus Factory	https://zzaccaheusvip.x.yupoo.com/

Ralph Lauren

Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
008-Aya	https://008-aya.x.yupoo.com/
0777-GuangzhouVibey	https://guangzhouvibey.x.yupoo.com/
0880-Ama	https://0880ama.x.yupoo.com/
111-Amen	https://111amen.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
AAemmanuelle-vip	http://emmanuelle-vip.x.yupoo.com/
Anastasia Factory	https://a0abel.x.yupoo.com/albums
Belinda Studio	https://minusonevip.x.yupoo.com/
Black mask	https://windvane168.x.yupoo.com/
Crazyrep	https://crazyrep.x.yupoo.com/
Elen-Li Top Level	https://elen-li.x.yupoo.com/
Fashionbroda	http://fashionbroda.x.yupoo.com/
Saul Goodman	https://saul-goodman0721.x.yupoo.com/albums
Taurus Reps	https://deateath.x.yupoo.com/?lang=en-us
YE Factory	https://yefactory.x.yupoo.com/
ZZaccaheus Factory	https://zzaccaheusvip.x.yupoo.com/

Represent

Store Name	Link
Chaosmade	https://chaosmade.x.yupoo.com/categories
Fashion319	https://www.fashion319top.shop/R5pr5s59t-c188711/
Singor	https://steven-1989.x.yupoo.com/categories
Subway	https://hunter0824.x.yupoo.com/categories

Rhude

Store Name	Link
AKRep Studio	https://k.youshop10.com/PnEDuDrM
Singor	https://steven-1989.x.yupoo.com/categories
Subway	https://hunter0824.x.yupoo.com/categories

Rick Owens

Store Name	Link
002-Super Wang	https://superwang02.x.yupoo.com
111-Amen	https://111amen.x.yupoo.com/
24h-Factory	https://24hfactory.x.yupoo.com/
A-Aurora Factory	https://aurora-01.x.yupoo.com/
AndyUnion	https://andyunion.x.yupoo.com/categories
Belinda Studio	https://minusonevip.x.yupoo.com/
Catherine Studio	https://2116601596.x.yupoo.com/
COOL KICKS	https://cool-kicks.x.yupoo.com/
Frances abdynsehelmTop	https://a1abdy.x.yupoo.com/
HOLY KICKS	https://herbrother.x.yupoo.com/
Melissa Aahluxury	https://a0aahluxury.x.yupoo.com/
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery
ZZaccaheus Factory	https://zzaccaheusvip.x.yupoo.com/

SP5DER

Store Name	Link
AKRep Studio	https://k.youshop10.com/GW5MLSGC
Repdog	https://uio.cc/tu48k

Saint Laurent

Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
00008-Cooper	https://hch-vip.x.yupoo.com/albums
0000Ace	https://2018-ace.x.yupoo.com/
002-Super Wang	https://superwang02.x.yupoo.com
033-Sam Luxury Factory	https://samluxuryfactory.x.yupoo.com/
0777-GuangzhouVibey	https://guangzhouvibey.x.yupoo.com/
0880-Ama	https://0880ama.x.yupoo.com/
666 factory	https://666factory.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
77 Kicks sneaker	http://77sneakerskick.x.yupoo.com/
A1Luxury	https://a1luxurygoods.x.yupoo.com/
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
AAemmanuelle-vip	http://emmanuelle-vip.x.yupoo.com/
Alexia	https://000-ax.x.yupoo.com/
Anastasia Factory	https://a0abel.x.yupoo.com/albums
Antina	https://ameliavip.x.yupoo.com/
Audrey	https://audreyvip.x.yupoo.com
A0GETBUY	http://getbuyteam.x.yupoo.com
Brother Sam	https://www.fashionrepsfam.ru/
Elizabeth Corporation	https://a0aaa1bettly.x.yupoo.com/
Melissa Aahluxury	https://a0aahluxury.x.yupoo.com/
Scarlett	https://scarlettluxury.x.yupoo.com
Stockx-888VIP	https://888vip.x.yupoo.com/
Survival Source (Agent)	http://www.survivalsourcech.com/
Survival Source (Direct)	https://www.survivalsource-ch.com/
ZZaccaheus Factory	https://zzaccaheusvip.x.yupoo.com/
ZoeyFR168	https://zoey818.x.yupoo.com/albums/

Shoes

Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
24h-Factory	https://24hfactory.x.yupoo.com/
77 Kicks sneaker	http://77sneakerskick.x.yupoo.com/
AA Studio	https://aastudiovip.x.yupoo.com/
A0GETBUY	http://getbuyteam.x.yupoo.com
Alex	https://alex8181688.x.yupoo.com
Cailailai	https://cailailai.x.yupoo.com
CSJ	https://csjsnkrs.x.yupoo.com/albums
COOL KICKS	https://cool-kicks.x.yupoo.com/
Dora Luxury	https://doraluxury.x.yupoo.com/
ezreps	https://ezreps.x.yupoo.com/
Gabrielle Goodal VIP	https://a1baby1.x.yupoo.com/
Happywahel(High end Wholesaler)	https://happywhale.x.yupoo.com/albums
Holy Kicks	https://herbrother.x.yupoo.com/
Jelly (Trainers)	https://zengshuaige.x.yupoo.com/albums
Kickzlucas	https://www.lucaskickz.com/
Koala	https://2335499519.x.yupoo.com/albums
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery
Naisan	https://naisan23.x.yupoo.com/
Nicole618	https://nicole618.x.yupoo.com/
PerfectReps	https://perfectreps.x.yupoo.com/
Supkicks	https://perfectkickc.x.yupoo.com/categories
TMF	https://k.youshop10.com/G2f5H0nD
Voguevault	https://voguevault-rep.x.yupoo.com/
Wanmidu	https://wanmidu.x.yupoo.com/
YE-Factory	https://yefactory.x.yupoo.com/

Stone Island

Store Name	Link
0777-GuangzhouVibey	https://guangzhouvibey.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
A1Baby1nselmaVIP	https://a1baby1.x.yupoo.com/
Alicesharing	http://alicesharing.x.yupoo.com/albums
AndyUnion	https://andyunion.x.yupoo.com/categories
Fashion319	https://www.fashion319top.shop/Is8194-c188719/
Ninja In Stone	https://ninjainstone.x.yupoo.com/
Gabrielle Goodal VIP	https://a1baby1.x.yupoo.com/
PerfectReps	https://perfectreps.x.yupoo.com/
Topstoney	https://topstoneyuk.x.yupoo.com

Stussy

Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
008-Aya	https://008-aya.x.yupoo.com/
0777-GuangzhouVibey	https://guangzhouvibey.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
A0Abbykickluxury	https://a0abbykickluxury.x.yupoo.com/
ASL	https://shop58770420.taobao.com
AZachariahTOP	https://zzaccaheusvip.x.yupoo.com/
Alicesharing	http://alicesharing.x.yupoo.com/albums
AndyUnion	https://andyunion.x.yupoo.com/categories
Black mask	https://windvane168.x.yupoo.com/
Catherine Studio	https://2116601596.x.yupoo.com/
Frances abdynsehelmTop	https://a1abdy.x.yupoo.com/
HenryReps	https://akdingji.x.yupoo.com/albums
Logan	https://loganhere.x.yupoo.com/categories
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery
PerfectReps	https://perfectreps.x.yupoo.com/
Pika	https://pikachushop.x.yupoo.com/
Saul Goodman	https://saul-goodman0721.x.yupoo.com/albums
Singor	https://steven-1989.x.yupoo.com/categories
Taurus Reps	https://deateath.x.yupoo.com/?lang=en-us
ZZaccaheus Factory	https://zzaccaheusvip.x.yupoo.com/

Sunglasses

Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
008-Aya	https://008-aya.x.yupoo.com/
020-Adam Factory	https://adam-factory.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
AA Studio	https://aastudiovip.x.yupoo.com
A0GETBUY	http://getbuyteam.x.yupoo.com
Catherine Studio	https://2116601596.x.yupoo.com/
Crazyrep	https://crazyrep.x.yupoo.com/
Elizabeth Corporation	https://a0aaa1bettly.x.yupoo.com/
Gabrielle Goodal VIP	https://a1baby1.x.yupoo.com/
Melissa Aahluxury	https://a0aahluxury.x.yupoo.com/
Nicole618	https://nicole618.x.yupoo.com/
Stockx-888VIP	https://888vip.x.yupoo.com/
Survival Source (Agent)	http://www.survivalsourcech.com/
Survival Source (Direct)	https://www.survivalsource-ch.com/

Supreme

Store Name	Link
3Madman	https://3madman.x.yupoo.com/
Black mask	https://windvane168.x.yupoo.com/
Catherine Studio	https://2116601596.x.yupoo.com/
Dargonreps	https://noghost.x.yupoo.com/albums?tab=gallery
Frances abdynsehelmTop	https://a1abdy.x.yupoo.com/
HenryReps	https://akdingji.x.yupoo.com/albums
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery
Singor	https://steven-1989.x.yupoo.com/categories
Teenageclub	https://teenageclub.taobao.com/
TigerRep	https://tiger-official.x.yupoo.com/albums/
UNHS	https://shop379238332.taobao.com
ZZaccaheus Factory	https://zzaccaheusvip.x.yupoo.com/

Syna World

Store Name	Link
Chaosmade	https://chaosmade.x.yupoo.com/categories
HenryReps	https://akdingji.x.yupoo.com/albums
JTC	https://weidian.com/?userid=1864913249&spider_token=3e52
Logan	https://loganhere.x.yupoo.com/categories
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery

The North Face

Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
0000Ace	https://2018-ace.x.yupoo.com/
001-Yang-888	https://001-yang-888.x.yupoo.com/
033-Sam Luxury Factory	https://samluxuryfactory.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
A1Baby1nselmaVIP	https://a1baby1.x.yupoo.com/
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
AndyUnion	https://andyunion.x.yupoo.com/categories
Belinda Studio	https://minusonevip.x.yupoo.com/
Caleaty fashion studio	https://aleaty.x.yupoo.com/albums
Catherine Studio	https://2116601596.x.yupoo.com/
COOL KICKS	https://cool-kicks.x.yupoo.com/
Elizabeth Corporation	https://a0aaa1bettly.x.yupoo.com/
Frances abdynsehelmTop	https://a1abdy.x.yupoo.com/
Gabrielle Goodal VIP	https://a1baby1.x.yupoo.com/
HOLY KICKS	https://herbrother.x.yupoo.com/
Melissa Aahluxury	https://a0aahluxury.x.yupoo.com/
Mook	https://mook-official.x.yupoo.com/albums?tab=gallery
Nice Clothes	https://weidian.com/?userid=317265386&spider_token=cd8f&tabType=all
O-ollerep	http://o-ollrep.x.yupoo.com
YE Factory	https://yefactory.x.yupoo.com/
ZZaccaheus Factory	https://zzaccaheusvip.x.yupoo.com/

Thom Browne

Store Name	Link
002-Super Wang	https://superwang02.x.yupoo.com
0880-Ama	https://0880ama.x.yupoo.com/
111-Amen	https://111amen.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
AndyUnion	https://andyunion.x.yupoo.com/categories
HenryReps	https://akdingji.x.yupoo.com/albums
Logan	https://loganhere.x.yupoo.com/categories
SamLuxury	https://samluxuryfactory.x.yupoo.com/categories

Thrasher

Store Name	Link
ASL	https://shop58770420.taobao.com

Tom Ford

Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
033-Sam Luxury Factory	https://samluxuryfactory.x.yupoo.com/
0880-Ama	https://0880ama.x.yupoo.com/
111-Amen	https://111amen.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
Anastasia Factory	https://a0abel.x.yupoo.com/albums
AndyUnion	https://andyunion.x.yupoo.com/categories
Elen-Li Top Level	https://elen-li.x.yupoo.com/
SamLuxury	https://samluxuryfactory.x.yupoo.com/categories
ZZaccaheus Factory	https://zzaccaheusvip.x.yupoo.com/

Tommy Hillfiger

Store Name	Link
001-Yang-888	https://001-yang-888.x.yupoo.com/
008-Aya	https://008-aya.x.yupoo.com/
020-Adam Factory	https://adam-factory.x.yupoo.com/
0880-Ama	https://0880ama.x.yupoo.com/
AAemmanuelle-vip	http://emmanuelle-vip.x.yupoo.com/
AZachariahTOP	https://zzaccaheusvip.x.yupoo.com/
AndyUnion	https://andyunion.x.yupoo.com/categories
Logan	https://loganhere.x.yupoo.com/categories

Trapstar

Store Name	Link
HenryReps	https://akdingji.x.yupoo.com/albums
JTC	https://weidian.com/?userid=1864913249&spider_token=3e52
Meo	https://meo-official.x.yupoo.com/
Pika	https://pikachushop.x.yupoo.com/
TigerRep	https://tiger-official.x.yupoo.com/albums/

Valentino

Store Name	Link
222-Bella	https://222bella.x.yupoo.com/
666 factory	https://666factory.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
AndyUnion	https://andyunion.x.yupoo.com/categories

Versace

Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
0777-GuangzhouVibey	https://guangzhouvibey.x.yupoo.com/
111-Amen	https://111amen.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
A-Aurora Factory	https://aurora-01.x.yupoo.com/
AAemmanuelle-vip	http://emmanuelle-vip.x.yupoo.com/
AndyUnion	https://andyunion.x.yupoo.com/categories
Catherine Studio	https://2116601596.x.yupoo.com/
Frances abdynsehelmTop	https://a1abdy.x.yupoo.com/
Gabrielle Goodal VIP	https://a1baby1.x.yupoo.com/
SamLuxury	https://samluxuryfactory.x.yupoo.com/categories

Vetements

Store Name	Link
000-Leo	https://000-leo.x.yupoo.com/
00008-Cooper	https://hch-vip.x.yupoo.com/albums
002-Super Wang	https://superwang02.x.yupoo.com
020-Adam Factory	https://adam-factory.x.yupoo.com/
033-Sam Luxury Factory	https://samluxuryfactory.x.yupoo.com/
0777-GuangzhouVibey	https://guangzhouvibey.x.yupoo.com/
0880-Ama	https://0880ama.x.yupoo.com/
222-Bella	https://222bella.x.yupoo.com/
666-Luxxxchen	https://luxxxchen.x.yupoo.com/
A-Aurora Factory	https://aurora-01.x.yupoo.com/
Alicesharing	http://alicesharing.x.yupoo.com/albums
Anastasia Factory	https://a0abel.x.yupoo.com/albums
AndyUnion	https://andyunion.x.yupoo.com/categories
Elizabeth Corporation	https://a0aaa1bettly.x.yupoo.com/
HenryReps	https://akdingji.x.yupoo.com/albums
SamLuxury	https://samluxuryfactory.x.yupoo.com/categories
Singor	https://steven-1989.x.yupoo.com/categories

Vlone

Store Name	Link
ASL	https://shop58770420.taobao.com
Chaosmade	https://chaosmade.x.yupoo.com/categories
HenryReps	https://akdingji.x.yupoo.com/albums
Singor	https://steven-1989.x.yupoo.com/categories

Yeezy

Store Name	Link
COOL KICKS	https://cool-kicks.x.yupoo.com/
HenryReps	https://akdingji.x.yupoo.com/albums
HOLY KICKS	https://herbrother.x.yupoo.com/
Logan	https://loganhere.x.yupoo.com/categories
KOSneaker	https://weidian.com/?userid=1738883845
Singor	https://steven-1989.x.yupoo.com/categories
Voguevault	https://voguevault-rep.x.yupoo.com/
YE Factory	https://yefactory.x.yupoo.com/

Zegna

Store Name	Link
002-Super Wang	https://superwang02.x.yupoo.com
008-Aya	https://008-aya.x.yupoo.com/
222-Bella	https://222bella.x.yupoo.com/
666 factory	https://666factory.x.yupoo.com/
AA Peter Pan	https://peterpanwholesaler.x.yupoo.com/
AndyUnion	https://andyunion.x.yupoo.com/categories
Caleaty fashion studio	https://aleaty.x.yupoo.com/albums
Dora Luxury	https://dora32291.x.yupoo.com/
Watches
Store Name	Link
Duke	https://p719583387.x.yupoo.com/
`

export default function PasswordProtectedLinks() {
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")

  const correctPassword = "charlie"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === correctPassword) {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Incorrect password. Try again.")
      setPassword("")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setPassword("")
    setError("")
  }

  // Function to convert URLs in text to clickable links
  const renderTextWithLinks = (text: string) => {
    // Enhanced URL regex to catch more URL formats
    const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.([a-zA-Z]{2,})(\/[^\s]*)?)/g

    const parts = text.split("\n").map((line, lineIndex) => {
      const lineParts = line.split(urlRegex)

      return (
        <div key={lineIndex}>
          {lineParts.map((part, partIndex) => {
            if (urlRegex.test(part)) {
              // Ensure URL has protocol
              let url = part
              if (!url.startsWith("http://") && !url.startsWith("https://")) {
                url = "https://" + url
              }

              return (
                <a
                  key={partIndex}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 underline hover:no-underline transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  {part}
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              )
            }
            return part
          })}
        </div>
      )
    })

    return parts
  }

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto">
        <div className="bg-black/50 border border-red-500/30 rounded-lg p-8 backdrop-blur-sm">
          <div className="text-center mb-6">
            <Lock className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Access Restricted</h3>
            <p className="text-gray-400 text-sm">Enter the password to view document</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 backdrop-blur-sm text-white pr-12"
                autoComplete="off"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            {error && (
              <div className="text-red-400 text-sm text-center bg-red-900/20 border border-red-500/30 rounded-lg p-2">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700"
            >
              <Unlock className="h-4 w-4 mr-2" />
              Access Document
            </Button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2 text-green-400">
          <Unlock className="h-5 w-5" />
          <span className="text-sm font-medium">Document Access Granted</span>
        </div>
        <Button
          onClick={handleLogout}
          variant="outline"
          size="sm"
          className="border-red-500/50 text-red-400 hover:bg-red-500/20 bg-transparent"
        >
          <Lock className="h-3 w-3 mr-1" />
          Logout
        </Button>
      </div>

      {/* Document */}
      <div className="bg-black/30 border border-red-500/20 rounded-lg backdrop-blur-sm">
        <div className="p-8">
          <div className="text-gray-300 whitespace-pre-wrap font-mono text-sm leading-relaxed">
            {renderTextWithLinks(documentContent)}
          </div>
        </div>
      </div>
    </div>
  )
}
