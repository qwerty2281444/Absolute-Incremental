let money = new Decimal(localStorage.getItem('money') || 0);
let addend = new Decimal(localStorage.getItem('addend') || 1);
let upgradeCost = new Decimal(localStorage.getItem('upgradeCost') || 1);
let multiply = new Decimal(localStorage.getItem('multiply') || 1);
let upgradeCost2 = new Decimal(localStorage.getItem('upgradeCost2') || 100);
let exponent = new Decimal(localStorage.getItem('exponent') || 1);
let upgradeCost3 = new Decimal(localStorage.getItem('upgradeCost3') || 1000000);
let divider = new Decimal(localStorage.getItem('divider') || 1);
let upgradeCost4 = new Decimal(localStorage.getItem('upgradeCost4') || "1e20");
let prestigepoints = new Decimal(localStorage.getItem('prestigepoints') || 0);
let PPgain = localStorage.getItem('PPgain') || money.max(1).pow(0.1).div(10).sub(1).max(0).floor(); 
let PPupgradeCost = new Decimal(localStorage.getItem('PPupgradeCost') || 1);
let PPupgrade2Cost = new Decimal(localStorage.getItem('PPupgrade2Cost') || 1);
let addendpersecond = new Decimal(localStorage.getItem('addendpersecond') || 0);
let pmoneymultiply = new Decimal(localStorage.getItem('pmoneymultiply') || 1)
let gems = new Decimal(localStorage.getItem('gems') || 0);
let gemchance = new Decimal(localStorage.getItem('gemchance') || 0.01)
let gemchancecost = new Decimal(localStorage.getItem('gemchancecost') || 1);
let gemmoneycost = new Decimal(localStorage.getItem('gemmoneycost') || 1);
let gemmoneytimes = new Decimal(localStorage.getItem('gemmoneytimes') || 0);
let gemmoneymultibase = new Decimal(localStorage.getItem('gemmoneymultibase') || 5);
let gemppcost = new Decimal(localStorage.getItem('gemppcost') || 2);
let gemppmultibase = new Decimal(localStorage.getItem('gemppmuultibase') || 2);
let gempptimes = new Decimal(localStorage.getItem('gempptimes') || 0);
let prestigegen = new Decimal(localStorage.getItem('prestigegen') || 0);
let prestigegencost = new Decimal(localStorage.getItem('prestigegencost') || 100);
let mulautobuyCost = new Decimal(localStorage.getItem('mulautobuycost') || "1e25");
let mulautobuy = new Decimal(localStorage.getItem('mulautobuy') || 0) ;
let expautobuyCost = new Decimal(localStorage.getItem('expautobuyCost') || "1e30");
let expautobuy = new Decimal(localStorage.getItem('expautobuy') ||  0) ;
let divautobuyCost = new Decimal(localStorage.getItem('divautobuycost') || "1e40");
let divautobuy = new Decimal(localStorage.getItem('divautobuy') ||  0) ;
let gemgencost = new Decimal(localStorage.getItem('gemgencost') || 10000);
let gemgen = new Decimal(localStorage.getItem('gemgen') || 0);
let prestigegen2cost = new Decimal(localStorage.getItem('prestigegen2cost') || 30000);
let prestigegen2 = new Decimal(localStorage.getItem('prestigegen2') || 0) ;
let genupgcost = new Decimal(localStorage.getItem('genupgcost') || "1e6");
let genupg = new Decimal(localStorage.getItem('genupg') || 1);
let ppautocost = new Decimal(localStorage.getItem('ppautocost') || "1e7");
let ppauto = new Decimal(localStorage.getItem('genupg') || 0) ;
let RPgain = localStorage.getItem('RPgain') || prestigepoints.max(1).pow(0.15).div(8).sub(1).max(0).floor();
let rebirthpoints = new Decimal(localStorage.getItem('rebirthpoints') || 0);
let RPupgradeCost = new Decimal(localStorage.getItem('RPupgradeCost') || 1);
let rmoneymultiply = new Decimal(localStorage.getItem('rmoneymultiply') || 1);
let RPupgradeCost2 = new Decimal(localStorage.getItem('PPupgradeCost') || 1);
let rppmultiply = new Decimal(localStorage.getItem('rppmultiply') || 1);

function format(num) {
  return num.toFixed(3);
}
function updateDisplay() {
  document.getElementById("money-display").textContent =
    `💰 Money: $${format(money)} (${format(addend.mul(multiply).pow(exponent).mul(pmoneymultiply).mul(gemmoneymultibase.pow(gemmoneytimes)).mul(rmoneymultiply))}/s)`;
  document.getElementById("addend-display").textContent =
    `Addend: +$${format(addend)}/s`;
  document.getElementById("cost-display").textContent =
    `Cost: $${format(upgradeCost)}`;
    document.getElementById("multiply-display").textContent =
    `Multiply: +X${format(multiply)}/s`;
  document.getElementById("cost2-display").textContent =
    `Cost: $${format(upgradeCost2)}`;
     document.getElementById("exponent-display").textContent =
    `Exponent: +^${format(exponent)}`;
  document.getElementById("cost3-display").textContent =
    `Cost: $${format(upgradeCost3)}`;
    document.getElementById("divider-display").textContent =
    `Divide upgrades cost by 10: /${format(divider)}`;
  document.getElementById("cost4-display").textContent =
    `Cost: $${format(upgradeCost4)}`;
    document.getElementById("pp-gain").textContent =
    ` ${format(PPgain)}`;
    document.getElementById("pps").textContent =
    `${format(prestigepoints)}`;
    document.getElementById("addendgen-display").textContent =
    `Addend gen: +1 addend every 10 second ${format(addendpersecond.div(10))}/s`;
    document.getElementById("ppcost-display").textContent =
    `Cost: ${format(PPupgradeCost)}`;
    document.getElementById("gems-display").textContent =
  `💎 Gems: ${format(gems)} they have ${format(gemchance.mul(100))}% chance to spawn`;
  document.getElementById("gemchance-display").textContent =
  `Gem chance: +${format(gemchance.mul(100))}%`;
  document.getElementById("gem-money-display").textContent =
  `Multiply money/s by 5: X${format(gemmoneymultibase.pow(gemmoneytimes))}`;
  document.getElementById("gemcost2-display").textContent =
  `Cost: ${format(gemmoneycost)}`
  document.getElementById("gem-pp-display").textContent =
  `Double pp gain: X${format(gemppmultibase.pow(gempptimes))}`;
  document.getElementById("gemcost3-display").textContent =
  `Cost: ${format(gemppcost)}`
  document.getElementById("ppcost2-display").textContent =
    `Cost: ${format(PPupgrade2Cost)}`;
  document.getElementById("bettermul-display").textContent =
  `Better multiply: x${format(pmoneymultiply)}/s`
    document.getElementById("gemgencost-display").textContent =
    `Cost: ${format(gemgencost)} PP`;
    document.getElementById("rp-gain").textContent =
    ` ${format(RPgain)}`;
    document.getElementById("rps").textContent =
    `${format(rebirthpoints)}`;
    document.getElementById("rpcost-display").textContent =
    `Cost: ${format(RPupgradeCost)} RP`;
  document.getElementById("rmoneymul-display").textContent =
    `Rebirth money:  x${format(rmoneymultiply)} to money gain`;
  document.getElementById("rpcost2-display").textContent =
    `Cost: ${format(RPupgradeCost2)} RP`;
  document.getElementById("rppmul-display").textContent =
    `Rebirth PP:  x${format(rppmultiply)} to PP gain`;
  if (money.gte("1e10")) {
    document.getElementById("prestige-container").style.display = "inline-block";
  }
  if (gems.gte(1)) {
    document.getElementById("gem-container").style.display = "inline-block";
  }
  if (prestigepoints.gte(10)) {
    document.getElementById("automation-container").style.display = "inline-block";
  }
  if (prestigepoints.gte(1000)) {
    document.getElementById("generation-container").style.display = "inline-block";
  }
  if (prestigepoints.gte("1e6")) {
    document.getElementById("rebirth-container").style.display = "inline-block";
  }



  // if (money.gte("1e10")) {
  //   document.getElementById("prestige").style.display = "inline-block";
  // }
}

function prestige() {
    if (money.gte('1e10')) {
        prestigepoints = prestigepoints.add(PPgain);
        money = new Decimal(0);
        addend = new Decimal(1);
        upgradeCost = new Decimal(1);
        multiply = new Decimal(1);
        upgradeCost2 = new Decimal(100);
        exponent = new Decimal(1);
        upgradeCost3 = new Decimal(1000000);
        divider = new Decimal(1);
        upgradeCost4 = new Decimal("1e20");
      updateDisplay();
    }
  }

function rebirth() {
    if (prestigepoints.gte('1e8')) {
        rebirthpoints = rebirthpoints.add(RPgain)
        money = new Decimal(0);
        addend = new Decimal(1);
        upgradeCost = new Decimal(1);
        multiply = new Decimal(1);
        upgradeCost2 = new Decimal(100);
        exponent = new Decimal(1);
        upgradeCost3 = new Decimal(1000000);
        divider = new Decimal(1);
        upgradeCost4 = new Decimal("1e20");
        prestigepoints = new Decimal(0);
        PPgain = new Decimal(0);
        PPupgradeCost = new Decimal(1);
        addendpersecond = new Decimal(0);
        PPupgrade2Cost = new Decimal(1);
        pmoneymultiply = new Decimal(1);
        prestigegen = new Decimal(0);
        mulautobuy = new Decimal(0);
        expautobuy = new Decimal(0);
        divautobuy = new Decimal(0);
        prestigegen2 = new Decimal(0);
      updateDisplay();
    }
  }

function buyUpgrade() {
  if (money.gte(upgradeCost)) {
    money = money.minus(upgradeCost);
    addend = addend.plus(1);
    upgradeCost = upgradeCost.times(2.5);
    updateDisplay();
  }
}
function buyMulti() {
    if (money.gte(upgradeCost2)) {
      money = money.minus(upgradeCost2);
      multiply = multiply.mul(1.5);
      upgradeCost2 = upgradeCost2.pow(1.05);
      updateDisplay();
    }
}

function buyExponent() {
    if (money.gte(upgradeCost3)) {
      money = money.minus(upgradeCost3);
      exponent = exponent.mul(1.1);
      upgradeCost3 = upgradeCost3.pow(1.5);
      updateDisplay();
    }
}

function buyDivider() {
  if (money.gte(upgradeCost4)) {
    money = money.minus(upgradeCost4);
    divider = divider.mul(10);
    upgradeCost = upgradeCost.div(10);
    upgradeCost2 = upgradeCost2.div(10);
    upgradeCost3 = upgradeCost3.div(10);
    upgradeCost4 = upgradeCost4.pow(1.1);
    updateDisplay();
  }
}

function buyPrestigeUpgrade() {
  if (prestigepoints.gte(PPupgradeCost)) {
    prestigepoints = prestigepoints.minus(PPupgradeCost);
    addendpersecond = addendpersecond.mul(1.1);
    PPupgradeCost = PPupgradeCost.times(2);
    updateDisplay();
  }
}

function buyppmoneyUpgrade() {
  if (prestigepoints.gte(PPupgrade2Cost)) {
    prestigepoints = prestigepoints.minus(PPupgrade2Cost);
    pmoneymultiply = pmoneymultiply.mul(3);
    PPupgrade2Cost = PPupgrade2Cost.mul(2);
    updateDisplay();
  }
}

function buyGemUpgrade() {
  if (gems.gte(gemchancecost)) {
    gems = gems.minus(gemchancecost);
    gemchance = gemchance.add(0.01);
    updateDisplay();
  }
}

function buyGemMoney() {
  if (gems.gte(gemmoneycost)) {
    gems = gems.minus(gemmoneycost);
    gemmoneytimes = gemmoneytimes.add(1);
    gemmoneycost = gemmoneycost.mul(3);
    updateDisplay();
  }
}

function buyGemPP() {
  if (gems.gte(gemppcost)) {
    gems = gems.minus(gemppcost);
    gempptimes = gempptimes.add(1);
    gemppcost = gemppcost.mul(5);
    updateDisplay();
  }
}

function buyPrestigeGen() {
  if (prestigepoints.gte(prestigegencost)) {
    prestigepoints = prestigepoints.minus(prestigegencost);
    prestigegen = prestigegen.add(1);
    updateDisplay();
  }
}

function buyMultiautobuy() {
  if (money.gte(mulautobuyCost)) {
    money = money.minus(mulautobuyCost);
    mulautobuy = mulautobuy.add(1);
    updateDisplay();
  }
}

function buyExponentautobuy() {
  if (money.gte(expautobuyCost)) {
    money = money.minus(expautobuyCost);
    expautobuy = expautobuy.add(1);
    updateDisplay();
  }
}

function buyDividerautobuy() {
  if (money.gte(divautobuyCost)) {
    money = money.minus(divautobuyCost);
    divautobuy = divautobuy.add(1);
    updateDisplay();
  }
}

function buygemGen() {
  if (prestigepoints.gte(gemgencost)) {
    prestigepoints = prestigepoints.minus(gemgencost);
    gemgen = gemgen.add(1);
    gemgencost = gemgencost.mul(1.6)
    updateDisplay();
  }
}

function buybetterPrestigeGen() {
  if (prestigepoints.gte(prestigegen2cost)) {
    prestigepoints = prestigepoints.minus(prestigegen2cost);
    prestigegen2 = prestigegen2.add(1);
    updateDisplay();
  }
}

function buypriceReducer() {
  if (prestigepoints.gte(genupgcost)) {
    prestigepoints = prestigepoints.minus(gemgencost);
    genupg = new Decimal(0.9);
    upgradeCost = upgradeCost.pow(genupg);
    upgradeCost2 = upgradeCost2.pow(genupg);
    upgradeCost3 = upgradeCost3.pow(genupg);
    upgradeCost4 = upgradeCost4.pow(genupg);
    genupgcost = genupgcost.pow(3);
    updateDisplay();
  }
}

function buyprestigeautobuyer() {
  if (prestigepoints.gte(ppautocost)) {
    prestigepoints = prestigepoints.minus(ppautocost);
    ppautocost = true;
    updateDisplay();
  }
}

function buyRebirthUpgrade() {
  if (rebirthpoints.gte(RPupgradeCost)) {
    rebirthpoints = rebirthpoints.minus(RPupgradeCost);
    rmoneymultiply = rmoneymultiply.mul("1e8");
    RPupgradeCost = RPupgradeCost.mul(3);
    updateDisplay();
  }
}

function buyRebirthPPmulti() {
  if (rebirthpoints.gte(RPupgradeCost2)) {
    rebirthpoints = rebirthpoints.minus(RPupgradeCost2);
    rppmultiply = rppmultiply.mul(100);
    RPupgradeCost2 = RPupgradeCost2.mul(3);
    updateDisplay();
  }
}

function format(num) {
  if (!(num instanceof Decimal)) num = new Decimal(num);
    if (num.gte(1e6)) {
      return num.toExponential(2).replace("+", "");
    } else {
      return num.toFixed(3);
    }
}
function gameLoop() {
  // addend.mul(multiply).pow(exponent).mul(pmoneymultiply).mul(gemmoneymultibase.pow(gemmoneytimes))
  money = money.plus(addend.div(10).mul(multiply).pow(exponent).mul(pmoneymultiply).mul(gemmoneymultibase.pow(gemmoneytimes)).mul(rmoneymultiply));
  PPgain = money.max(1).pow(0.1).div(10).sub(0).max(0).floor().mul(gemppmultibase.pow(gempptimes).mul(rppmultiply));
  if(prestigegen.gte(1) && prestigegen2.lte(0)) prestigepoints = prestigepoints.add(PPgain.div(1000));
  if(prestigegen2.gte(1)) prestigepoints = prestigepoints.add(PPgain.div(10));
  if(gemgen.gte(1)) gems = gems.add(gemgen.div(10));
  addend = addend.plus(addendpersecond.div(100));
  if(mulautobuy.gte(1) && money.gte(upgradeCost2)) buyMulti();
  if(expautobuy.gte(1) && money.gte(upgradeCost3)) buyExponent();
  if(divautobuy.gte(1) && money.gte(upgradeCost4)) buyDivider();
  if(ppauto.gte(1) && prestigepoints.gte(PPupgradeCost)) buyppmoneyUpgrade();
  RPgain = prestigepoints.max(1).pow(0.15).div(8).sub(1).max(0).floor()
  updateDisplay();

}

// let money = new Decimal(localStorage.getItem('money') || 0);
// let addend = new Decimal(localStorage.getItem('addend') || 1);
// let upgradeCost = new Decimal(localStorage.getItem('upgradeCost') || 1);
// let multiply = new Decimal(localStorage.getItem('multiply') || 1);
// let upgradeCost2 = new Decimal(localStorage.getItem('upgradeCost2') || 100);
// let exponent = new Decimal(localStorage.getItem('exponent') || 1);
// let upgradeCost3 = new Decimal(localStorage.getItem('upgradeCost3') || 1000000);
// let divider = new Decimal(localStorage.getItem('divider') || 1);
// let upgradeCost4 = new Decimal(localStorage.getItem('upgradeCost4') || "1e35");
// let prestigepoints = new Decimal(localStorage.getItem('prestigepoints') || 0);
// let PPgain = localStorage.getItem('PPgain') || money.max(1).pow(0.1).div(10).sub(1).max(0).floor(); 
// let PPupgradeCost = new Decimal(localStorage.getItem('PPupgradeCost') || 1);
// let PPupgrade2Cost = new Decimal(localStorage.getItem('PPupgradeCost2') || 20);
// let addendpersecond = new Decimal(localStorage.getItem('addendpersecond') || 0);
// let gems = new Decimal(localStorage.getItem('gems') || 0);
// let gemchance = new Decimal(localStorage.getItem('gemchance') || 0.01)
// let gemchancecost = new Decimal(localStorage.getItem('gemchancecost') || 1);
// let gemmoneycost = new Decimal(localStorage.getItem('gemmoneycost') || 1);
// let gemmoneytimes = new Decimal(localStorage.getItem('gemmoneytimes') || 0);
// let gemmoneymultibase = new Decimal(localStorage.getItem('gemmoneymultibase') || 5);
// let gemppcost = new Decimal(localStorage.getItem('gemppcost') || 2);
// let gemppmultibase = new Decimal(localStorage.getItem('gemppmuultibase') || 2);
// let gempptimes = new Decimal(localStorage.getItem('gempptimes') || 0);
// let prestigegen = localStorage.getItem('prestigegen') || false;
// let prestigegencost = new Decimal(localStorage.getItem('prestigegencost') || 100);
// let mulautobuyCost = new Decimal(localStorage.getItem('mulautobuycost') || "1e25");
// let mulautobuy = localStorage.getItem('mulautobuy') || false;
// let expautobuyCost = new Decimal(localStorage.getItem('expautobuyCost') || "1e50");
// let expautobuy = localStorage.getItem('expautobuy') ||  false;
// let divautobuyCost = new Decimal(localStorage.getItem('divautobuycost') || "1e80");
// let divautobuy = localStorage.getItem('divautobuy') ||  false;
// let gemgencost = new Decimal(localStorage.getItem('gemgencost') || 10000);
// let gemgen = localStorage.getItem('gemgen') ||  true;
// let genupgcost = new Decimal(localStorage.getItem('genupgcost') || "1e6");
// let genupg = new Decimal(localStorage.getItem('genupg') || 1);

function saveGame() {
  localStorage.setItem('money', money.toString());
  localStorage.setItem('addend', addend.toString());
  localStorage.setItem('upgradeCost', upgradeCost.toString());
  localStorage.setItem('multiply', multiply.toString());
  localStorage.setItem('upgradeCost2', upgradeCost2.toString());
  localStorage.setItem('exponent', exponent.toString());
  localStorage.setItem('upgradeCost3', upgradeCost3.toString());
  localStorage.setItem('divider', divider.toString());
  localStorage.setItem('upgradeCost4', upgradeCost4.toString());
  localStorage.setItem('prestigepoints', prestigepoints.toString());
  localStorage.setItem('PPgain', PPgain.toString());
  localStorage.setItem('PPupgradeCost', PPupgradeCost.toString());
  localStorage.setItem('PPupgrade2Cost', PPupgrade2Cost.toString());
  localStorage.setItem('pmoneymultiply', pmoneymultiply.toString());
  localStorage.setItem('addendpersecond', addendpersecond.toString());
  localStorage.setItem('gems', gems.toString());
  localStorage.setItem('gemchance', gemchance.toString());
  localStorage.setItem('gemchancecost', gemchancecost.toString());
  localStorage.setItem('gemmoneycost', gemmoneycost.toString());
  localStorage.setItem('gemmoneytimes', gemmoneytimes.toString());
  localStorage.setItem('gemmoneymultibase', gemmoneymultibase.toString());
  localStorage.setItem('gemppcost', gemppcost.toString());
  localStorage.setItem('gemppmultibase', gemppmultibase.toString());
  localStorage.setItem('gempptimes', gempptimes.toString());
  localStorage.setItem('prestigegen', prestigegen.toString());
  localStorage.setItem('prestigegencost', prestigegencost.toString());
  localStorage.setItem('mulautobuyCost', mulautobuyCost.toString());
  localStorage.setItem('mulautobuy', mulautobuy.toString());
  localStorage.setItem('expautobuyCost', expautobuyCost.toString());
  localStorage.setItem('expautobuy', expautobuy.toString());
  localStorage.setItem('divautobuyCost', divautobuyCost.toString());
  localStorage.setItem('divautobuy', divautobuy.toString());
  localStorage.setItem('gemgencost', gemgencost.toString());
  localStorage.setItem('gemgen', gemgen.toString());
  localStorage.setItem('genupgCost', genupgcost.toString());
  localStorage.setItem('genupg', genupg.toString());
  localStorage.setItem('prestigegen2', prestigegen2.toString());
  localStorage.setItem('ppauto', ppauto.toString());
  localStorage.setItem('RPgain', RPgain.toString());
  localStorage.setItem('rebirthpoints', rebirthpoints.toString());
  localStorage.setItem('RPupgradeCost', RPupgradeCost.toString());
  localStorage.setItem('RPupgradeCost2', RPupgradeCost2.toString());
  localStorage.setItem('rmoneymultiply', rmoneymultiply.toString());
  localStorage.setItem('rppmultiply', rppmultiply.toString());
}

setInterval(() => {
  // Generate a random decimal between 0 and 1
  let roll = new Decimal(Math.random());

  if (roll.lt(gemchance)) {
    gems = gems.plus(1);
  }
}, 1000); // Once per second

setInterval(gameLoop, 100);
setInterval(saveGame, 10000);
updateDisplay();