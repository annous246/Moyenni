import { useEffect, useState } from "react";
function Subject({
  title,
  exam,
  tp,
  ds,
  setMoyennes,
  setMoyenneGenerale,
  mapper,
  index,
}) {
  const [tpValue, setTpValue] = useState("");
  const [examValue, setExamValue] = useState("");
  const [dsValue, setDsValue] = useState("");
  const [moyenne, setMoyenne] = useState("");

  function check(p) {
    if (!p || !p.length) return true;
    let c = 0;
    for (let k = 0; k < p.length; k++) {
      if (isNaN(parseInt(p[k]))) {
        if (p[k] != ".") return false;
        c++;
      }
    }
    return c <= 1 && parseFloat(p) <= 20.0;
  }
  function handleDs(e) {
    if (check(e.target.value)) {
      setDsValue(e.target.value);
    }
  }

  function handleExam(e) {
    if (check(e.target.value)) {
      setExamValue(e.target.value);
    }
  }

  function handleTp(e) {
    if (check(e.target.value)) {
      setTpValue(e.target.value);
    }
  }

  useEffect(() => {
    if (
      ((dsValue && dsValue.length) || !ds) &&
      ((tpValue && tpValue.length) || !tp) &&
      ((examValue && examValue.length) || !exam)
    ) {
      const dsv = ds ? parseInt(dsValue) : 0;
      const tpv = tp ? parseInt(tpValue) : 0;
      const examv = exam ? parseInt(examValue) : 0;
      const examc = mapper[title].exam;
      const dsc = mapper[title].ds;
      const tpc = mapper[title].tp;

      const my = parseFloat(
        parseFloat(examc * examv + dsc * dsv + tpc * tpv) /
          parseFloat(examc + dsc + tpc)
      );
      console.log(my);
      setMoyenne(my.toFixed(2));
      setMoyennes((prev) => {
        let newArray = JSON.parse(JSON.stringify(prev));
        newArray[index] = my;
        return newArray;
      });
    } else {
      setMoyenne("");
      setMoyenneGenerale("");
    }
  }, [dsValue, examValue, tpValue]);

  return (
    <div id="subContainer" className="column">
      <h4>{title}</h4>
      {exam ? (
        <div className="input spanner">
          <label>Note Examen</label>
          <input
            value={examValue}
            onChange={handleExam}
            type="text"
            placeholder="Note Examen"
          />
        </div>
      ) : (
        ""
      )}
      {tp ? (
        <div className="input spanner">
          <label>Note TP</label>
          <input
            value={tpValue}
            onChange={handleTp}
            type="text"
            placeholder="Note TP"
          />
        </div>
      ) : (
        ""
      )}
      {ds ? (
        <div className="input spanner">
          <label>Note DS</label>
          <input
            value={dsValue}
            onChange={handleDs}
            type="text"
            placeholder="Note DS"
          />
        </div>
      ) : (
        ""
      )}
      <h4>Moyenne :{moyenne}</h4>
    </div>
  );
}

export default Subject;
