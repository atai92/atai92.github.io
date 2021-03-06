var img =[];
var existingimmortals = [
  ["luna","sand_king","huskar","magnus","pugna","spirit_breaker","night_stalker"],
  ["antimage","faceless_void","disruptor","sven","leshrac","tinker","shadow_fiend"]
]

function testImage(url, callback, timeout) {
    timeout = timeout || 5000;
    var timedOut = false, timer;
    var img = new Image();
    img.onerror = img.onabort = function() {
        if (!timedOut) {
            clearTimeout(timer);
            callback(url, "error");
        }
    };
    img.onload = function() {
        if (!timedOut) {
            clearTimeout(timer);
            callback(url, "success");
        }
    };
    img.src = url;
    timer = setTimeout(function() {
        timedOut = true;
        callback(url, "timeout");
    }, timeout);
}

function appendImg(url, result) {
  if (result == "success") {
    var body = document.getElementById("bdy");
    var appended = false;

    var immortal1 = document.getElementById("immortalone");
    var immortal2 = document.getElementById("immortaltwo");
    var immortal3 = document.getElementById("immortalthree");
    var special = document.getElementById("special");

    var immortal_img = document.createElement("img");
    immortal_img.src = url;

    var str = url;

    for (var i = 0; i < 7; i++) {
      if (str.search(existingimmortals[0][i]) > -1) {
        immortal1.appendChild(immortal_img);
        appended = true;
      }
      else if (str.search(existingimmortals[1][i]) > -1) {
        immortal2.appendChild(immortal_img);
        appended = true;
      }
      if (!appended && str.search("enigma") < 0) {
        immortal3.appendChild(immortal_img);
        appended = true;
      }
      if (!appended && str.search("enigma") > 0) {
        special.appendChild(immortal_img);
        appended = true;
      }
    }

    //body.appendChild(immortal_img);
  }
}

function showImmortals() {
  for (var i = 0; i < img.length; i++) {
    testImage(img[i], appendImg);
  }
}

img = [
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/earthshaker.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/axe.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/sven.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/pudge.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/tiny.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/sand_king.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/kunkka.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/slardar.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/beastmaster.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/tidehunter.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/dragon_knight.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/dragonknight.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/wraith_king.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/wraithking.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/clockwerk.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/lifestealer.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/omniknight.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/night_stalker.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/huskar.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/doom.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/alchemist.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/spirit_breaker.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/brewmaster.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/lycan.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/treant_protector.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/chaos_knight.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/io.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/undying.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/centaur_warrunner.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/magnus.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/timbersaw.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/abaddon.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/bristleback.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/tusk.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/elder_titan.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/legion_commander.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/earth_spirit.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/phoenix.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/antimage.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/bloodseeker.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/drow_ranger.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/shadow_fiend.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/juggernaut.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/razor.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/mirana.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/venomancer.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/morphling.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/faceless_void.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/phantom_lancer.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/phantom_assassin.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/vengeful_spirit.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/viper.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/riki.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/clinkz.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/sniper.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/broodmother.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/templar_assassin.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/weaver.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/luna.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/spectre.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/bounty_hunter.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/meepo.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/ursa.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/nyx_assassin.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/gyrocopter.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/slark.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/lone_druid.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/medusa.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/naga_siren.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/terrorblade.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/troll_warlord.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/ember_spirit.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/crystal_maiden.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/bane.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/puck.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/lich.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/storm_spirit.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/lion.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/windranger.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/witch_doctor.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/zeus.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/enigma.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/lina.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/necrophos.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/shadow_shaman.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/warlock.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/tinker.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/queen_of_pain.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/natures_prophet.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/death_prophet.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/enchantress.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/pugna.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/jakiro.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/dazzle.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/chen.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/leshrac.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/silencer.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/dark_seer.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/ogre_magi.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/batrider.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/rubick.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/ancient_apparition.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/disruptor.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/invoker.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/keeper_of_the_light.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/outworld_devourer.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/skywrath_mage.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/shadow_demon.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/oracle.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/visage.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/techies.png",
  "http://cdn.dota2.com/apps/dota2/images/international2015/compendium/3d_hero_images/winter_wyvern.png"
]

showImmortals();
