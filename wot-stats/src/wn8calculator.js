import wn8exp from "./wn8exp.json";
import tanks from "./tanks.json";

export default function wn8calculator() {
  let RatingWN8_TotalDamage = 0;
  let RatingWN8_TotalFrag = 0;
  let RatingWN8_TotalSpot = 0;
  let RatingWN8_TotalDef = 0;
  let RatingWN8_TotalWinrate = 0;

  let RatingWN8_ExpDamage = 0;
  let RatingWN8_ExpFrag = 0;
  let RatingWN8_ExpSpot = 0;
  let RatingWN8_ExpDef = 0;
  let RatingWN8_ExpWinrate = 0;

  for (let t in tanks["tanks"]) {
    wn8exp.data.map((element) => {
      if (element.IDNum === tanks["tanks"][t].tank_id) {
        RatingWN8_TotalDamage += tanks["tanks"][t].all.damage_dealt;
        RatingWN8_ExpDamage +=
          element.expDamage * tanks["tanks"][t].all.battles;
        RatingWN8_TotalFrag += tanks["tanks"][t].all.frags;
        RatingWN8_ExpFrag += element.expFrag * tanks["tanks"][t].all.battles;
        RatingWN8_TotalSpot += tanks["tanks"][t].all.spotted;
        RatingWN8_ExpSpot += element.expSpot * tanks["tanks"][t].all.battles;
        RatingWN8_TotalDef += tanks["tanks"][t].all.dropped_capture_points;
        RatingWN8_ExpDef += element.expDef * tanks["tanks"][t].all.battles;
        RatingWN8_ExpWinrate +=
          (element.expWinRate / 100) * tanks["tanks"][t].all.battles;
      }
      return 0;
    });
  }

  let rDAMAGE = RatingWN8_TotalDamage / RatingWN8_ExpDamage;
  let rFRAG = RatingWN8_TotalFrag / RatingWN8_ExpFrag;
  let rSPOT = RatingWN8_TotalSpot / RatingWN8_ExpSpot;
  let rDEF = RatingWN8_TotalDef / RatingWN8_ExpDef;
  let rWIN = RatingWN8_TotalWinrate / RatingWN8_ExpWinrate;

  let rDAMAGEc = Math.max(0, (rDAMAGE - 0.22) / (1 - 0.22));
  let rFRAGc = Math.max(
    0,
    Math.min(rDAMAGEc + 0.2, (rFRAG - 0.12) / (1 - 0.12))
  );
  let rSPOTc = Math.max(
    0,
    Math.min(rDAMAGEc + 0.1, (rSPOT - 0.38) / (1 - 0.38))
  );
  let rDEFc = Math.max(0, Math.min(rDAMAGEc + 0.1, (rDEF - 0.1) / (1 - 0.1)));
  let rWINc = Math.max(0, (rWIN - 0.71) / (1 - 0.71));

  let eDAMAGE = 980 * rDAMAGEc;
  let eFRAG = 210 * rDAMAGEc * rFRAGc;
  let eSPOT = 155 * rFRAGc * rSPOTc;
  let eDEF = 75 * rDEFc * rFRAGc;
  let eWIN = 145 * Math.min(1.8, rWINc);

  let wn8 = eDAMAGE + eFRAG + eSPOT + eDEF + eWIN;

  return Math.round(wn8);
}
